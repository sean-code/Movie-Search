import React, {useState} from 'react';
import './Feedback.css';

function Feedback(){
    const url = ""
    const[data, setData] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: ""
    })

    function handle(event){
        
    }

    return(
    <div className="container"> 
        <form id="contact" action="" method="post">
            <h3>Leave Me Your Feedback</h3>
        <fieldset>
            <input onChange ={(event)=>handle(event)} id="name" value={data.name} placeholder="Your name" type="text" tabindex="1" required autofocus />
        </fieldset>
        <fieldset>
            <input onChange ={(event)=>handle(event)} id="email" value={data.email}placeholder="Your Email Address" type="email" tabindex="2" required />
        </fieldset>
        <fieldset>
            <input onChange ={(event)=>handle(event)} id="phonenumber" value={data.phonenumber} placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
        </fieldset>
        <fieldset>
            <textarea onChange ={(event)=>handle(event)} id="message" value={data.message} placeholder="Type your message here...." tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
        </form>
    </div>
    )
}

export default Feedback;