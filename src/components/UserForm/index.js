import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  // {...email} allows not use value={email.value} and onChange={email.onChange}
  return (
    <form onSubmit={onSubmit}>
      <input placeholder='User' {...email} />
      <input placeholder='Password' type='password' {...password} />
      <button>Loggin</button>
    </form>
  )
}
