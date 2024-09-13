import './footer.css'


export function Footer(){
    return (
        <footer>
        <div className="footer-container">
            <div className="footer-content-container">
                <h3 className="website-logo">Dolce Caemi </h3>
                <span className="footer-info"></span>
                <span className="footer-info"></span>
            </div>
            <div className="footer-menus">
                <div className="footer-content-container">
                    <span className="menu-title">Contacto</span>
                    <a href="" className="menu-item-footer">2324530136</a>
                    <a href="" className="menu-item-footer">
                    carolinadb89@gmail.com</a>
                    <a href="https://www.google.com/maps/place/Dolce+Caemi.+Pastelería/@-34.7734758,-59.6855916,17z/data=!4m6!3m5!1s0x95bc0507929a810f:0x1fce37ca99cdd141!8m2!3d-34.7729405!4d-59.6867564!16s%2Fg%2F11kk0x_9l7?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D" className="menu-item-footer">Donde encontrarnos</a>
                </div>
                <div className="footer-content-container">
                    <span className="menu-title">legal</span>
                    <a href="" className="menu-item-footer">Privacy Policy</a>
                    <a href="" className="menu-item-footer">Cookies</a>
                    <a href="" className="menu-item-footer">Legal Advice</a>
                </div>
            </div>
            
            <div className="footer-content-container">
                <span className="menu-title">follow us</span>
                <div className="social-container">
                    <a href="https://www.instagram.com/dolce_caemi/" className="instagram"></a>
                    <a href="https://www.facebook.com/DolceCaemi/" className="facebook"></a>
                    <a href="" className="social-link"></a>
                </div>
            </div>
        </div>
        
    </footer>
    )
}