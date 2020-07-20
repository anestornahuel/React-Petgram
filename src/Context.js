import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    // The sessionStorage is called in a function since it is synchronous
    // This avoids freezing the app rendering
    return window.sessionStorage.getItem('token')
  })

  // Will be passed to Provider as prop
  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    }
  }

  // Children is a component where the context will be available
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

// Provider: Component that must wrap the application
// Consumer: Allows access to render props declared in the Provider
export default { Provider, Consumer: Context.Consumer }
