import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin: 0;
`;

export const Nav = styled.nav`
  width: 300px;
  border-radius: 25px;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 0 10px;
  margin: 20px auto;
`;
export const Button = styled(NavLink)`
  list-style: none;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 12px 16px;
  margin: 0 8px;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  :before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: 0.3 s;
    border-radius: 25px;
  }
  :hover {
    color: black;
  }
  :hover::before {
    background: linear-gradient(to bottom, #e8edec, #d2d1d3);
    box-shadow: 0px 3px 20px 0px black;
    transform: scale(1.05);
  }
`;
