import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Form1(props) {

  return (<>
    <div >   
    <div style={{alignItems:"center",marginLeft:"460px",marginTop:"50px",width:"500px"}}>
    <TextField fullWidth id="fullWidth" label="Name" variant="outlined" required style={{marginTop:"20px"}} />
    <TextField fullWidth id="fullWidth" label="Father Name" variant="outlined" style={{marginTop:"20px"}}  required/>
        <TextField fullWidth id="fullWidth" label="Email address" variant="outlined" style={{marginTop:"20px"}}  required/>
        <TextField fullWidth   id="fullWidth" label="Contact No" variant="outlined" style={{marginTop:"20px"}}  required/>
        </div>
        <div style={{display:"flex",justifyContent:"center",margin:"20px"}}>
    <Button variant="contained" style={{backgroundColor:"black"}} onClick={()=>props.handleNext()}>Next</Button> 
    </div>
    </div>
    </>
  )
}

export default Form1