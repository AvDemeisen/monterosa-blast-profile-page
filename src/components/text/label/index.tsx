import { Text } from './styles';

interface LabelProps {
  text: string;
  color?: string;
  opacity?: string;
  align?: string;
}
const Label = ({ text, color = 'black', opacity = '1', align = 'center' }: LabelProps) => (
  <Text color={color} opacity={opacity} align={align}>
    {text}
  </Text>
);

export default Label;
