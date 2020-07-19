import React from 'react'
import Context from '../Context'

export const NotRegisteredUser = () => (
  // Consumer receives a render prop
  // A function should be render
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Loggin</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)
