import { render } from "@/../utils/test-utils";
import { NavigationBtns } from "./NavigationBtns";

describe('<NavigationBtns />', () => {
    const btns = [{ route: ''}, {route: ''}]
    const Component = render(<NavigationBtns btnConfig={btns} />)
    it('should render', () => {
        
    });

    it('should programatically navigate forwards and backwards', () => {
        
    });
})
