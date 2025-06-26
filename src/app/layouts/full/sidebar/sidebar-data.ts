import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Years',
  },
  {
    displayName: '2025',
    children: [
      {
        displayName: 'January'
      },
      {
        displayName: 'February'
      },
      {
        displayName: 'March'
      },
      {
        displayName: 'April'
      },
      {
        displayName: 'May'
      },
      {
        displayName: 'June'
      },
      {
        displayName: 'July'
      },
      {
        displayName: 'August'
      },
      {
        displayName: 'September'
      },
      {
        displayName: 'October'
      },
      {
        displayName: 'November'
      },
      {
        displayName: 'December'
      },
    ]
  },
  {
    displayName: '2024',
    children: [
      {
        displayName: 'January'
      },
      {
        displayName: 'February'
      },
      {
        displayName: 'March'
      },
      {
        displayName: 'April'
      },
      {
        displayName: 'May'
      },
      {
        displayName: 'June'
      },
      {
        displayName: 'July'
      },
      {
        displayName: 'August'
      },
      {
        displayName: 'September'
      },
      {
        displayName: 'October'
      },
      {
        displayName: 'November'
      },
      {
        displayName: 'December'
      },
    ]
  },
  {
    displayName: '2023',
    children: [
      {
        displayName: 'January'
      },
      {
        displayName: 'February'
      },
      {
        displayName: 'March'
      },
      {
        displayName: 'April'
      },
      {
        displayName: 'May'
      },
      {
        displayName: 'June'
      },
      {
        displayName: 'July'
      },
      {
        displayName: 'August'
      },
      {
        displayName: 'September'
      },
      {
        displayName: 'October'
      },
      {
        displayName: 'November'
      },
      {
        displayName: 'December'
      },
    ]
  },
  {
    displayName: '2022',
    children: [
      {
        displayName: 'January'
      },
      {
        displayName: 'February'
      },
      {
        displayName: 'March'
      },
      {
        displayName: 'April'
      },
      {
        displayName: 'May'
      },
      {
        displayName: 'June'
      },
      {
        displayName: 'July'
      },
      {
        displayName: 'August'
      },
      {
        displayName: 'September'
      },
      {
        displayName: 'October'
      },
      {
        displayName: 'November'
      },
      {
        displayName: 'December'
      },
    ]
  },
  {
    displayName: "Components",
    children: [
      {
        displayName: 'Badge',
        iconName: 'archive',
        route: '/ui-components/badge',
      },
      {
        displayName: 'Chips',
        iconName: 'info-circle',
        route: '/ui-components/chips',
      },
      {
        displayName: 'Lists',
        iconName: 'list-details',
        route: '/ui-components/lists',
      },
      {
        displayName: 'Menu',
        iconName: 'file-text',
        route: '/ui-components/menu',
      },
      {
        displayName: 'Tooltips',
        iconName: 'file-text-ai',
        route: '/ui-components/tooltips',
      },
      {
        displayName: 'Forms',
        iconName: 'clipboard-text',
        route: '/ui-components/forms',
      },
      {
        displayName: 'Tables',
        iconName: 'table',
        route: '/ui-components/tables',
      },

      {
        navCap: 'Auth',
      },
      {
        displayName: 'Login',
        iconName: 'login',
        route: '/authentication',
        children: [
          {
            displayName: 'Login',
            iconName: 'point',
            route: '/authentication/login',
          },
        ],
      },
      {
        displayName: 'Register',
        iconName: 'user-plus',
        route: '/authentication',
        children: [
          {
            displayName: 'Register',
            iconName: 'point',
            route: '/authentication/register',
          },
        ],
      },
    ]
  },
];
