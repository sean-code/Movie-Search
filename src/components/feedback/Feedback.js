import React from "react";
import { useState } from "react";
import './Feedback.css';


const Feedback = () => {

    // const [message, setMessage] = useState('');

    // const handleSubmit = event => {
    //   // 👇️ prevent page refresh
    //   event.preventDefault();
  
    //   alert('form submitted ✅');
    // };

    return(
        <>
            <div className="contact-container">  
                <form id="contact" action="https://app.headlessforms.cloud/api/v1/form-submission/NmQ7sBpgDb" method="post">
                    <h3>Feedback</h3>                    
                    <input className='input1' placeholder="   NAME:" type="name" name="Name"  required="required"></input>
                    <input className='input1' placeholder="   EMAIL:" type="email" name="Email" tabindex="2"  required="required"></input>
                    <input className='input2' placeholder="   TYPE YOUR MESSAGE:" name="Message" tabindex="5"  required="required"></input>
                        <button name="submit" type="ssubmit" id="contact-submit" data-submit="...Sending">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Feedback;