import * as React from "react";

interface CounterProps {
  title: string;
}
interface CounterState {
  count: number;
}
class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0
    };
  }
  public static defaultProps = {
    title: "Counter"
  };
  private increaseBy = (by: number) => () => {
    this.setState(({ count }) => ({ count: count + by }));
  };
  private decreaseBy = (by: number) => () => {
    this.setState(({ count }) => ({ count: count - by }));
  };
  public render() {
    const { title } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <span>{count}</span>
        <button type="button" onClick={this.increaseBy(2)}>++</button>
        <button type="button" onClick={this.increaseBy(1)}>+</button>
        <button type="button" onClick={this.decreaseBy(1)}>-</button>
        <button type="button" onClick={this.decreaseBy(2)}>--</button>
      </div>
    );
  }
}

export default Counter;
