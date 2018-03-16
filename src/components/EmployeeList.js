import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class EmployeeList extends Component {
    static navigationOptions = {
        title: 'Employee List',
        headerRight: (
            <Button
              onPress={() => alert('Please, create employee!')}
              title="Go"
              color="grey"
            />
        )
      };
    
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
