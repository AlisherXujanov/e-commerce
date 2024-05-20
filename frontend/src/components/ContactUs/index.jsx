import Heading from '../common/Heading/index'
import ContactImage from '../../assets/imgs/others/Gro.png'
import './style.scss'
function ContactUs() {
    return (
        <>
            <div className="contact-wrapper">
                <Heading title={"Contact Us"} page={"Contact page"} />
                <div className="contact-us">
                    <div className='contact-items'>
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil soluta quasi sequi totam quo sapiente illum vitae debitis et.</p>
                        <div className="tinp">
                            <input placeholder='Your Name' type="text" />
                            <input type="text" placeholder='Your E-mail' />
                        </div>
                        <input type="text" placeholder='Subject' />
                        <textarea placeholder='Type your message ' name="" id=""></textarea>
                        <button>Send Mail</button>
                    </div>
                    <img src={ContactImage} alt="" />
                </div>
            </div>
        </>
    );
}

export default ContactUs;