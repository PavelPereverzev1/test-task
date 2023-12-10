import { InputWrapper, Form, Submit } from './Filter.styled';
import { useState } from 'react';
import makes from '../../assets/makes.json';
import prices from '../../assets/prices.json';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const initialFormState = {
    brand: '',
    price: '',
    from: '',
    to: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleOnChange = e => {
    switch (e.target.name) {
      case 'brand':
        setFormData({ ...formData, brand: e.target.value });
        return;
      case 'price':
        setFormData({ ...formData, price: e.target.value });
        return;
      case 'from':
        setFormData({ ...formData, from: e.target.value });
        return;
      case 'to':
        setFormData({ ...formData, to: e.target.value });
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setFilter(formData));
    setFormData(initialFormState);
  };

  return (
    <Form>
      <InputWrapper>
        Car brand
        <select
          className="brand"
          name="brand"
          value={formData.brand}
          onChange={handleOnChange}
        >
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
        <select
          className="price"
          name="price"
          value={formData.price}
          onChange={handleOnChange}
        >
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
          value={formData.from}
          min={0}
          placeholder="From"
          onChange={handleOnChange}
        />
      </InputWrapper>
      <InputWrapper>
        Car milage / km
        <input
          type="number"
          className="to"
          name="to"
          value={formData.to}
          min={0}
          placeholder="To"
          onChange={handleOnChange}
        />
      </InputWrapper>
      <Submit type="submit" onClick={handleSubmit}>
        Search
      </Submit>
    </Form>
  );
};

export default Filter;
