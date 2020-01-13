import * as React from 'react'
import IUser from '../interfaces/user/IUser'
import User from './User'


interface IProps {
  users: IUser[]
}
interface IState {
  currentPageIdx:number,
}

class Users extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
          {users.map((user: IUser) => (
            <li key={`user-info-${user.id}`}>
              <User id={user.id} name={user.name} age={user.age} ></User>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Users
