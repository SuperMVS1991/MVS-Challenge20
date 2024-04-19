import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com"; 
import Navigation from "../components/navigation";

function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    function handleNameChange(event) {
        setFormState({ ...formState, name: event.target.value });
        console.log(formState);
    }

    function handleEmailChange(event) {
        setFormState({ ...formState, email: event.target.value });
        console.log(formState);
    }

    function handleMessageChange(event) {
        setFormState({ ...formState, message: event.target.value });
        console.log(formState);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
        emailjs
            .sendForm("service_2thkqxq", "template_37dslsm", event.target, "I9UnG6riz9IxRItpS")
            .then(
                (result) => {
                    console.log(result.text);
                    Swal.fire({
                        title: "Message Sent",
                        text: "I will get back to you as soon as possible",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                },
                (error) => {
                    console.log(error.text);
                    Swal.fire({
                        title: "Error",
                        text: "There was an error sending your message",
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                }
            );
        event.target.reset();
    }

    return (
        <div>
        <Navigation />
        <div className="card background">
            <h1 className="text-align-center">Contact</h1>

            <form className="col-12 d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
                <label htmlFor="name" className="col-8 d-flex flex-column my-3">
                    Name:
                    <input defaultValue={formState.name} onBlur={handleNameChange} type="text" name="name" />
                </label>
                <label htmlFor="email" className="col-8 d-flex flex-column my-3">
                    Email:
                    <input defaultValue={formState.email} onBlur={handleEmailChange} type="text" name="email" />
                </label>
                <label htmlFor="message" className="col-8 d-flex flex-column my-3">
                    Message:
                    <textarea defaultValue={formState.message} onBlur={handleMessageChange} name="message" />
                </label>
                <button className="btn btn-primary col-4 my-3" type="submit">
                    Submit
                </button>
            </form>
        </div> 
        </div> 
    );
}

export default Contact;
