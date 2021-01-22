import { TextInput } from '../../../common/TextInput';
import {
  ItemContainer,
  Item,
  StyledForm,
  Price,
  AddItemsBtn,
  StyledTotal,
  FormTotals
} from './CreateForm.styles';
import { RiPriceTag2Line, RiShoppingBasketLine } from 'react-icons/ri';
import { BiText } from 'react-icons/bi';
import { useCallback, useState } from 'react';
import { StyledLabel } from '../../../common/TextInput/TextInput.style';
import { IconButton } from '@material-ui/core';
import { IoMdRemoveCircleOutline } from 'react-icons/io'
interface Item {
    id: number
    item: string
    price: number | string
}

interface CreateFormState {
    receiptNumber: string
    description: string
    date: string
    items: Item[]
    totalCost: number
}
export const CreateForm = () => {
  const [total, setTotal] = useState<number>(0)
  const [formData, setFormData] = useState<CreateFormState>({
      receiptNumber: '',
      description: '',
      date: new Date().toDateString(),
      items:[
        {
            id: 0,
            item: '',
            price: '',
          },
      ],
      totalCost: 0
  })
  const sumTotals = () => formData.items.reduce((acc, curr) => { return acc + Number(curr.price) },0)
  const handleAddItems = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setFormData((ps) => ({ ...ps, items: [...ps.items, { id: formData.items.length, item: '', price: '' }]}));
  };

  const handleChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(ps => ({...ps, [key]: event.target.value }))
  }

  const handleItemChange = (key: string, id) => (event: React.ChangeEvent<HTMLInputElement>) =>  {
      animateNumber(formData.totalCost, sumTotals())
      setFormData(ps => ({
         ...ps, 
         totalCost: sumTotals(),
         items: ps.items.map(item => item.id === id ? { ...item, [key]: event.target.value} : item) 
        }))
  }

  const handleItemRemoval = (id: number) => () => {
        animateNumber(formData.totalCost, sumTotals())
      setFormData(ps => ({ 
          ...ps,
          totalCost: sumTotals(),
          items: ps.items.filter(item => item.id !== id) 
        }))
  }

  const animateNumber = (curr, end) => {
      if(curr <= end) {

          setTimeout(() => {
            setTotal(curr)  
            animateNumber(curr + 1, end)           
            //   setFormData(ps => ({...ps, totalCost: sumTotals()}))
          },20)
      }
  }

  return (
    <StyledForm>
      <TextInput StartIcon={BiText} label="Receipt no." value={formData.receiptNumber} onChange={handleChange('receiptNumber')} />
      <TextInput StartIcon={BiText} label="Description (optional)" value={formData.description} onChange={handleChange('description')} />
      <ItemContainer>
        {formData.items.map((item, index) => (
          <>
            <Item key={index}>
              <TextInput
                onChange={handleItemChange('item', item.id)}
                value={item.item}
                StartIcon={RiShoppingBasketLine}
                label="Item"
              />
            </Item>
            <Price key={index}>
              <TextInput
                type='number'
                onChange={handleItemChange('price', item.id)}
                value={item.price}
                StartIcon={RiPriceTag2Line}
                width="200px"
                label="Price"
              />
              {item.id > 0 && <IconButton onClick={handleItemRemoval(item.id)}><IoMdRemoveCircleOutline /></IconButton>}
            </Price>
          </>
        ))}
        <AddItemsBtn onClick={handleAddItems}>
          <RiShoppingBasketLine />
          Add item
        </AddItemsBtn>
      </ItemContainer>

      <FormTotals>
        <StyledLabel>Total:</StyledLabel>
        <StyledTotal>{total}</StyledTotal>
    </FormTotals>
    </StyledForm>
  );
};
