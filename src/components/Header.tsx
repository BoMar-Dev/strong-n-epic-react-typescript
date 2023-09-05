import React from 'react'
import { User } from '../types/UserType'

type HeaderProps = {
  user: User,
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <div>
        Header
        <button> Inloggad som : {props.user.role} {props.user.username}</button>
        <button> Logga ut </button>
    </div>
  )
}

export {Header};