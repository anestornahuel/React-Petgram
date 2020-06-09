import React from 'react'
import { Button } from './styles'
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai'

export const LikeButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? AiTwotoneLike : AiOutlineLike
  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
