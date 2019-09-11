import React, { PureComponent } from 'react';
import LoginActions from './Login.actions';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { match } = this.props;
    let id;
    if (match.params.id) {
      id = match.params.id;
    }
    return <div>This is the login component {id && `with id ${id}`}</div>;
  }
}

export default Login;
