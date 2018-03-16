import React from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';

export const RootStack = StackNavigator({
    Login: { screen: LoginForm },
    Employee: { screen: EmployeeList },
    Create: { screen: EmployeeCreate }
  });
