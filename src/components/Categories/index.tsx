import React from 'react';
import { ItemButton, List, TextButton } from './styles';
//import { ListRenderItem } from 'react-native';

type CategoriesProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryPress: (category: any) => void;
};

const Categories = ({
  categories,
  selectedCategory,
  onCategoryPress,
}: CategoriesProps) => {
  return (
    <List
      horizontal
      data={categories}
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        const selected = selectedCategory === item;
        return (
          <ItemButton
            onPress={() => onCategoryPress(item)}
            selected={selected}
            index={index}
          >
            <TextButton selected={selected}>{item}</TextButton>
          </ItemButton>
        );
      }}
    />
  );
};

export default Categories;
