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

// const Register = () => {
//   const [inn, setInn] = useState('');
//   const [password, setPassword] = useState('');
//   const [innError, setInnError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const dispatch = useDispatch();

//   const validateInn = (value) => {
//     if (value.length !== 14) {
//       setInnError('ИНН должен состоять из 14 цифр.');
//     } else {
//       setInnError('');
//     }
//   };

//   const validatePassword = (value) => {
//     const russianChars = /[а-яА-ЯёЁ]/;
//     if (value.length > 6) {
//       setPasswordError('Пароль должен быть не более 6 символов.');
//     } else if (russianChars.test(value)) {
//       setPasswordError('Пароль не должен содержать русские буквы.');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validateInn(inn);
//     validatePassword(password);
//     if (!innError && !passwordError) {
//       dispatch(setUserData(inn, password));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>ИНН:</label>
//         <input
//           type="text"
//           value={inn}
//           onChange={(e) => setInn(e.target.value)}
//           onBlur={() => validateInn(inn)}
//         />
//         {innError && <span>{innError}</span>}
//       </div>
//       <div>
//         <label>Пароль:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           onBlur={() => validatePassword(password)}
//         />
//         {passwordError && <span>{passwordError}</span>}
//       </div>
//       <button type="submit">Регистрация</button>
//     </form>
//   );
// };

// export default Register;




// import React, { useState } from 'react';

// const Register = () => {
//   const [inn, setInn] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleInnChange = (event) => {
//     const { value } = event.target;
//     if (/^\d{0,14}$/.test(value)) {
//       setInn(value);
//       setErrors((prevErrors) => ({ ...prevErrors, inn: null }));
//     }
//   };

//   const handlePasswordChange = (event) => {
//     const { value } = event.target;
//     if (value.length <= 6) {
//       setPassword(value);
//       setErrors((prevErrors) => ({ ...prevErrors, password: null }));
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newErrors = {};
//     if (inn.length !== 14) {
//       newErrors.inn = 'ИНН должен быть длиной 14 символов';
//     }
//     if (password.length !== 6) {
//       newErrors.password = 'Пароль должен быть длиной 6 символов';
//     }
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       localStorage.setItem('userData', JSON.stringify({ inn, password }));
//       console.log('Данные сохранены в локальное хранилище');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="inn">ИНН:</label>
//         <input
//           type="text"
//           id="inn"
//           value={inn}
//           onChange={handleInnChange}
//           required
//         />
//         {errors.inn && <p style={{ color: 'red' }}>{errors.inn}</p>}
//       </div>
//       <div>
//         <label htmlFor="password">Пароль:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//           required
//         />
//         {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//       </div>
//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// };

// export default Register;





// // import React, { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { setINN, setPassword } from '../../store';

// // const Register = () => {
// //   const [inn, setInnState] = useState('');
// //   const [password, setPasswordState] = useState('');
// //   const [innError, setInnError] = useState('');
// //   const [passwordError, setPasswordError] = useState('');
// //   const dispatch = useDispatch();

// //   const handleInnChange = (e) => {
// //     const value = e.target.value;
// //     if (/^\d*$/.test(value) && value.length <= 14) {
// //       setInnState(value);
// //       setInnError('');
// //     } else {
// //       setInnError('ИНН должен состоять ровно из 14 цифр.');
// //     }
// //   };

// //   const handlePasswordChange = (e) => {
// //     const value = e.target.value;
// //     if (/^[^\u0400-\u04FF]{0,6}$/.test(value)) {
// //       setPasswordState(value);
// //       setPasswordError('');
// //     } else {
// //       setPasswordError('Пароль не должен содержать русские буквы и быть длиной до 6 символов.');
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (inn.length === 14 && password.length > 0 && password.length <= 6) {
// //       dispatch(setINN(inn));
// //       dispatch(setPassword(password));
// //       alert('Регистрация прошла успешно!');
// //     } else {
// //       if (inn.length !== 14) {
// //         setInnError('ИНН должен состоять ровно из 14 цифр.');
// //       }
// //       if (password.length === 0 || password.length > 6) {
// //         setPasswordError('Пароль должен быть длиной до 6 символов и не содержать русские буквы.');
// //       }
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label htmlFor="inn">ИНН:</label>
// //         <input
// //           type="text"
// //           id="inn"
// //           value={inn}
// //           onChange={handleInnChange}
// //           maxLength="14"
// //         />
// //         {innError && <span style={{ color: 'red' }}>{innError}</span>}
// //       </div>
// //       <div>
// //         <label htmlFor="password">Пароль:</label>
// //         <input
// //           type="password"
// //           id="password"
// //           value={password}
// //           onChange={handlePasswordChange}
// //           maxLength="6"
// //         />
// //         {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
// //       </div>
// //       <button type="submit">Зарегистрироваться</button>
// //     </form>
// //   );
// // };

// // export default Register;