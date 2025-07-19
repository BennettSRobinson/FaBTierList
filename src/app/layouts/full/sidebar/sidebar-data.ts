import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Years',
  },
  {
    displayName: '2025',
    children: [
      { displayName: 'December', route: '/tierlist/2025/December' },
      { displayName: 'November', route: '/tierlist/2025/November' },
      { displayName: 'October', route: '/tierlist/2025/October' },
      { displayName: 'September', route: '/tierlist/2025/September' },
      { displayName: 'August', route: '/tierlist/2025/August' },
      { displayName: 'July', route: '/tierlist/2025/July' },
      { displayName: 'June', route: '/tierlist/2025/June' },
      { displayName: 'May', route: '/tierlist/2025/May' },
      { displayName: 'April', route: '/tierlist/2025/April' },
      { displayName: 'March', route: '/tierlist/2025/March' },
      { displayName: 'February', route: '/tierlist/2025/February' },
      { displayName: 'January', route: '/tierlist/2025/January' },
    ]
  },
  {
    displayName: '2024',
    children: [
      { displayName: 'December', route: '/tierlist/2024/December' },
      { displayName: 'November', route: '/tierlist/2024/November' },
      { displayName: 'October', route: '/tierlist/2024/October' },
      { displayName: 'September', route: '/tierlist/2024/September' },
      { displayName: 'August', route: '/tierlist/2024/August' },
      { displayName: 'July', route: '/tierlist/2024/July' },
      { displayName: 'June', route: '/tierlist/2024/June' },
      { displayName: 'May', route: '/tierlist/2024/May' },
      { displayName: 'April', route: '/tierlist/2024/April' },
      { displayName: 'March', route: '/tierlist/2024/March' },
      { displayName: 'February', route: '/tierlist/2024/February' },
      { displayName: 'January', route: '/tierlist/2024/January' },
    ]
  },
  {
    displayName: '2023',
    children: [
      { displayName: 'December', route: '/tierlist/2023/December' },
      { displayName: 'November', route: '/tierlist/2023/November' },
      { displayName: 'October', route: '/tierlist/2023/October' },
      { displayName: 'September', route: '/tierlist/2023/September' },
      { displayName: 'August', route: '/tierlist/2023/August' },
      { displayName: 'July', route: '/tierlist/2023/July' },
      { displayName: 'June', route: '/tierlist/2023/June' },
      { displayName: 'May', route: '/tierlist/2023/May' },
      { displayName: 'April', route: '/tierlist/2023/April' },
      { displayName: 'March', route: '/tierlist/2023/March' },
      { displayName: 'February', route: '/tierlist/2023/February' },
      { displayName: 'January', route: '/tierlist/2023/January' },
    ]
  },
  {
    displayName: '2022',
    children: [
      { displayName: 'December', route: '/tierlist/2022/December' },
      { displayName: 'November', route: '/tierlist/2022/November' },
      { displayName: 'October', route: '/tierlist/2022/October' },
      { displayName: 'September', route: '/tierlist/2022/September' },
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
