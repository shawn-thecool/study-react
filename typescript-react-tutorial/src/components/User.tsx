import * as React from 'react'
import IUser from '../interfaces/user/IUser'

interface IState {}

class User extends React.Component<IUser, IState> {
  constructor(props: IUser) {
    super(props)
  }
  public static defaultProps = {
    id: '0000-1111',
    name: 'tester',
    age: -1
  }
  public render() {
    const { name, age } = this.props
    return (
      <div>
        <h3>유저정보</h3>
        <dl>
          <dt>이름</dt>
          <dd>{name}</dd>
          <dt>나이</dt>
          <dd>{age}</dd>
          <dt>톡아이디</dt>
          <dd></dd>
        </dl>
      </div>
    )
  }
}

export default User
