import { render } from '@/../utils/test-utils';
import { Content } from './Content';

describe('<Content />', () => {
  const Comp = render(
    <Content>
      <p>Children</p>
    </Content>,
  );
  it('should render', () => {
    expect(Comp).toBeTruthy();
  });

  it('should render Children', () => {
    const { getByText } = Comp;
    expect(getByText('Children')).toBeInTheDocument();
  });
});
