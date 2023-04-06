import { Text } from './styles';

interface LabelProps {
  text: string;
  color?: string;
  opacity?: string;
}
const Label = ({ text, color = 'black', opacity = '1' }: LabelProps) => (
  <Text color={color} opacity={opacity}>
    {text}
  </Text>
);

export default Label;
