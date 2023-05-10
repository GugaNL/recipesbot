import React from 'react';
import {
  BottomTitle,
  Container,
  Logo,
  MainTitle,
  SplashBackground,
  Title,
} from './styles';
import Button from '../../components/Button';
import logo from '../../assets/imgs/logo.png';
import splashBackgroundImg from '../../assets/imgs/splash.png';

const Splash = () => {
  return (
    <SplashBackground source={splashBackgroundImg}>
      <Container>
        <Logo source={logo} />
        <Title>Encontre e monte receitas deliciosas</Title>
      </Container>
      <Container>
        <MainTitle>Comece agora</MainTitle>
      </Container>
      <Container>
        <BottomTitle>Seja seu próprio chef</BottomTitle>
        <Button onPress={() => {}}>Comece a cozinhar</Button>
      </Container>
    </SplashBackground>
  );
};

export default Splash;
