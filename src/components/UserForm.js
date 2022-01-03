import React, { useState } from 'react'
import { Confirm } from './Confirm'
import { FormPersonalDetails } from './FormPersonalDetails'
import { FormUserDetails } from './FormUserDetails'
import { Success } from './Success'

export const UserForm = () => {
    const [step, setStep] = useState(1)
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
      })

      const nextStep = () => {
        setStep(step + 1)
      }

      const prevStep = () => {
        setStep(step - 1)
    }

    const handleChange = input => e => {
        setState({
            ...state,
            [input]: e.target.value
        })
    }

    const {firstName, lastName, email, occupation, city, bio} = state
    const values = {firstName, lastName, email, occupation, city, bio}

    switch (step) {
        case 1:
            return <FormUserDetails 
                nextStep={nextStep} 
                handleChange={handleChange}
                values={values} />
        case 2:
            return <FormPersonalDetails 
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={values} />
        case 3:
            return <Confirm
                nextStep={nextStep}
                prevStep={prevStep}
                values={values} />

        case 4:
            return <Success />
    }
    return (
        <div>
            
        </div>
    )
}
