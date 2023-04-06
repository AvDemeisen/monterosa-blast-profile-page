import styled from 'styled-components';
interface TextProps {
  color: string;
}
export const Text = styled.span<TextProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ color }) => color};
  opacity: 0.54;
`;
