import styled from 'styled-components';

export const Wrapper = styled.header`
  position: relative;
  padding: 32px;
  background-position: center;
  background-size: cover;
  background-color: var(--header-background);
  width: 100%;
  margin: 0 auto;
`;

export const Inner = styled.div`
  background-color: var(--header-inner-background);
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;

export const UserDetails = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;
export const EditButton = styled.button`
  position: absolute;
  height: 32px;
  width: 32px;
  top: 16px;
  right: 16px;
  border-radius: 48px;
  border: none;
  background: #e83e7e;
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
`;
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
`;
