import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
   }

   const handleSubmitForm = (e) => {
     e.preventDefault();
     if(inputValue.trim().length > 0) {
      setCategories(categories => [inputValue, ...categories]);
      setInputValue('');
     }
   }

  return (
    <form onSubmit={ handleSubmitForm }>
      <label>Escribe el nombre del Gif que desea buscar: </label>
      <input
        type="text"
        placeholder=""
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}