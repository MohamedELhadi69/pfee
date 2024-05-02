import './Admin.css'
import { Helmet } from 'react-helmet';
import BackCube from '../components/backCube'
import {Link } from 'react-router-dom';
import useTitle from '../components/useTitle';
export default function Admin(){
    return(
        <>
         <Helmet>
        <title>Admin space</title>
      </Helmet>
<div className='lod'>
<img src="logo--.png" alt="" id='ldd'/>

</div>



        <div className='jk'>
    <h1 className='wlcm'>Welcome to the management space</h1>
    <button className='kk'>Log out </button>
       <div class="container">
    <Link to="/Admin-report">
    <div className='card'>
      <div className='cub'>
       <BackCube/></div>
      <div class="overlay">
        <h2 className='mng'>Manage reports</h2>
        <br />
        <p>Delete and modify reports </p>
      </div>
    </div></Link>
    <br />
    <Link to="/Admin-prfl">
    <div class="card">
    <div className='cub'>
      <BackCube/></div>
      <div class="overlay">
        <h2 className='mng'>Manage profiles</h2>
        <br />
        <p>Add,delete and modify profiles</p>
      </div>
    </div></Link>
  </div></div>
        </>
    )


}