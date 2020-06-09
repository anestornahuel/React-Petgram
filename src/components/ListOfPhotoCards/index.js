import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { withPhotos } from '../../hoc/withPhotos'

// props.data.photos
const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} id={photo.id} {...photo} />)}
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
