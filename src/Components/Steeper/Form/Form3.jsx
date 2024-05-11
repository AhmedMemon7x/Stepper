import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Form3(props) {
  return (
    <div >   
    <div style={{alignItems:"center",marginLeft:"460px",marginTop:"50px",width:"500px"}}>
    <TextField fullWidth id="fullWidth" label="Status" variant="outlined" required style={{marginTop:"20px"}} />
    <TextField fullWidth id="fullWidth" label="Blood group" variant="outlined" style={{marginTop:"20px"}}  required/>
        <TextField fullWidth id="fullWidth" label="Home address" variant="outlined" style={{marginTop:"20px"}}  required/>
        <TextField fullWidth   id="fullWidth" label="Emergency No" variant="outlined" style={{marginTop:"20px"}}  required/>
        </div>
        <div style={{display:"flex",justifyContent:"center",margin:"20px",}}>
    <div><Button variant="contained" style={{backgroundColor:"black"}} onClick={()=>props.handleBack()}>Back</Button></div> 
    <div><Button variant="contained" style={{backgroundColor:"black"}} >Submit</Button> 
    </div>
    </div>
    </div>
)
}

export default Form3