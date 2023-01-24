import { FlatList } from 'react-native';
import { useState } from 'react';

import { API_URL } from '@env';
import { Product } from '../../@types/Product';

import { products } from '../../mocks/products';
import R$ from '../../utils/formatCurrency';

import { Text } from '../Text';
import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton,
} from './styles';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';

export function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  function handleOpenModal(product: Product) {
    setSelectedProduct(product);
    setIsModalVisible(true);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        product={selectedProduct}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 16 }}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `${API_URL}/uploads/${product.imagePath}`
              }}
            />

            <ProductDetails>
              <Text weight="600">
                {product.name}
              </Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {R$(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
