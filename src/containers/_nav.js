export default [

  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Test Code',
        to: '/menus/TestCode',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Menu',
        to: '/menus/NewMenu',
      },
    ]
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'New Menu',
    route: '/menus',
    icon: 'cil-home',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Home Page',
        to: '/home',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Regiser',
        to: '/register',
      },
    ]
  },



  
    // _tag: 'CSidebarNavDropdown',
    // name: 'Pages',
    // route: '/pages',
    // icon: 'cil-star',
    // _children: [
       
     
      // ,
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Register',
      //   to: '/register',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Error 404',
      //   to: '/404',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Error 500',
      //   to: '/500',
      // },
    // ]
 
  
  
]


