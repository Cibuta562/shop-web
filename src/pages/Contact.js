import "./Contact.css"
import Menu from "./Menu";

function Contact()  {
    return(
        <div className="contact-div">
        <h1 className="contact-title">Contact</h1>
            <div className="map-contact">
                <a style={{textDecoration: "none"}} href= "mailto:andreiboboccibo@gmail.com">
                    <p className="contact-details">contact@noft.com</p>
                </a>
                <p className="contact-details">+40723344599</p>
                <p className="contact-details">address: Strada Mircea Vulcanescu</p>
                <div className="line"></div>
            <iframe className="map"  height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=900&amp;height=400&amp;hl=en&amp;q=Strada%20Mircea%20Vulc%C4%83nescu%2079,%20Bucure%C8%99ti,%20Rom%C3%A2nia%20%20Ptolemaida+(Noft)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
            </div>
        </div>
    )

}

export default Contact