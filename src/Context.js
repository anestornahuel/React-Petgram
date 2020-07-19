import React, { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  // Will be passed to Provider as prop
  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
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
