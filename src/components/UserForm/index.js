import React, { useState } from 'react'

export const UserForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='User'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder='Password'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button>Loggin</button>
    </form>
  )
}
