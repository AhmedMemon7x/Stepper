import React, { useState } from 'react'
import { Stepper,Step,StepLabel,Button,
Typography } from '@mui/material'
import Form1 from "./Form/Form1"
import Form2 from "./Form/Form2"
import Form3 from "./Form/Form3"
function getStepContent(activeStep,handleNext,handleBack){
switch(activeStep){
case 0:
    return <Form1 handleNext={handleNext}/>
case 1:
    return <Form2 handleNext={handleNext} handleBack={handleBack}/>
case 2:
    return <Form3 handleBack={handleBack} />
}
}

function Mainstepper() {
    const[activestep,setActive]=useState(0)
    const stepData=[
        "Personal Information",
        "Education Information",
        "General Information"
    ]
    const handleNext=()=>{
        setActive(activestep+1)
    }
    const handleBack=()=>{
        setActive(activestep-1)
    }
    console.log(stepData.length)
    return (
        <div>
        <Stepper alternativeLabel activeStep={activestep}>
{
    stepData.map((v,i)=>{
        return(
            <Step key={i}>
                <StepLabel>{v}</StepLabel>
            </Step>
        )
    })
}
        </Stepper>

{
    activestep==stepData.length?"submit":<Typography>{getStepContent(activestep,handleNext,handleBack)}</Typography>
}
    </div>
  )
}

export default Mainstepper