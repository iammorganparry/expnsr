import { Header } from '../../Layout/Header/Header';
import { StyledContainer } from '../../Layout/TopNav/NavigationBtns/NavigationBtns.styles';
import { FormContainer } from '../../Login/Forms/LoginForm/LoginForm.style';
import { Dropzone } from './Dropzone/Dropzone';
import { DropzoneContainer } from './CreateExpense.styles';
import { CreateForm } from './CreateForm';

export const CreateExpense = () => {
  return (
    <>
      <Header title="Create Expense" />
      <StyledContainer>
        <DropzoneContainer>
          <Dropzone />
        </DropzoneContainer>
        <FormContainer>
          <CreateForm />
        </FormContainer>
      </StyledContainer>
    </>
  );
};
