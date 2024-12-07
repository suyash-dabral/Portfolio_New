import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>If you have some suggestions or want to collaborate, feel free to reach out. </p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:dabralsuyash05@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:dabralsuyash05@gmail.com">dabralsuyash05@gmail.com</a>
        </div>
          
      </div>
      <Form></Form>
    </Container>
  )
}