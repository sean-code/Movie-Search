import { Axios } from 'axios';
import React, {useState} from 'react';
import './Feedback.css';
import axios from 'axios';

function Feedback(){
    const url = "https://gentle-coast-43368.herokuapp.com/feedback"
    const[data, setData] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: ""
    })

    function handle(event){
        const newdata = {...data}
        newdata[event.target.id] = event.target.value
        setData(newdata)
        console.log(newdata)
    }

    const submit = (event)=>{
        event.preventDefault();
        axios.post(url, {
            name: data.name,
            email: data.email,
            phonenumber: data.phonenumber,
            message: data.message
        })
        .then(response=>{
            console.log(response.data)
        })
    }

    return(
    <div className="container"> 
        <form id="contact" onSubmit={(event)=> submit(event)}>
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