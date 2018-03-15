import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  static navigationOptions = {
    title: 'Please Login',
  };

  onChangeText(text) {
    this.props.emailChanged(text);
  };

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  };

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  };

  renderButton() {
    const { navigate } = this.props.navigation;
    if(this.props.loading) {
      return <Spinner size='large' />
    };
    return (
      <Button 
            // onPress={this.onButtonPress.bind(this)}
            onPress={() => navigate('Employee')}
          >
            Login
          </Button>
    );
  };

  render() {
    
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onChangeText.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  };
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  }
};

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
