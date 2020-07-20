import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  // Consumer receives a render prop
  // A function should be render
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register) => {
                  // Receive user credentials and pass them to the mutation
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    // Returns a promise since it is a mutation.
                    register({ variables }).then(activateAuth)
                  }
                  return <UserForm onSubmit={onSubmit} title='Sign in' />
                }
              }
            </RegisterMutation>

            <UserForm onSubmit={activateAuth} title='Log in' />
          </>
        )
      }
    }
  </Context.Consumer>
)
