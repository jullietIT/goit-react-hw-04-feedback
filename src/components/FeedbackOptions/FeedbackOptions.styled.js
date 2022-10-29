import styled from 'styled-components';

export const Title = styled.h2`
  justify-content: center;
  margin-bottom: 20px;
  font-size: 32px;

  display: flex;
`;

export const BlockButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 8px;
  min-width: 120px;
  padding: 8px 16px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 6px;
  text-transform: capitalize;
  box-shadow: 10px 10px 10px rgb(51, 55, 53);
  transform: scale(1.05, 1.05);
  transition: transform 250ms cubic-bezier(0.3, 0, 0.2, 1);
  cursor: pointer;
  :hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
