import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, loading, onClick }) => {
  return (
    <Button loading={loading} onClick={onClick}>
      {loading ? 'Loading...' : children}
    </Button>
  )
}
