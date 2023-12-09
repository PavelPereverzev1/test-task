/* eslint-disable react/prop-types */
import {
  Container,
  ImgThumb,
  Info,
  LearnMoreBtn,
  Line,
  Model,
  Price,
  Favorite,
  Title,
} from './NoticeItem.styled';
import { FavoriteIcon } from './FavoriteIcon';
import { useState } from 'react';

const NoticeItem = ({ item, openModal }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container>
      <ImgThumb>
        <img src={item.img} alt={`${item.make} ${item.model}`} />

        <Favorite onClick={toggleFavorite}>
          <FavoriteIcon isFavorite={isFavorite}></FavoriteIcon>
        </Favorite>
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
      <LearnMoreBtn
        type="button"
        onClick={() => {
          openModal(item);
        }}
      >
        Learn more
      </LearnMoreBtn>
    </Container>
  );
};

export default NoticeItem;
