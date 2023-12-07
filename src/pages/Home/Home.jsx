import { Container, TextBox } from './Home.styled';
import heroImg from '/src/assets/images/main-img.png';

const Home = () => {
  return (
    <Container>
      <TextBox>
        <h1>Save big with our car rental</h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
      </TextBox>
      <img src={heroImg} alt="" />
    </Container>
  );
};

export default Home;
