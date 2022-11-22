import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  height: 45px;
  background-color: #3a18b1;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 230px;
  padding: 10px;
  margin: 0 auto;
`;
export const Button = styled(NavLink)`
  box-sizing: border-box;
  background-color: white;
  color: black;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  &:hover,
  &.active {
    background-color: blue;
    color: white;
  }
`;
