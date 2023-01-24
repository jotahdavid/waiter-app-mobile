import { Text } from '../Text';

import * as Styled from './styles';

export function Header() {
  return (
    <Styled.Container>
      <Text size={14} opacity={0.9}>Bem-vindo(a) ao</Text>
      <Text
        size={24}
        weight="700"
        transform="uppercase"
        style={{ marginTop: 4 }}
      >
        Waiter
        <Text size={24}>APP</Text>
      </Text>
    </Styled.Container>
  );
}
