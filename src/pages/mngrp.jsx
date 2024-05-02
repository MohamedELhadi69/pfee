import { useState } from 'react';
import {Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './mngrp.css'
export default function Mngrp (){
 
  return(  <>
   <Helmet>
        <title>Report management</title>
      </Helmet>
  <p className='kk'>Log out</p>
 <img src="logo--.png" alt="" id="logo" />
<div className='cont'>
<select name="Filter" id="Filter" >
 <option value="" disabled selected >Filter</option>
 <option value="">Recent &uarr; <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg> </option>
 <option value="">Recent &darr;</option>
</select>
<input type="search" id="searchB" />
<button type='submit'id="sbtn" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white  rounded-e-lg border    dark:focus:ring-blue-800"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg></button></div>
    </>
)}