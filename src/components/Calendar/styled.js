import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  max-width: 100%;
  background-color: white;
  box-shadow: 4px 16px 48px #0a164611;
  padding: 2rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  max-width: 160px;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-radius: .5rem;
  background-color: ${props => props.bg};
  color: white;
  color: ${props => props.color};
  cursor: pointer;
`;

export const Select = styled.select`
  width: ${props => props.width || "100%"};
  height: 40px;
  background-color: #f9f9ff;
  outline: none;
  border: none;
  border-radius: .5rem;
  padding: 0 .5rem;
`;