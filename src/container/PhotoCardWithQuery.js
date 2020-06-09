import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const singlePhoto = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
const rederProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={singlePhoto} variables={{ id }}>
    {
      rederProp
    }
  </Query>
)
