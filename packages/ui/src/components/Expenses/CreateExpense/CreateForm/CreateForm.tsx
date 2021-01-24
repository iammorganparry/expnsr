import { TextInput } from '../../../common/TextInput';
import {
  ItemContainer,
  Item,
  StyledForm,
  Price,
  AddItemsBtn,
  StyledTotal,
  FormTotals,
  StyledItems,
  StyledDecimal,
  Total,
  RemovalContainer,
  StyledIconButton,
  SubmitContainer,
} from './CreateForm.styles';
import { RiPriceTag2Line, RiShoppingBasketLine } from 'react-icons/ri';
import { BiText } from 'react-icons/bi';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { StyledLabel } from '../../../common/TextInput/TextInput.style';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { CurrencyInput } from '../../../common/CurrencyInput/CurrencyInput';
import faker from 'faker';
import { Button } from '../../../common/Button/Button';
import { SupabaseTypes } from '@expnsr/types/supabase';
import supabase from '@expnsr/services/Supabase';
import { AuthorizedUserContext } from '../../../../hooks/useAuthorizeUser';
import { useToasts } from 'react-toast-notifications';
import { ParsedItemsContext } from '@/hooks/useParsedItems/context';

interface Item {
  id: number;
  item: string;
  price: string;
  itemPlaceholder: string;
  pricePlaceholder: string;
}

interface CreateFormState {
  receiptNumber: string;
  description: string;
  date: string;
  items: Item[];
  totalCost: number;
}
export const CreateForm = memo(() => {
  const [total, setTotal] = useState<number>(0);
  const [userContext] = useContext(AuthorizedUserContext);
  const { addToast } = useToasts();
  const [items] = useContext(ParsedItemsContext);
  const generateFakeProduct = useCallback(
    () => faker.commerce.productName(),
    [],
  );
  const generateFakePrice = useCallback(
    () => faker.commerce.price(5.0, 50.0, 2, '£'),
    [],
  );
  const initState = {
    receiptNumber: '',
    description: '',
    date: new Date().toDateString(),
    items: [
      {
        id: 0,
        item: '',
        price: '',
        itemPlaceholder: generateFakeProduct(),
        pricePlaceholder: generateFakePrice(),
      },
    ],
    totalCost: 0,
  };
  const [formData, setFormData] = useState<CreateFormState>(initState);
  const sumTotals = useCallback(
    () =>
      formData.items.reduce((acc, curr) => {
        return acc + Number(curr.price.replace(/,/g, ''));
      }, 0),
    [formData],
  );
  const calcDecimal = useCallback(() => Math.floor((total % 1) * 100), [total]);
  const handleAddItems = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setFormData((ps) => ({
      ...ps,
      items: [
        ...ps.items,
        {
          id: formData.items.length,
          item: '',
          price: '',
          pricePlaceholder: generateFakePrice(),
          itemPlaceholder: generateFakeProduct(),
        },
      ],
    }));
  };

  const handleChange = useCallback(
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((ps) => ({ ...ps, [key]: event.target.value }));
    },
    [],
  );

  const handleItemChange = useCallback(
    (key: string, id) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((ps) => ({
        ...ps,
        totalCost: total,
        items: ps.items.map((item) =>
          item.id === id ? { ...item, [key]: event.target.value } : item,
        ),
      }));
    },
    [],
  );

  const handleItemRemoval = useCallback(
    (id: number) => () => {
      setFormData((ps) => ({
        ...ps,
        totalCost: total,
        items: ps.items.filter((item) => item.id !== id),
      }));
    },
    [],
  );
  const roundTotal = useCallback(() => Math.floor(total), [total]);

  const handleFormSubmit = useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();
      const { data, error } = await supabase
        .from<SupabaseTypes['expenses']>('expenses')
        .insert([
          {
            receipt_number: formData.receiptNumber,
            description: formData.description,
            date: new Date().toISOString(),
            total_cost: String(formData.totalCost),
            user_id: userContext.id,
          },
        ]);
      const itemData = await supabase
        .from<SupabaseTypes['expense_items']>('expense_items')
        .insert(
          formData.items.map((item) => ({
            item: item.item,
            price: item.price,
            expense_id: data?.id,
            user_id: userContext.id,
          })),
        );
      if (error || itemData.error) {
        alert(error);
      } else {
        //reset form
        addToast('Successfully submitted expense', { appearance: 'success' });
        setFormData(initState);
      }
    },
    [userContext, formData],
  );

  useEffect(() => {
    items && items.length > 0 ? 
      setFormData((ps) => ({
        ...ps,
        items: [
          ...items.map((item, index) => ({
            id: ps.items.length + index,
            item: item.item,
            price: item.price,
            pricePlaceholder: generateFakePrice(),
            itemPlaceholder: generateFakeProduct(),
          })),
        ],
      })) : null
  }, [items]);

  useEffect(() => setTotal(sumTotals()), [formData]);

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <TextInput
        StartIcon={BiText}
        defaultValue=""
        value={formData.receiptNumber || ''}
        label="Receipt no."
        onChange={handleChange('receiptNumber')}
      />
      <TextInput
        defaultValue=""
        value={formData.description || ''}
        StartIcon={BiText}
        label="Description (optional)"
        onChange={handleChange('description')}
      />
      <ItemContainer>
        {formData.items.map((item, index) => (
          <StyledItems key={index}>
            <Item>
              <TextInput
                defaultValue=""
                value={item.item || ''}
                onChange={handleItemChange('item', item.id)}
                placeholder={item.itemPlaceholder}
                StartIcon={RiShoppingBasketLine}
                label="Item"
              />
            </Item>
            <Price>
              <CurrencyInput
                defaultValue=""
                value={item.price || ''}
                placeholder={item.pricePlaceholder}
                onChange={handleItemChange('price', item.id)}
                StartIcon={RiPriceTag2Line}
                width="200px"
                label="Price"
              />
              <RemovalContainer>
                {item.id > 0 && (
                  <StyledIconButton onClick={handleItemRemoval(item.id)}>
                    <IoMdRemoveCircleOutline />
                  </StyledIconButton>
                )}
              </RemovalContainer>
            </Price>
          </StyledItems>
        ))}
        <AddItemsBtn onClick={handleAddItems}>
          <RiShoppingBasketLine />
          Add item
        </AddItemsBtn>
      </ItemContainer>

      <FormTotals>
        <StyledLabel>Total:</StyledLabel>
        <Total>
          <StyledTotal total={roundTotal()}>$</StyledTotal>
          <StyledDecimal total={calcDecimal()}>.</StyledDecimal>
        </Total>
      </FormTotals>
      <SubmitContainer>
        <Button onClick={handleFormSubmit} text="Submit Expense" width={300} />
      </SubmitContainer>
    </StyledForm>
  );
});
