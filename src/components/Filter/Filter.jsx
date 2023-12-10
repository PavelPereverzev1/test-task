import { InputWrapper, Form, Submit } from './Filter.styled';
import makes from '../../assets/makes.json';
import prices from '../../assets/prices.json';

const Filter = () => {
  return (
    <Form>
      <InputWrapper>
        Car brand
        <select className="brand" name="brand">
          <option value="">Enter the text</option>
          {makes.map((make, index) => {
            return (
              <option key={index} value={make}>
                {make}
              </option>
            );
          })}
        </select>
      </InputWrapper>
      <InputWrapper>
        Price/1hour
        <select className="price" name="price">
          <option value="">To $</option>
          {prices.map((price, index) => {
            return (
              <option key={index} value={price}>
                {price}
              </option>
            );
          })}
        </select>
      </InputWrapper>
      <InputWrapper>
        Car milage / km
        <input
          type="number"
          className="from"
          name="from"
          min={0}
          placeholder="From"
        />
      </InputWrapper>
      <InputWrapper>
        Car milage / km
        <input
          type="number"
          className="to"
          name="to"
          min={0}
          placeholder="To"
        />
      </InputWrapper>
      <Submit type="submit" onClick={() => {}}>
        Search
      </Submit>
    </Form>
  );
};

export default Filter;
