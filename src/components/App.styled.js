import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  background: #23e8de;
  margin-right: auto;
  width: 620px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid ${p => p.theme.colors.accent};
  -webkit-box-shadow: 1px -3px 39px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px -3px 39px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px -3px 39px 0px rgba(0, 0, 0, 0.75);
`;

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
  cursor: pointer;
`;

export const BlockNumber = styled.div`
  display: block;
  text-align: center;
`;
