import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
  padding: 32px;
  background: var(--header-background);
  width: 100%;
  margin: 0 auto;
`

export const Inner = styled.div`
background-color: var(--header-inner-background);
padding: 16px;

display: flex;
flex-direction: column;
gap: 8px;
box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);
border-radius: 16px;

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
  background: #E83E7E;
  transition: background-color 300ms ease-in-out;
  z-index: 2;

  img {
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

export const Name = styled.span`
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 32px;
text-align: center;
color: var(--header-text);
border: none;
background-color: transparent;
cursor: default;
`
export const Description = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: var(--header-text);
  opacity: 0.54;
  text-align: center;
  border: none;
  background-color: transparent;
  cursor: default;
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
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
color: var(--header-text);
opacity: 0.54;
`;

export const ItemData = styled.h4`
font-size: 18px;
font-weight: 800;
line-height: 32px;
letter-spacing: 0em;
text-align: center;
color: var(--header-text);
margin: 0;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 72px;
  width: 100%
  border-radius: 8px;
  padding: 32px 8px 8px 8px;
  background: #1F5DFF;
  border-radius: 8px;
`