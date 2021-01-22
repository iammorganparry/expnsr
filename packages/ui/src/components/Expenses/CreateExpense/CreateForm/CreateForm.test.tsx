import { fireEvent, render } from '@/../utils/test-utils';
import { CreateForm } from './CreateForm.styles';

describe('<CreateForm /> - Expenses', () => {
  const Component = render(<CreateForm />);
  const { getByLabelText, getByText } = Component;
  const item = getByLabelText('Item');
  const price = getByLabelText('Price');
  const total = getByLabelText('Total');
  const next = getByText('NEXT');
  const receipt = getByLabelText('Receipt no.');

  it('should render', () => {
    expect(Component).toBeTruthy();
  });

  it('should contain a receipt number field', () => {
    expect(input).toBeInTheDocument();
  });

  it('should contain a items section with name and price inputs for the items', () => {
    const item = getByLabelText('Item');
    const price = getByLabelText('Price');
    expect(item).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
  it('should show an add more button and onClick.. add a new item row', () => {
    const btn = getByText('Add item');
    expect(btn).toBeInTheDocument();
  });

  it('should be able to remove an item', () => {
      
  });

  it('should show a grand total that === all item totals', () => {
    fireEvent.change(item, { target: { value: 'Test' } });
    fireEvent.change(price, { target: { value: '10.00' } });
    expect(total).toHaveTextContent('10');
  });

  it('should have a disabled next button that will only enable once a receipt number +  one item has been added ', () => {
    expect(next).toBeDisabled();
    fireEvent.change(receipt, { target: { value: '12314' } });
    expect(next).toBeEnabled();
  });

  // it('should navigate to next stage of the creation process on click of next', () => {

  // });
});
