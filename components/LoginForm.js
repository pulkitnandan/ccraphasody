import React from 'react';
import Router from 'next/router'
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import TextFieldGroup from './TextFieldGroup';

import validateInput from '../validations/login';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'ali',
      password: 'password',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });

      this.props.login(this.state).then((res) => {
        Router.push('/')
      }, (err) => {
        console.log(err)
        this.setState({
          errors: {
            form: true,
            data: err.error
          },
          isLoading: false,
          password: ''
        })
      });

    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    const { errors, username, password, isLoading } = this.state;

    return (
      <div className="flex-container flex-wrap courses visible">
        <form onSubmit={this.onSubmit}>

          {errors.form && <div>{errors.data || 'Some server/client error occured'}</div>}

          <div className="course">
            <input placeholder="username" type="text" value={username} onChange={this.onChange} />
          </div>

          <div className="course">
            <input className="password" placeholder="password" type="password" value={password} onChange={this.onChange} />
          </div>

              <div>
                <button disabled={isLoading}>Login</button>
              </div>
        </form>
      </div>

          );
  }
}

LoginForm.propTypes = {
          }

          export default connect(null, {login})(LoginForm);
