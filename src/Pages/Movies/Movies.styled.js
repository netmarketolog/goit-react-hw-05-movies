import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 30px;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const StyledInput = styled.input`
  width: 400px;
  border: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding: 15px;
  margin-right: 20px;
`;
export const SearchButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
  }
`;
export const List = styled.ul`
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;
