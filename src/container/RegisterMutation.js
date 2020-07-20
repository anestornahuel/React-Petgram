import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

// Register GraphQL Mutation returns a JSON Web Token
const REGISTER = gql`
  mutation signup ($input: UserCredentials!) {
    signup (input: $input)
  }
`

// Receives the children to allow use it anywhere in the program
export const RegisterMutation = ({ children }) => {
  return (
    <Mutation mutation={REGISTER}>
      {children}
    </Mutation>
  )
}
