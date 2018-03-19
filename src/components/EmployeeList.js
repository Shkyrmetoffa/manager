import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Employee List',
        headerRight: 
          <TouchableOpacity
            onPress={() => navigation.navigate('Create')}
          >
            <Text>Create</Text>
          </TouchableOpacity>
      });
    
    render() {
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View> 
        );
    };
};

export default EmployeeList;
