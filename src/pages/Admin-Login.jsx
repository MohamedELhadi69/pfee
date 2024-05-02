import './Ad-log.css'
import { Helmet } from 'react-helmet';
import {Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
export default function AdLog(){ 
    return(
        <>

<div className='log'>
<img src="logo---.png" alt="" id='lg'/>
<form className='logForm'>
<Form.Group controlId="Username">
          <Form.Label  className='mr-[30px]'>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          </Form.Group>
<Form.Group controlId="Password">
<Form.Label >Password</Form.Label>
          <Form.Control type="password" placeholder=" Password" />
</Form.Group>
<Button type='submit' id='log-but'> Log in</Button>
</form>
<Link to="/Report">
<p className='absolute top-[85%] p-[10px] pl-[20px] font-bold text-white transform hover:scale-[1.1] hover:transition duration-500' >Forget your password?</p>
</Link>
</div>


</>)}