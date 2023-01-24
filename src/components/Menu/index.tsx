import { FlatList } from 'react-native';

import { API_URL } from '@env';

import { products } from '../../mocks/products';
import R$ from '../../utils/formatCurrency';

import { Text } from '../Text';
import {
  Product,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton,
} from './styles';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(product) => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
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
        </Product>
      )}
    />
  );
}
