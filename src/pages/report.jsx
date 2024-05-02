import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './report.css';

const FormComponent = () => {
  const [fieldsAdded, setFieldsAdded] = useState(false);
  const [check, setCheck] = useState(false);
  const[val,setVal]=useState('');
  const[vall,setVall]=useState('');
  const[err,setErr]=useState(false);
  const[occDate,setOccDate]=useState();
  const[solDate,setSolDate]=useState();
  const[app,setApp]=useState(false);
  const [values, setValues] = useState([]);

  const checking = () => {
    setCheck(true);
      setVal(e.target.value);
  };

  const handleAddFields = () => {
    setFieldsAdded(true);
  };
  
  const handleOccDate=(e)=>{
       setOccDate(e.target.value)
  }

const handleSolDate=(e)=>{
  setSolDate(e.target.value);
  if(occDate && solDate && occDate>solDate)
  setErr(true);
}
const handlechn=(e)=>{
  setVall(e.target.value);
}
const handleApp=(e)=>{
  setApp(true);
}
const handleAddValues = () => {
  if(val!='' && vall!=''){
  const newValue = { value1: val, value2: vall };
  setValues([...values, newValue]);
  setVal(''); 
  setVall('');
  setCheck(false);
  }
};
const handleClearValues = () => {
  setValues([]); // Clear all displayed values
};
const handleDeleteValues = (index) => {

  const updatedValues = values.filter((_, i) => i !== index);

  setValues(updatedValues);
};
  return (

  <>
   <Helmet>
        <title>Report Incident</title>
      </Helmet>
<div>
<Link to='/Profile'>
<img src="prfl.png" alt="" id="prfll"/></Link>
<Link  to='/Home'>
 <img src="logo--.png" alt="" id="logoo" /></Link>
</div>



    <div className="form-container">
      <h1 id='rpt'>Report incident</h1>
      <Form>
        <Form.Group controlId="formTitle" className='ml-28'>
          <Form.Label >Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>
        <div className='dat'>
        <Form.Group controlId="formOccuranceDate" >
          <Form.Label>Occurrence Date</Form.Label>
          <Form.Control type="datetime-local" onChange={handleOccDate} />
        </Form.Group>
        <Form.Group controlId="formSolveDate">
          <Form.Label className='lblslv'>Solve Date</Form.Label>
          <Form.Control type="datetime-local" onChange={handleSolDate}/>
        </Form.Group>
        <div>
        {err ? <p id='er'>Welcome, User!</p> : <p></p>}
        </div></div>
        <Form.Group controlId="formDescription">
          <Form.Label className='lbldes'>Description</Form.Label>
          <Form.Control as="textarea" rows={8} />
        </Form.Group>
        <Form.Group controlId="formSolution">
          <Form.Label className='ml-12'>Solution</Form.Label>
          <Form.Control as="textarea" rows={15} />
        </Form.Group>
        
        <Form.Group controlId="formState">
          <Form.Label className='ml-9'>State</Form.Label>
          <Form.Control as="select">
            <option value="" disabled selected>State</option>
            <option value="1">Inactive</option>
            <option value="2">Active</option>
          </Form.Control>
        </Form.Group>
        {!fieldsAdded && (
          <Button variant="primary" className="add-fields-btn" id="butt"onClick={handleAddFields}>
            Add Troubleshooter
          </Button>
          
        )}

        {fieldsAdded && (
          <>
            <div className='sel'>
            <Form.Group controlId="formTeam"  value="val"   onChange={(e) => setVal(e.target.value)}>
              <Form.Label>Team</Form.Label>
              <Form.Control as="select"  onChange={checking}>
                <option value="" disabled selected>Team</option>
                <option >Security</option>
                <option >Network</option>
                <option >Data</option>
              </Form.Control>
            </Form.Group>
            <div
              style={{
                pointerEvents: check ? 'auto' : 'none',
                opacity: check ? '1' : '0.5'
              }}
            >
              <Form.Group controlId="formTroubleshooter" value="vall">
                <Form.Label>Troubleshooter</Form.Label>
                <Form.Control as="select"   onChange={(e) => setVall(e.target.value)}>
                <option value="" disabled selected>Troubleshooter</option>
                  <option>Moussa</option>
                  <option>3bd9a</option>
                  <option>bretis</option>
                </Form.Control>
              </Form.Group>
            </div>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></link>
            <Button variant="primary"onClick={handleAddValues} ><i class="fas fa-check"></i>
            </Button>
            <button type="button" onClick={handleClearValues}> <i className="fas fa-trash"></i></button>
             </div>
            <div>
        {values.map((item, index) => (
          <div key={index} className='added ml-[150px] text-[20px] font-[bolder] text-black'>
            <div className='spn'>
            <span >{item.value1}</span>
            <span> : </span>
            <span>{item.value2}</span>
            <span className='pl-[50px] '><button type='button' onClick={() => handleDeleteValues(index)}> <i className="fas fa-trash"></i></button></span>
          </div></div>
        ))}
      </div>
          </>
        )} <div className='fll'><Button id='but' type='submit'> Submit</Button></div>
         


        
      </Form>
    </div>
</>);
};

export default FormComponent;
