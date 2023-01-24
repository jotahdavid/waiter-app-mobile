import { Modal } from 'react-native';

import { CheckCircle } from '../Icons/CheckCircle';

import { Text } from '../Text';
import { Container, Button } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onConfirm: () => void;
}

export function OrderConfirmedModal({ visible, onConfirm  }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <Container>
        <CheckCircle />

        <Text size={20} weight="600" color="#fff" style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>

        <Text color="#fff" style={{ opacity: 0.9, marginTop: 4 }}>
          O pedido já entrou na fila de produção!
        </Text>

        <Button onPress={onConfirm}>
          <Text weight="600" color="#d73035">Ok</Text>
        </Button>
      </Container>
    </Modal>
  );
}
