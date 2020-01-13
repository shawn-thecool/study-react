import * as React from 'react'

export interface UserProps {
  id: string
  name: string
  age: number
}
interface UserState {}

class User extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props)
  }
  public static defaultProps = {
    id: -1,
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
        </dl>
      </div>
    )
  }
}

export default User
