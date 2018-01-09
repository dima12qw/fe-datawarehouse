export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'employee',
        data: {
          menu: {
            title: 'Angajati',
            icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'department',
        data: {
          menu: {
            title: 'Department',
            icon: 'ion-ios-people',
            selected: false,
            expanded: false,
            order: 100
          }
        }
      }
    ]
  }
];
