import React from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';

export const RootStack = StackNavigator({
    Login: { screen: LoginForm },
    Employee: { screen: EmployeeList }
  });
