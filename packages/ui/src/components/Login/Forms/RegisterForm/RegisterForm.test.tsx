import Supabase from "@/../../services/Supabase";
import { fireEvent, render } from "@/../utils/test-utils";
import { RegisterForm } from "./RegisterForm";

jest.mock('@/../../services/Supabase')

const signUp = Supabase.auth.signUp as jest.Mock


describe('<RegisterForm />', () => {
    it('should render', () => {
        expect(render(<RegisterForm />)).toBeTruthy()
    });

    it('should successfully display success message on register', () => {
        signUp.mockImplementationOnce(() => Promise.resolve())
        const { container, getByTestId } = render(<RegisterForm />)
        const email = getByTestId('signUp-email')
        const password = getByTestId('signUp-password')
        fireEvent.change(email, { target: { value: 'test@test.com' }})
        fireEvent.change(password, { target: { value: 'password' }})
        expect(email).toHaveValue('test@test.com')
    });

    it('should display error message on error', () => {
        
    });
})
