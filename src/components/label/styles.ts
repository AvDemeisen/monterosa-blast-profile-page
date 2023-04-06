import styled from 'styled-components';
interface TextProps {
  color: string;
}

const colorMap = {
  white: 'var(--white)',
  grey: 'var(--grey)',
  black: 'var(--black)',
  green: 'var(--complete)',
  red: 'var(--incomplete)',
} as any;

export const Text = styled.span<TextProps>`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: ${({ color }) => colorMap[color]};
`;
