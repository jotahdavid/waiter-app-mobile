import { useState } from 'react';
import { FlatList } from 'react-native';

import { Category } from '../../@types/Category';

import { Text } from '../Text';
import { CategoryContainer, Icon } from './styles';

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string | null) => Promise<boolean> | boolean;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  async function handleSelectCategory(categoryId: string) {
    const category = categoryId !== selectedCategory ? categoryId : null;

    const lastSelectedCategory = selectedCategory;
    setSelectedCategory(category);

    const result = await onSelectCategory(category);
    if (!result) {
      setSelectedCategory(lastSelectedCategory);
    }
  }

  return (
    <FlatList
      horizontal
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = category._id === selectedCategory;

        return (
          <CategoryContainer onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>
                {category.icon}
              </Text>
            </Icon>

            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </CategoryContainer>
        );}}
    />
  );
}
