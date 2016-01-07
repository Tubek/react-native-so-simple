import React from 'react-native'
const {View, Text, StyleSheet} = React

import Button from 'react-native-button'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
})

export default class Launch extends React.Component {
    render(){
        var Actions = this.props.routes;
        return (
            <View style={styles.container}>
                <Text>Launch page</Text>
                <Button onPress={Actions.home}>Go to Home page</Button>
            </View>
        )
    }
}
