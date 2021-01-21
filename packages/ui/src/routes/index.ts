import { GoBrowser } from 'react-icons/go'
import { AiFillFileText } from 'react-icons/ai'
export interface ApplicationRouteLink {
  href: string;
  name: string;
  Icon?: React.ElementType;
}
export default [
  {
    href: '/',
    name: 'Dashboard',
    Icon: GoBrowser
  },
  {
    href: '/expenses',
    name: 'Expenses',
    Icon: AiFillFileText
  },
] as ApplicationRouteLink[];
