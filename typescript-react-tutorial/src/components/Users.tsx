import * as React from 'react'
import User, { UserProps } from './User'

interface UsersProps {
  users: UserProps[]
}
interface UsersState {}

class Users extends React.Component<UsersProps, UsersState> {
  constructor(props: UsersProps) {
    super(props)
  }
  public static defaultProps = {
    users: []
  }
  public render() {
    const { users } = this.props
    return (
      <div>
        <h2>유저 리스트</h2>
        <ul>
          {users.map((user: UserProps) => (
            <li key={`user-info-${user.id}`}>
              <User id={user.id} name={user.name} age={user.age}></User>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Users
