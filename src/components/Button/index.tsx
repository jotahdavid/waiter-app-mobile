import { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';

import { Container } from './styles';

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  onPress: () => void;
}

export function Button({ children, loading, disabled, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight="600" color="#fff">{children}</Text>
      )}

      {loading && (
        <ActivityIndicator color="#fff" />
      )}
    </Container>
  );
}
