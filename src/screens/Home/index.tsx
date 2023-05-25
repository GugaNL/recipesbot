import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Title } from './styles';
import { ScreenNavigationProp } from '../../interfaces';
import SearchInput from '../../components/SearchInput';
import Categories from '../../components/Categories';
import RecipeCard from '../../components/RecipeCard';
import Card from '../../components/Card';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../graphql/queries/category';

const Home = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const { loading, error, data: dataCategories } = useQuery(GET_CATEGORIES);
  const { categories = [] } = dataCategories || {};

  return (
    <Container>
      <SearchInput pressable onPress={() => navigate('Search')} />
      <Title>Receitas em destaque</Title>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -20 }}
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={index => (
          <RecipeCard
            title="Churrasco grego"
            image=""
            rating={3}
            duration="20min"
            style=""
            //style={index === 0 ? { marginLeft: 24 } : {}}
          />
        )}
      />

      {categories && categories.length > 0 && (
        <Categories categories={categories} onCategoryPress={() => {}} />
      )}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -20 }}
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={() => (
          <Card
            title="Churrasco grego"
            image=""
            rating={3}
            duration="20min"
            style=""
          />
        )}
      />
    </Container>
  );
};

export default Home;
