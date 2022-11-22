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
    </>
  );
};
