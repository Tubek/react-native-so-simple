import React, {View, Text, StyleSheet} from 'react-native'
import Button from 'react-native-button'

export default class Register extends React.Component {
    render(){
        let Actions = this.props.routes;
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button onPress={Actions.launch}>Back</Button>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
