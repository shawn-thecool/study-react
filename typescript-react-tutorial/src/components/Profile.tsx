import * as React from "react";

interface ProfileProps {
  name: string;
  job: string;
}

interface ProfileState {
  count: number;
}

let timer:any

class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  public static defaultProps = {
    name:'',
    job:''
  };

  public componentDidMount() {
    timer = setInterval(this.increase, 1000)
  }

  public componentWillUnmount() {
    clearInterval(timer)
  }

  private increase = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  private decease = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  public render() {
    const { name, job } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>프로필</h2>
        <dl>
          <dt>이름</dt>
          <dd>{name}</dd>
          <dt>직업</dt>
          <dd>{job}</dd>
          <dt>카운트</dt>
          <dd>{count}</dd>
        </dl>
      </div>
    );
  }
}

export default Profile;
