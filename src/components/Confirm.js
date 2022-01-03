import React from 'react'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import { MuiThemeProvider } from 'material-ui/styles'

export const Confirm = ({nextStep, prevStep, values}) => {
    const continueHandler = e => {
        e.preventDefault()
        nextStep()
    }

    const backHandler = e => {
        e.preventDefault()
        prevStep()
    }

    const {firstName, lastName, email, occupation, city, bio} = values

    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Confirm" />  
                 <List>
                    <ListItem 
                        primaryText="First Name"
                        secondaryText={firstName} /> 
                    <ListItem 
                        primaryText="Last Name"
                        secondaryText={lastName} /> 
                    <ListItem 
                        primaryText="Email"
                        secondaryText={email} /> 
                    <ListItem 
                        primaryText="Occupation"
                        secondaryText={occupation} /> 
                    <ListItem 
                        primaryText="City"
                        secondaryText={city} /> 
                    <ListItem 
                        primaryText="Bio"
                        secondaryText={bio} />     
                </List>  
                <RaisedButton
                    label="Confirm & Continue"
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