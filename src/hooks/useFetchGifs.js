import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    images: [],
    loading: true
  })

  useEffect(() => {
    getGifs(category)
     .then(imgs => {
        setState({
          images: imgs,
          loading: false
        })
     })
     .catch(console.error);
  }, [category]);


  return state;
}