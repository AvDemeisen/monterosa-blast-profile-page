import { colorMap } from '../../../styles/variables';
import styled from 'styled-components';

interface TextProps {
  color: string;
}

export const Text = styled.span<TextProps>`
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  color: ${({ color }) => colorMap[color]};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
