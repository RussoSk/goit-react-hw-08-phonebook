
import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  padding: 5px 10px;
  background-color: #e66d6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  &:hover {
    background-color: #f07c79;
  }

  &:focus {
    outline: none;
    background-color: #d75e5c;
  }
  `;
export const ListItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
  background-color: #e6f0ea;
  border-radius: 5px;
  margin-bottom: 3px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;