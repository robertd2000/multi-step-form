import React from 'react'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { MuiThemeProvider } from 'material-ui/styles'

export const FormUserDetails = ({nextStep, handleChange, values}) => {
    const continueHandler = e => {
        e.preventDefault()
        nextStep()
    }

    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Enter User Ddetails" />  
                <TextField 
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName} />     
                <br/>   
                <TextField 
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName} />     
                <br/>   
                <TextField 
                    hintText="Enter Your email"
                    floatingLabelText="email"
                    onChange={handleChange('email')}
                    defaultValue={values.email} />     
                <br/>   
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={continueHandler} />   
            </>
        </MuiThemeProvider>
    )
}

const styles = {
    button: {
        margin: 15
    }
}