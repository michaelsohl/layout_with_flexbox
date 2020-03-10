import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
// import RegisterForm from './components/register-form'


class FirstScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> Herro first screen! </Text>
            </View>
        )
    }
}

class SecondScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> Herro second screen! </Text>
            </View>
        )
    }
}


const TabNavigator = createBottomTabNavigator({
    First: FirstScreen,
    Second: SecondScreen
})



export default createAppContainer(TabNavigator)

const styles = StyleSheet.create({
    container : 
    {   flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})