import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon= {<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon= {<FaPhoneAlt fontSize="24px"/>}/>
            </div>
            <Button 
            isOutline = {true}
            text="VIA EMAIL FORM" icon= {<MdEmail fontSize="24px"/>}/>
            <form>
                <div className={styles.form_control}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor='email'>E-mail</label>
                    <input type="text" name="email"/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor='text'>Text</label>
                    <textarea name='text' rows="8"/>
                </div>
                <div style={
                    {display: "flex", justifyContent: "end"}
                }>
                    <Button text="SUBMIT"/>
                </div>
            </form>

        </div>
        <div className={styles.contact_image}>
            <img src="/images/contact.svg" alt='contact image'/>
        </div>
    </section>

  )
}

export default ContactForm