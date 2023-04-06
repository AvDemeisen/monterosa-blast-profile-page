import { colorMap } from '@/styles/variables';
import styled from 'styled-components';

interface TextProps {
  color: string;
  opacity?: string;
}

export const Text = styled.span<TextProps>`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: ${({ color }) => colorMap[color]};
  opacity: ${({ opacity }) => opacity};
`;
