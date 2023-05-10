import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title } from './styles';
import { ScreenNavigationProp } from '../../interfaces';
import SearchInput from '../../components/SearchInput';

const Home = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

  return (
    <Container>
      <SearchInput pressable onPress={() => navigate('Search')} />
      {/* <Title onPress={() => navigate('Search')}>Go to search screen</Title> */}
    </Container>
  );
};

export default Home;
