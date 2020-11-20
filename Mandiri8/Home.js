import React, {Component} from 'react';
import {View, Text, Button} from  'react-native';

export default class Home extends Component {
    render() {
        return(
            <View>
                <Text> Home Page</Text>
                <Button title="Goto About Page" onPress={() => this.props.navigaton.navigate('About')} />
                <Button title="Drawer" onPress={() => this.props.navigaton.toggleDrawer()} />
            </View>
        )
    }
}