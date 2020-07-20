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
                (register, { data, loading, error }) => {
                  // Receive user credentials and pass them to the mutation
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    // Returns a promise since it is a mutation.
                    register({ variables }).then(activateAuth)
                  }
                  const errorMsg = error && error.message
                  return <UserForm error={errorMsg} loading={loading} onSubmit={onSubmit} title='Sign in' />
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
