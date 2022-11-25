import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledList = styled.li`
  list-style: none;
  width: 300px;
  cursor: pointer;
  text-decoration: none;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  width: 100%;
`;
export const Poster = styled.img`
  display: block;
  width: 300px;
  height: 460px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background: linear-gradient(to bottom, #e8edec, #d2d1d3);
    box-shadow: 0px 3px 20px 0px black;
    transform: scale(1.05);
  }
`;
