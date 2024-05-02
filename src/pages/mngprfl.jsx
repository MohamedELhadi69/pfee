import './mngprfl.css'
import { Helmet } from 'react-helmet';
import BackCube from '../components/backCube'
export default function Mngprfl(){

    return(
        <>
         <Helmet>
        <title>Profile Management</title>
      </Helmet>
<div className='lod'>
<img src="logo--.png" alt="" id='ldd'/>

</div>



        <div className='jk'>
    <h1 className='wlcm'>Welcome to profile management space</h1>
    <button className='kk'>Log out </button>
       <div class="container">
    <div className='card'>
      <div className='cub'>
       <BackCube/></div>
      <div class="overlay">
        <h2 className='tms'id="bg">Team security</h2>
      </div>
    </div>
    <div class="card">
    <div className='cub'>
      <BackCube/></div>
      <div class="overlay">
        <h2 className='tms' >Team data</h2>
      </div>
    </div>
    <div className='card'>
      <div className='cub'>
       <BackCube/></div>
      <div class="overlay">
        <h2 className='tms' id="bg">Team network</h2>
      </div>
    </div>
  </div></div>
        </>
    )


}