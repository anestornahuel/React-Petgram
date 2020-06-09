import React from 'react'
import { PhotoCard } from '../PhotoCard'

// props.data.photos
export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} id={photo.id} {...photo} />)}
    </ul>
  )
}
