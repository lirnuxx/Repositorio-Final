import './contactbox.css'

export default function ContactBox (){
    return (
        <section className="center">

<div class="container">
        <div class="contact-box">
            <div class="left"></div>
            <div class="right">
                <h2>Contactanos</h2>
                <form action="https://formspree.io/f/mkgwjvqg" method="post" required>
                <input type="text" class="field" placeholder="Your Name" />
                <input type="email" class="field" placeholder="Your Email" />
                <input type="number" class="field" placeholder="Phone" />
                <textarea name="message" placeholder="Message" class="field"></textarea>
                <button type="submit" class="btn">Enviar</button>
                </form>
            </div>
        </div> 
</div>
</section>
    )
}

