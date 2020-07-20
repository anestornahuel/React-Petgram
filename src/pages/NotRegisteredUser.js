import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
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
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }
            const errorMsg = error && error.message
            return <UserForm error={errorMsg} loading={loading} onSubmit={onSubmit} title='Sign in' />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            // Receive user credentials and pass them to the mutation
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              // Returns a promise since it is a mutation.
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }
            const errorMsg = error && error.message
            return <UserForm error={errorMsg} loading={loading} onSubmit={onSubmit} title='Log in' />
          }
        }
      </LoginMutation>
    </>
  )
}
