import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9ff;
  height: 40px;
  border-radius: 8px;
  padding: 0 .5rem;
`;

export const Button = styled.p`
  cursor: pointer;
  opacity: .5;
  transition: .2s;
  font-size: .75rem;

  :hover {
    opacity: 1;
  }
`;