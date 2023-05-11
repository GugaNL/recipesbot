import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Content,
  Title,
  DurationText,
  ImageRecipe,
  ContentFooter,
  DurationIcon,
  ContentSmall,
} from './styles';
import { styles } from './styles';
import Rating from '../Rating';

import barbecure from '../../assets/imgs/greekbarbecue.png';

type RecipeCardProps = {
  title: string;
  image: any;
  rating: any;
  duration: string;
  style: any;
};

const RecipeCard = ({
  title,
  image,
  rating,
  duration,
  style,
}: RecipeCardProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Content>
        <ContentSmall>
          <Title numberOfLines={1}>{title}</Title>
        </ContentSmall>

        <ImageRecipe source={barbecure} />
      </Content>

      <ContentFooter>
        <Rating rating={rating} />

        {duration && (
          <Content>
            <DurationIcon name="timer" />
            <DurationText>{duration}</DurationText>
          </Content>
        )}
      </ContentFooter>
    </TouchableOpacity>
  );
};

export default RecipeCard;
