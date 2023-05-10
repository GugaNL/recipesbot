import React from 'react';
import { Container, Icon, Input } from './styles';
import { theme } from '../../styles/theme';
import { GestureResponderEvent, Pressable } from 'react-native';

type SearchInputProps = {
  pressable?: boolean;
  onPress: (event: GestureResponderEvent) => void;
};

const SearchInput = ({ pressable, onPress }: SearchInputProps) => {
  const renderInput = () => (
    <Container>
      <Icon name="search" />
      <Input
        editable={!pressable}
        placeholder="Digite alguma receita"
        placeholderTextColor={theme.colors.lightGray}
      />
    </Container>
  );

  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
  }

  return renderInput();
};

export default SearchInput;
