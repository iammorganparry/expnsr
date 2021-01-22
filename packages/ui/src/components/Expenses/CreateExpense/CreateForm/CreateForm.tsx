import { TextInput } from "../../../common/TextInput"
import { ItemContainer, Item, StyledForm, Price, AddItemsBtn } from "./CreateForm.styles"
import { RiPriceTag2Line, RiShoppingBasketLine } from 'react-icons/ri'
import { BiText } from 'react-icons/bi'
export const CreateForm = () => {

    return (
        <StyledForm>
            <TextInput StartIcon={BiText} label='Receipt no.' />
            <TextInput StartIcon={BiText} label='Description (optional)' />
            <ItemContainer>
                <Item>
                    <TextInput StartIcon={RiShoppingBasketLine} label='Item' />
                </Item>
                <Price>
                    <TextInput StartIcon={RiPriceTag2Line} width='200px' label='Price' />
                </Price>
                <AddItemsBtn>
                    <RiShoppingBasketLine />
                    Add item
                </AddItemsBtn>
            </ItemContainer>

            {/* <FormTotals>
                
            </FormTotals> */}
        </StyledForm>
    )
}