import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, loading }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    // Avoid default behavior, a post
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  // {...email} allows not use value={email.value} and onChange={email.onChange}
  return (
    <>
      <Form disabled={loading} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={loading} placeholder='User' {...email} />
        <Input disabled={loading} placeholder='Password' type='password' {...password} />
        <Button disabled={loading}>{loading ? 'Loading...' : title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
