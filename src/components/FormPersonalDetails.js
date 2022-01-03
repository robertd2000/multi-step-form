import React from 'react'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { MuiThemeProvider } from 'material-ui/styles'

export const FormPersonalDetails = ({nextStep, prevStep, handleChange, values}) => {
    const continueHandler = e => {
        e.preventDefault()
        nextStep()
    }

    const backHandler = e => {
        e.preventDefault()
        prevStep()
    }
    
    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Enter User Ddetails" />  
                <TextField 
                    hintText="Enter Your Occupation"
                    floatingLabelText="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation} />     
                <br/>   
                <TextField 
                    hintText="Enter Your City"
                    floatingLabelText="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city} />     
                <br/>   
                <TextField 
                    hintText="Enter Your Bio"
                    floatingLabelText="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio} />     
                <br/>   
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={continueHandler} />   
                <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={backHandler} />   
            </>
        </MuiThemeProvider>
    )
}

const styles = {
    button: {
        margin: 15
    }
}