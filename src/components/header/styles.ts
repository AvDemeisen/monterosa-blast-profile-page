import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 32px 0px 0px;
  background: var(--header-background);
  width: 100%;
  margin: 0 auto;
`
export const UserDetails = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 100%;
`
export const EditButton = styled.button`
  position: absolute;
  height: 32px;
  width: 32px;
  top: 16px;
  right: 16px;
  border-radius: 48px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  transition: background-color 300ms ease-in-out;

  img {
    height: 14px;
    width: 14px;
  }

  &:hover {
    background: red;
  }
`;

export const Avatar = styled.img`
width: 96px;
height: 96px;
background: var(--header-text);
border-radius: 96px;
margin: 0 auto;
`;

interface InputProps {
  edit: boolean; 
}

export const Name = styled.input<InputProps>`
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 32px;
text-align: center;
color: var(--header-text);
border: none;
background-color: transparent;
cursor: default;

${({ edit }) => edit && css`
  outline: none;
  background-color: #f6f6f6;
  color: #000;
  cursor: text;
`}
`
export const Description = styled.input<InputProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: var(--header-text);
  opacity: 0.54;
  text-align: center;
  border: none;
  background-color: transparent;
  cursor: text;

  ${({ edit }) => edit && css`
  outline: none;
  background-color: #f6f6f6;
  color: #000;
  cursor: text;
`}
`


export const VerticalList = styled.ul`
  display: grid;
grid-template-columns: repeat(3, 1fr);
text-decoration: none;
list-style: none;
width: 100%;
padding: 0;
margin: 0;
`

export const ListItem = styled.li`
padding: 16px 0;
`
export const ItemLabel = styled.span`
font-weight: 400;
font-size: 18px;
line-height: 24px;
text-align: center;
color: var(--header-text);
opacity: 0.54;
`;

export const ItemData = styled.h4`
font-weight: 800;
font-size: 28px;
line-height: 32px;
text-align: center;
color: var(--header-text);
margin: 0;
`