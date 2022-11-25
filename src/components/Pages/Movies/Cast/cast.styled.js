import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
export const CastPhoto = styled.img`
  width: 200px;
  padding: 20px;
`;

export const CastItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
    list-style: none;
  }
`;
