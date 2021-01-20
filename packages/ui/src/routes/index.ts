export interface ApplicationRouteLink {
  href: string;
  name: string;
  Icon?: React.ElementType;
}
export default [
  {
    href: '/',
    name: 'Dashboard',
  },
  {
    href: '/expenses',
    name: 'Expenses',
  },
] as ApplicationRouteLink[];
