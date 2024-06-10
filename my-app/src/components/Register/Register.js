import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/actions.js';
import { setINN, setPassword } from '../../redux/store.js';

const Register = () => {
  const [inn, setInnState] = useState('');
  const [password, setPasswordState] = useState('');
  const [innError, setInnError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();

  const handleInnChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 14) {
      setInnState(value);
      setInnError('');
    } else {
      setInnError('ИНН должен состоять ровно из 14 цифр.');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (/^[^\u0400-\u04FF]{0,6}$/.test(value)) {
      setPasswordState(value);
      setPasswordError('');
    } else {
      setPasswordError('Пароль не должен содержать русские буквы и быть длиной до 6 символов.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inn.length === 14 && password.length > 0 && password.length <= 6) {
      dispatch(setINN(inn));
      dispatch(setPassword(password));
      alert('Регистрация прошла успешно!');
    } else {
      if (inn.length !== 14) {
        setInnError('ИНН должен состоять ровно из 14 цифр.');
      }
      if (password.length === 0 || password.length > 6) {
        setPasswordError('Пароль должен быть длиной до 6 символов и не содержать русские буквы.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inn">ИНН:</label>
        <input
          type="text"
          id="inn"
          value={inn}
          onChange={handleInnChange}
          maxLength="14"
        />
        {innError && <span style={{ color: 'red' }}>{innError}</span>}
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          maxLength="6"
        />
        {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;

