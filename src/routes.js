import React from 'react';
const TestCode = React.lazy(() => import('./views/menus/testCode/TestCode'));
const NewMenu = React.lazy(() => import('./views/menus/newMenu/NewMenu'));
const Home = React.lazy(() => import('./views/home'));
const Test = React.lazy(() => import('./views/test'));
const Register = React.lazy(() => import('./views/register'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/menus/TestCode', name: 'TestCode', component: TestCode },
  { path: `/menus/NewMenu`, name: 'NewMenu', component: NewMenu},
  { path: `/home`, name: 'Home', component: Home},
  { path: `/test`, name: 'test', component: Test},
  { path: `/register`, name: 'Register', component: Register},
];

export default routes;



