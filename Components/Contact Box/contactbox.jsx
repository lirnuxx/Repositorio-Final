import './contactbox.css'

export default function ContactBox (){
    return (
        <section className="center">

<div class="container">
        <div class="contact-box">
            <div class="left">
                <img className='carta' src="./images/contact.jpg" alt="" />
            </div>
            <div class="right">
                <h2>Contactanos</h2>
                <form action="https://formsubmit.co/levvycum@gmail.com" method="post" required>
                <input type="text" class="field" placeholder="Your Name" />
                <input type="email" class="field" placeholder="Your Email" />
                <input type="number" class="field" placeholder="Phone" />
                <textarea name="message" placeholder="Message" class="field"></textarea>
                <button type="submit" class="btn">Enviar</button>

                <input type="hidden" name="_next" value="http://localhost:5173/"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                </form>
            </div>
        </div> 
</div>
</section>
    )
}

