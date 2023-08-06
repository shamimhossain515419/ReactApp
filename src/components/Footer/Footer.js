import './Footer.css';

// import image from '../../Assets/Images/banner.jpg'
import aboutBanner from '../../Assets/Images/banner2.jpeg'

const Footer = () => {
    return (
        <footer className="bg-secondary p-5">
        <div className="container text-center  text-white">
            <a className="btn btn-light" href="#up"><i className="fa-solid fa-arrow-up"></i> To the Top</a>
            <div className="my-4">
                <i className="ms-2 h3 fa-brands fa-square-facebook"></i>
                <i className="ms-2 h3 fa-brands fa-instagram"></i>
                <i className="ms-2 h3 fa-brands fa-twitter"></i>
                <i className="ms-2 h3 fa-brands fa-linkedin-in"></i>
            </div>
            <h6>© ebondhu. All Rights Reserved </h6>
            <h5>
                <i className="fa-solid fa-shop"></i>
                <span>MORSHED ALAM & SALAH TECHNICAL SERVICE</span>
            </h5>
            <h5>
                <i className="fa-solid fa-location-dot"></i>
                <span>Dubai</span>
            </h5>
            <h5>
                <i className="fa-solid fa-envelope"></i>
                <span>Email: Morshedalom6251@gmail.com</span>
            </h5>
            <h5><i className="fa-solid fa-phone"></i> <span>M: 0557675191</span></h5>
            <h5><i className="fa-solid fa-phone"></i> <span>M: 0557675191</span></h5>
        </div>


    </footer>


    );

}
export default Footer;