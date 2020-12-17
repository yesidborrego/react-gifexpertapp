import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Marvel']);

  /*
  const handleAddCategory = () => {
    // setCategories([...categories, 'HunterXHunter']); // Opción 1
    setCategories( allCategories => [...allCategories, 'HunterXHunter'] ); // Opción 2 usando callback
  }
*/

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>

      <hr />

      <ol>
        {
          categories.map( category => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </Fragment>
  );
}

export default GifExpertApp;