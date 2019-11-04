import React from 'react';
import { Form, Icon, Input, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import logo from '../../img/logo.png';
import '../../css/Login.css';

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Login extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.email, values.password)
        localStorage.setItem("email", values.email)
        if (localStorage.getItem("token")) {
          this.props.history.push('/home')
        } else {
        }
      }
    });
  }

  render() {
    if (localStorage.getItem("token")) {
      this.props.history.push('/home')
    } else {
    }
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>El usuario o la contraseña son incorrectos</p>
        );
    }
    const { getFieldDecorator } = this.props.form;
    return (
        <div>
        <div className="Login">
          <header className="Login-header">
            <img src={logo} className="Login-logo" alt="logo" />
            <label> Galatea </label>
          </header>
          <div className="Login-body">
            {errorMessage}
            {
                this.props.loading ?
                <div>
                  <Spin indicator={antIcon}/>
                </div>
                :
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Porfavor, inserta tu correo!' }],
                    })(
                        <Input prefix={<Icon type="user"  style={{ color: 'rgba(0,0,0,.25)', fontSize: 15 }} />} placeholder="Correo electronico" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Porfavor, inserta tu contraseña!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña" />
                    )}
                    </FormItem>
                    <FormItem>
                      <Button type="primary" className="Login-boton btn btn-outline-info" htmlType="submit" style={{marginRight: '10px'}}>
                          Iniciar sesión
                      </Button>
                    </FormItem>
                </Form>
            }
            </div>
          </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
