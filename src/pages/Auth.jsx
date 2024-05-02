import './Emp-log.css'
import { Helmet } from 'react-helmet';
import {Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
export default function Auth(){ 
    return(
        <>
 <Helmet>
        <title>Authentication</title>
      </Helmet>

<div className='logg'>
<img src="logo---.png" alt="" id='lgh'/>

<div className='cont- flex justify-between'>
    <Link to='/EmpLog'>
    <button type='button' id='empb'> Employee login</button></Link>
    <Link to='/AdLog'>
    <button type='button' id='empb'>Admin login</button></Link>
</div></div>


</>)}