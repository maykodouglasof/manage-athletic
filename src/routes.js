import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Logout = React.lazy(() => import('./views/Logout'));
const Wall = React.lazy(() => import('./views/Wall'));
const Documents = React.lazy(() => import('./views/Documents'));
const Reservations = React.lazy(() => import('./views/Reservations'));
const User = React.lazy(() => import('./views/User'));
const Profile = React.lazy(() => import('./views/Profile'));
const Billets = React.lazy(() => import('./views/Billets'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/wall', name: 'Wall', component: Wall },
  { path: '/documents', name: 'Documents', component: Documents },
  { path: '/reservations', name: 'Reservations', component: Reservations },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/user', name: 'User', component: User },
  { path: '/billets', name: 'Billets', component: Billets },
];

export default routes;
