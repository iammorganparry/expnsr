import { render } from '@/../utils/test-utils';
import { Header } from './Header';

describe('<Header />', () => {
  it('should render', () => {
    expect(render(<Header />)).toBeTruthy();
  });

  it('should  display a header title', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render children', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Children test')).toBeInTheDocument();
  });
});
