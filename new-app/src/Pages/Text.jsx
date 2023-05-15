import React from 'react'
import { useSelector } from 'react-redux'
import { useParams} from 'react-router-dom';

function Text() {
    const items = useSelector((state) => state.Books.items);
    const {id} = useParams()
  return (
    <div>{items[id].description}</div>
  )
}

export default Text