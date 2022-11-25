import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkButton = styled.div`
  margin: 20px;
`;

export const LinkBtn = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 350ms;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  width: 100px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  :focus {
    background: linear-gradient(to bottom, #e8edec, #d2d1d3);
    box-shadow: 0px 3px 20px 0px black;
    transform: scale(1.05);
    color: rgba(0, 0, 0, 0.4);
    font-weight: bold;
  }
`;
