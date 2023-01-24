import { ReactNode } from 'react';
import { Text } from '../Text';

import { Container } from './styles';

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  onPress: () => void;
}

export function Button({ children, disabled, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">{children}</Text>
    </Container>
  );
}
