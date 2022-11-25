import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, Button } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Button to="/">Home</Button>
          <Button to="/movies">Movies</Button>
        </Nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
