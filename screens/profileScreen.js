
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {View, StyleSheet, Text} from "react-native"

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>Please ensure you copy and store this down</Text>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({

    container : {
        alignContent: "center",
        justifyContent : "center"
    }
})


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, null )(ProfileScreen);