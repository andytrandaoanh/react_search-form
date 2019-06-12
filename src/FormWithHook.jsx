import React, { useState, useEffect } from 'react';



function FormWithHook () {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    //callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };


  const callback = () => {alert(values['word'])};



  
  return (
      <form onSubmit={handleSubmit}>
      	<div className="form-group">
        	<label>Name:</label>
          	<input className="form-control" type="text" name="word" value={values.word}  onChange = {handleChange}/>
        	
        </div>

        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
   );
  
}

export default FormWithHook;


