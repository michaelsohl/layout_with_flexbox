import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Expo from 'expo'
//import { Container, Header, Body , Title, Text, Content, Button, Item, Input } from 'native-base'   alternative usage with native-base
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const validate = values => {
    const error= {
        password: "",
        name: ""
    }
  
    var ema = values.password;
    var nm = values.name;
    if(values.password === undefined){
      ema = '';
    }
    if(values.name === undefined){
      nm = '';
    }
    if(ema.length < 8 && ema !== ''){
      error.password= 'too short';
    }
    if(!ema.includes('@') && ema !== ''){
      error.password= '@ not included';
    }
    if(nm.length > 8){
      error.name= 'max 8 characters';
    }
    return error;
  }

  

class RegisterForm extends Component {
    constructor(props){
        super(props)
        this.renderInput = this.renderInput.bind(this)
    }

      renderInput({ input: { onChange, ...restInput }}){
        console.log("restInput:", {...restInput})
        return <TextInput onChangeText={onChange} {...restInput} />
      }
    render() {
        const { handleSubmit, reset, onSubmit } = this.props
       
        return(
            <View>
                    <Text style={styles.textstyle}> Expenses </Text>
                    <View style={styles.mainfield}>
                      <View style={styles.blueboxcol}/>
                      <View style={styles.blueboxcol}/>
                        <View style={styles.blueboxcol}>
                          <View style={styles.yellowbox} />
                          <View style={styles.yellowbox} />
                        </View>
                      <View style={styles.blueboxrow}/>
                      <View style={styles.blueboxrow}>
                        <View style={styles.yellowbox} />
                        <View style={styles.yellowbox} />
                      </View>
                      <View style={styles.blueboxcol}/>
                    </View>
            </ View>
        )
    }
}

/**
 * 
 * <View style={styles.container}>
                    <Text> Expenses </Text>
                    <View>
                        <Field style={styles.field} name="name" component={ this.renderInput } />
                        <Field name="password" component={ this.renderInput} />
                        <View style={{marginLeft: 0, marginTop: 40}}>
                        <Button title="Submit" onPress={onSubmit} />
                        </View>
                    </View>
            </ View>
*/

const styles = StyleSheet.create({
    textstyle: {
      marginTop: 20,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20
    },
    blueboxcol: {
      backgroundColor: "blue",
      height: 100,
      width: 100,
      borderWidth: 5,
      borderColor: 'black',
      alignItems: 'flex-end',
    },
    blueboxrow: {
      backgroundColor: "blue",
      height: 100,
      width: 100,
      borderWidth: 5,
      flexDirection: 'row',
      borderColor: 'black'
    },
    yellowbox: {
      backgroundColor: "yellow",
      height: 25,
      width: 25,
      borderWidth: 5,
      borderColor: "black",
      flex: 1
    },
    yellowboxflex: {
      flex: 0
    },
    mainfield: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }
  })

/**
 * Same functionality as code above but usage of native
 * 
 * render(){
 * return (<Container>
                <Header>
                    <Title> Expenses </Title>
                </Header>
                <Body>
                    <Content>
                        <Field name="name" component={ this.renderInput } />
                        <Field name="password" component={ this.renderInput} />
                        <Button block primary onPress={reset} >
                            <Text> Submit </Text>
                        </Button>

                    </Content>
                </Body>
            </ Container>
)}
            */

export default reduxForm({
    form: 'test',
    validate 
})(RegisterForm)

