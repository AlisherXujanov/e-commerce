import Heading from '../common/Heading/index'
import ContactImage from '../../assets/imgs/others/Gro.png'
import './style.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactUs() {
    const form = useRef() // reference to the form element

    const submitHandler = (e) => {
        e.preventDefault() // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID-')
            .then((result) => {
                alert('Message Sent', result.text)
                // show the user a success message
            }, (error) => {
                alert('An error occurred, Please try again', error.text)
                // show the user an error
            })

        e.target.reset() // resets the form after submission
    }

    return (
        <>
            <div className="contact-wrapper">
                <Heading title={"Contact Us"} page={"Contact page"} />
                <div className="contact-us">
                    <form className='contact-items'
                        ref={form}
                        onSubmit={submitHandler}
                    >
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil soluta quasi sequi totam quo sapiente illum vitae debitis et.</p>
                        <div className="tinp">
                            <input placeholder='Your Name' type="text" />
                            <input type="text" placeholder='Your E-mail' required />
                        </div>
                        <input type="text" placeholder='Subject' required />
                        <textarea placeholder='Type your message' required></textarea>
                        <button type='submit'>Send Mail</button>
                    </form>
                    <img src={ContactImage} alt="Contact form image" />
                </div>
            </div>
        </>
    );
}

export default ContactUs;