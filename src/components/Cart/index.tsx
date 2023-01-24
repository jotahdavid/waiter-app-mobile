import { FlatList } from 'react-native';

import { API_URL } from '@env';
import { CartItem } from '../../@types/CartItem';
import { Product } from '../../@types/Product';
import R$ from '../../utils/formatCurrency';

import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';

import { Text } from '../Text';
import { Button } from '../Button';
import {
  Item,
  ProductContainer,
  Image,
  Actions,
  QuantityContainer,
  ProductDetails,
  Action,
  Summary,
  TotalContainer,
} from './styles';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { useState } from 'react';

interface CartProps {
  items: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
}

export function Cart({ items, onAdd, onDecrement, onConfirmOrder }: CartProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const totalPrice = items.reduce((acc, cartItem) => (
    acc + cartItem.quantity * cartItem.product.price
  ), 0);

  function handleFinishOrder() {
    setIsModalVisible(true);
  }

  function handleConfirmOrder() {
    onConfirmOrder();
    setIsModalVisible(false);
  }

  return (
    <>
      <OrderConfirmedModal
        visible={isModalVisible}
        onConfirm={handleConfirmOrder}
      />

      {items.length > 0 && (
        <FlatList
          data={items}
          keyExtractor={(cartItem) => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 140 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `${API_URL}/uploads/${cartItem.product.imagePath}`
                  }}
                />
                <QuantityContainer>
                  <Text size={14} color="#666">
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>
                <ProductDetails>
                  <Text size={14} weight="600">
                    {cartItem.product.name}
                  </Text>
                  <Text size={14} color="#666" style={{ marginTop: 4 }}>
                    {R$(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </ProductContainer>

              <Actions>
                <Action
                  style={{ marginRight: 16 }}
                  onPress={() => onAdd(cartItem.product)}
                >
                  <PlusCircle />
                </Action>

                <Action onPress={() => onDecrement(cartItem.product)}>
                  <MinusCircle />
                </Action>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {items.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">{R$(totalPrice)}</Text>
            </>
          ) : (
            <Text color="#999" style={{ marginRight: 32 }}>
              Seu carrinho está vazio
            </Text>
          )}
        </TotalContainer>
        <Button
          onPress={handleFinishOrder}
          disabled={items.length <= 0}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
