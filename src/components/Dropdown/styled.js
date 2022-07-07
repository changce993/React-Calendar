import styled from 'styled-components';

export const Container = styled.div`
  width: 96px;
  height: ${props => props.height || "48px"};
  background-color: #f9f9ff;
  border-radius: 8px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  cursor: pointer;
  border: none;
  transition: .3s;
  user-select: none;
`;

export const Options = styled.div`
  width: 100%;
  position: absolute;
  box-shadow: 4px 8px 32px #0a164622;
  background-color: white;
  margin-top: 8px;
  max-height: 180px;
  overflow-y: scroll;
  border-radius: 6px;
  z-index: 1;

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: purple;
  }
`;

export const Option = styled.p`
  padding: 12px 16px;
  transition: .3s;
  font-weight: medium;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;