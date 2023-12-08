const item = {
  id: 9582,
  year: 2008,
  make: 'Buick',
  model: 'Enclave',
  type: 'Suv',
  img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg',
  description:
    'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
  fuelConsumption: '10.5',
  engineSize: '3.6L V6',
  accessories: ['Premium audio system', 'Panoramic sunroof', 'Leather seats'],
  functionalities: ['Power liftgate', 'Remote start', 'Blind-spot monitoring'],
  rentalPrice: '$40',
  rentalCompany: 'Luxury Car Rentals',
  address: ['Kiev', 'Ukraine', '123 Example Street'],
  rentalConditions:
    "Minimum age: 25\nValid driver's license\nSecurity deposit required",
  mileage: 5858,
};

import {
  Container,
  ImgThumb,
  Info,
  LearnMoreBtn,
  Line,
  Model,
  Price,
  Title,
} from './NoticeItem.styled';
import Img from '../../assets/images/image 1.png';
const NoticeItem = () => {
  return (
    <Container>
      <ImgThumb>
        <img src={Img} alt={`${item.make} ${item.model}`} />
      </ImgThumb>
      <Title>
        <span>{item.make} </span>
        <Model>{item.model}, </Model>
        <span>{item.year} </span>
        <Price>{item.rentalPrice}</Price>
      </Title>
      <Info>
        <Line>
          <span>{item.address[0]}</span>
          <span>{item.address[1]}</span>
          <span>{item.rentalCompany}</span>
        </Line>
        <Line>
          <span>{item.type}</span>
          <span>{item.model}</span>
          <span>{item.id}</span>
          <span>{item.accessories[0]}</span>
        </Line>
      </Info>
      <LearnMoreBtn type="button" onClick={() => {}}>
        Learn more
      </LearnMoreBtn>
    </Container>
  );
};

export default NoticeItem;
