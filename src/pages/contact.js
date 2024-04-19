import { useState } from "react"; 
import Swal from "sweetalert2"; 
import emailjs from "emailjs-com";


function Contact() { 
    var [name, setName] = useState(""); 
    var [email, setEmail] = useState(""); 
    var [message, setMessage] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handleMessageChange(event) {
        setMessage(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event); 
        emailjs.sendForm("service_1qz5z9d", "template_1qz5z9d", event.target, "user_1qz5z9d")
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                title: "Message Sent",
                text: "I will get back to you as soon as possible",
                icon: "success",
                confirmButtonText: "Cool",
            });
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                title: "Error",
                text: "There was an error sending your message",
                icon: "error",
                confirmButtonText: "Ok",
            });
        });
    }
  return (
    <div className="card">
      <h1 className="text-align-center">Contact</h1>


    <form className="col-12 d-flex flex-column justify-content-center align-items-center"> 
        <label className="col-8 d-flex flex-column my-3">
            Name: 
            <input className="" onBlur={handleNameChange} type="text" name="name" />
        </label>
        <label className="col-8 d-flex flex-column my-3">
            Email: 
            <input type="text" onBlur={handleEmailChange} name="email" />
        </label>
        <label className="col-8 d-flex flex-column my-3">
            Message: 
            <textarea name="message" onBlur={handleMessageChange} />
        </label>
        <button className="btn btn-primary col-4 my-3" onClick={handleSubmit} type="submit">Submit</button>
    </form> 
    </div>
  );
}

export default Contact;