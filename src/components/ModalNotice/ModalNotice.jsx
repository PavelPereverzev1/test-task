/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import {
  Overlay,
  ModalCloseBtn,
  Container,
  ImgThumb,
  Title,
  Model,
  Info,
  Line,
  Description,
  ConditionLine,
  Condition,
  RentalBtn,
} from './ModalNotice.styled';
import { MdClose } from 'react-icons/md';

const Modal = ({ item, closeModal }) => {
  const conditions = item.rentalConditions.split('\n');
  useEffect(() => {
    const handleClose = e => {
      e.key === 'Escape' && closeModal();
    };
    document.addEventListener('keydown', handleClose);
    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, [closeModal]);

  const handleClickClose = e => e.target === e.currentTarget && closeModal();

  return (
    <Overlay className="overlay" onClick={handleClickClose}>
      <Container>
        <ModalCloseBtn onClick={() => closeModal()}>
          <MdClose />
        </ModalCloseBtn>
        <ImgThumb>
          <img src={item.img} alt={`${item.make} ${item.model}`} />
        </ImgThumb>
        <Title>
          <span>{item.make} </span>
          <Model>{item.model}, </Model>
          <span>{item.year} </span>
        </Title>
        <Info>
          <Line>
            <span>{item.address[0]}</span>
            <span>{item.address[1]}</span>
            <span>Id: {item.id}</span>
            <span>Year: {item.year}</span>
            <span>Type: {item.type}</span>
          </Line>
          <Line>
            <span>Fuel Consumption: {item.fuelConsumption}</span>
            <span>Engine Size: {item.engineSize}</span>
          </Line>
        </Info>
        <Description>{item.description}</Description>
        <h3>Accessories and functionalities:</h3>
        <Info>
          <Line>
            <span>{item.accessories[0]}</span>
            <span>{item.accessories[1]}</span>
            <span>{item.accessories[2]}</span>
          </Line>
          <Line>
            <span>{item.functionalities[0]}</span>
            <span>{item.functionalities[1]}</span>
            <span>{item.functionalities[2]}</span>
          </Line>
        </Info>
        <h3 className="rental">Rental Conditions:</h3>
        <ConditionLine>
          <Condition>{conditions[0]}</Condition>
          <Condition>{conditions[1]}</Condition>
        </ConditionLine>
        <ConditionLine>
          <Condition>{conditions[2]}</Condition>
          <Condition>
            Mileage:
            <span>{item.mileage.toLocaleString('en-US')}</span>
          </Condition>
          <Condition>
            Price: <span>{item.rentalPrice}</span>
          </Condition>
        </ConditionLine>
        <a href="tel:+380730000000">
          <RentalBtn>Rental car</RentalBtn>
        </a>
      </Container>
    </Overlay>
  );
};

export default Modal;
