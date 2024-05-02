import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Emp.css';

const Emp = () => {
  const[pass,setPass]=useState('');
  const[conPass,setConPass]=useState('');
  const[sim,setSim]=useState(false);
  const getPass=(e)=>{
    setSim(false);
    setPass(e.target.value);
  }
  const getConPass=(e)=>{
    setSim(false);
    setConPass(e.target.value);
  }
  const handlePass=()=>{
    if(pass!==conPass){
        setSim(true);
    }
  }
  return (

  <>
   <Helmet>
        <title>Add employee</title>
      </Helmet>


<div className=' absolute'>
<Link to='/Profile'>
<img src="prfl.png" alt="" id="pr"/>
</Link>
<Link  to='/Home'>
 <img src="logo---.png" alt="" id="logooo" /></Link>
</div>



    <div className="forrm-container">
      <h1 id='pt'>Add employee</h1>
      <Form  >
        <div className='flex justify-between ml-[80px]'>
            
       <Form.Group controlId='nom'>
        <Form.Label className='lblnom'> First name</Form.Label>
        <br />
        <Form.Control type='text' placeholder=' First name'/>
       </Form.Group>
       <Form.Group controlId='prenom'>
        <Form.Label className='lblprenom'> Last name</Form.Label> <br />
        <Form.Control type='text' placeholder=' Last name'/>
       </Form.Group>
       </div>
       <div className='flex justify-between'>
       <Form.Group controlId='eml'>
        <Form.Label> Email</Form.Label>
        <Form.Control type='email' placeholder=' Email'/>
       </Form.Group>
       <Form.Group controlId="Role">
          <Form.Label >Role</Form.Label>
          <Form.Control as="select">
            <option value="" disabled selected>Role</option>
            <option value="1">Troubleshooter</option>
            <option value="2">Supervisor</option>
          </Form.Control>
        </Form.Group>
       </div>
       <div className='flex justify-between ml-[80px]'>
       <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></link>
       <Form.Group controlId='Pass'>
        <Form.Label > Password</Form.Label>
        <Form.Control type='Password' placeholder=' Password' onChange={getPass} style={{
         borderColor: sim ? 'rgb(242, 118, 118)' : 'transparent'

        }}/>
       </Form.Group>
       <Form.Group controlId='Pass2'>
        <Form.Label> Confirm password</Form.Label>
        <Form.Control type='Password' placeholder='Password' onChange={getConPass} style={{
            borderColor: sim ? 'rgb(242, 118, 118)' : 'transparent'
         

        }}/>
       </Form.Group>

       </div>
       {sim &&(
        <>
        <p className="text-red-400 font-bold transform scale-105 ml-4"> <i className="fas fa-exclamation-circle"></i>The passwords are diffrent</p>
        </>
       )
       
       }
  <div className='fll' style={{
                pointerEvents: sim ? 'none' : 'auto',
                opacity: sim ? '0.5' : '1'
              }}><Button id='but' type='button' onClick={handlePass}> Submit</Button></div>
         


        
      </Form>
    </div>
</>);
};

export default Emp;
