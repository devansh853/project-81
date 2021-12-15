import React,{Component} from 'react'
import {Text,View} from 'react-native'

export default class Profile extends Component{
    render(){
        return(
            <View style = {{flexL:1,justifyContent: 'center',alignItem:'center'}}>
                <Text>Profile</Text> 
            </View>
        )
    }
}