import * as React from 'react'

interface ProfileProps {
  name: string
  job: string
}
interface ProfileState {}
class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props)
    this.state = {
      count: 0
    }
  }
  public static defaultProps = {
    name: '',
    job: ''
  }
  public render() {
    const { name, job } = this.props
    return (
      <div>
        <h2>프로필</h2>
        <dl>
          <dt>이름</dt>
          <dd>{name}</dd>
          <dt>직업</dt>
          <dd>{job}</dd>
        </dl>
      </div>
    )
  }
}

export default Profile
