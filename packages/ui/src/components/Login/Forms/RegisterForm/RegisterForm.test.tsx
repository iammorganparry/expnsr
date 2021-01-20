// import Supabase from "@/../../services/Supabase";
import { fireEvent, render, waitFor } from '@/../utils/test-utils';
import { RegisterForm } from './RegisterForm';
import supabase from '@expnsr/services/Supabase';

// jest.mock('@expnsr/services/Supabase')
// jest.mock('@supabase/supabase-js')
const signUp = supabase.auth.signUp as jest.Mock;

const obj = {
  signUp,
};

const signUpSpy = jest.spyOn(obj, 'signUp');

describe('<RegisterForm />', () => {
  it('should render', () => {
    expect(render(<RegisterForm />)).toBeTruthy();
  });

  it('should successfully display success message on register', async () => {
    // signUp.mockImplementationOnce(() => Promise.resolve())
    const { container, getByTestId } = render(<RegisterForm />);
    const email = getByTestId('signUp-email');
    const password = getByTestId('signUp-password');
    const submitBtn = getByTestId('signUp-btn');
    fireEvent.change(email, { target: { value: 'test@test.com' } });
    fireEvent.change(password, { target: { value: 'password' } });
    expect(email).toHaveValue('test@test.com');
    fireEvent.click(submitBtn);
    await waitFor(() => expect(signUpSpy).toHaveBeenCalledTimes(1));
  });

  it('should display error message on error', () => {});
});
