import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => (
  <Layout title='The pet photo app' subtitle='In petgram you can share and search pet photos'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)
