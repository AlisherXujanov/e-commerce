import Heading from '../common/Heading/index'
import ContactImage from '../../assets/imgs/others/Gro.png'
import './style.scss'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID } from '../../private'

function ContactUs() {
    const [form, setForm] = useState({})

    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value
        setForm({ ...form, [key]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault() // prevents the page from reloading when you hit “Send”
        emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form, { publicKey: EMAIL_USER_ID })
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (err) => {
                    console.log('FAILED...', err);
                })
        e.target.reset() // resets the form after submission
    }

    return (
        <>
            <div className="contact-wrapper">
                <Heading title={"Contact Us"} page={"Contact page"} />
                <div className="contact-us">
                    <form className='contact-items'
                        onSubmit={submitHandler}
                    >
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil soluta quasi sequi totam quo sapiente illum vitae debitis et.</p>
                        <div className="tinp">
                            <input onChange={handleChange} placeholder='Your Name' type="text" name='from_name' required />
                            <input onChange={handleChange} type="email" placeholder='Your E-mail' name="from_email" required />
                        </div>
                        <input onChange={handleChange} type="text" placeholder='Subject' name="subject" required />
                        <textarea onChange={handleChange} placeholder='Type your message' name="message" required></textarea>
                        <button type='submit'>Send Mail</button>
                    </form>
                    <img src={ContactImage} alt="Contact form image" />
                </div>
            </div>
        </>
    );
}

export default ContactUs;
