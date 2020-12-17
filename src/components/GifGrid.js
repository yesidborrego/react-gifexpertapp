// import React, { Fragment, useEffect, useState } from 'react'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {
  const {images, loading} = useFetchGifs(category);

  return (
    <Fragment>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      <div className="card-grid">
        {
          (loading) && <p className="animate__animated animate__flash loading"><strong>Cargando...</strong></p>
        }
          {
            images.map( (image) => (
              <GifGridItem
                key={image.id}
                {...image}
              />
            ))
          }
      </div>
    </Fragment>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}