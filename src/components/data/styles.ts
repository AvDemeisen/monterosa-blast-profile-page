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
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  color: ${({ color }) => colorMap[color]};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
