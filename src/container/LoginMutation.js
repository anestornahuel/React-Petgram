import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

// Register GraphQL Mutation returns a JSON Web Token
const LOGIN = gql`
  mutation login ($input: UserCredentials!) {
    login (input: $input)
  }
`

// Receives the children to allow use it anywhere in the program
export const LoginMutation = ({ children }) => {
  return (
    <Mutation mutation={LOGIN}>
      {children}
    </Mutation>
  )
}
