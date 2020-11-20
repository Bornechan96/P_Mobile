import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class About extends Component {
    render() {
        return(
            <View>
                <Text>About Page</Text>
                <Button title="Go Back" on Press={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}