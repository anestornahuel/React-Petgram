import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  // Consumer receives a render prop
  // A function should be render
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return <UserForm onSubmit={activateAuth} />
      }
    }
  </Context.Consumer>
)
