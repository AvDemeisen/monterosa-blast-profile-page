import styled from 'styled-components';

interface isActive {
  isActive: boolean;
}

export const Wrapper = styled.img<isActive>`
  width: 96px;
  height: 96px;
  background: var(--header-text);
  border-radius: 96px;
  margin: 0 auto;
  opacity: ${({ isActive }) => (isActive ? '1' : '.54')};
`;
