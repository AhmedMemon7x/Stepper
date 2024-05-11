import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Form2(props) {
  return (<>
    <div >   
    <div style={{alignItems:"center",marginLeft:"460px",marginTop:"50px",width:"500px"}}>
    <TextField fullWidth id="fullWidth" label="University Name" variant="outlined" required style={{marginTop:"20px"}} />
    <TextField fullWidth id="fullWidth" label="Current Semester" variant="outlined" style={{marginTop:"20px"}}  required/>
        <TextField fullWidth id="fullWidth" label="Roll no:" variant="outlined" style={{marginTop:"20px"}}  required/>
        <TextField fullWidth   id="fullWidth" label="Last Qualification" variant="outlined" style={{marginTop:"20px"}}  required/>
        </div>
        <div style={{marginLeft:"620px",marginTop:"20px",paddingright:"10px"}}>
    <Button variant="contained" style={{backgroundColor:"black"}} onClick={()=>props.handleBack()}>Back</Button> 
    <Button variant="contained" style={{backgroundColor:"black"}} onClick={()=>props.handleNext()}>Next</Button> 
    </div>
    </div>
    </>
  )
}

export default Form2