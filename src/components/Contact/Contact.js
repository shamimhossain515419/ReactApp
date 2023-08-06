import "./Contact.css";
import useBannerData from "../../hooks/useBannerData";

const Contact = () => {
  const bannerData = useBannerData();
  return (
    <section>
      <section
        className="contact__banner py-5 mt-5 d-flex justify-content-center align-items-center position-relative contact_banner"
        id="contact"
      >
        <img
          src={bannerData["contract-banner"]}
          alt="contract-banner"
          className="position-absolute w-100 top-0 start-0 z-n1 h-100"
        ></img>
        <div>
          {" "}
          <h1 className="bg-black text-white fw-bold px-3 px-lg-5 py-3 font-monospace">
            Contact
          </h1>
        </div>
      </section>

      <section className="container my-5">
        <h1 className="text-center text-secondary"> DIAL </h1>
        <h4 className="text-center text-secondary">When in doubt...DIAL !</h4>
        <div className="row row-cols-1 row-cols-lg-2 mt-5  m-0 mx-lg-5">
          <div className="col col-lg-4">
            <iframe
              className="col-12 rounded-3 border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.46264077270865!2d55.427994122698834!3d25.29068591595142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f126c2fa317%3A0xfb0778a8bc47bae2!2sMorshed%20Alam%20Restaurant!5e0!3m2!1sen!2sbd!4v1691155445622!5m2!1sen!2sbd"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col col-lg-8">
            <div className="text-secondary ms-0 ms-lg-5 mt-5">
              <h5>
                <i className="fa-solid fa-shop col-1"></i>
                <span>MORSHED ALAM & SALAH TECHNICAL SERVICE</span>
              </h5>
              <h5>
                <i className="fa-solid fa-location-dot col-1"></i>{" "}
                <span>Dubai</span>
              </h5>
              <h5>
                <i className="fa-solid fa-envelope col-1"></i>{" "}
                <span>Morshedalom6251@gmail.com</span>
              </h5>
              <h5>
                <i className="fa-solid fa-phone col-1"></i>{" "}
                <span>0557675191</span>
              </h5>
              <h6 className="my-3">
                Swing by for a cup of <i className="fa-solid fa-mug-hot"></i> ,
                or leave us a note:
              </h6>

              <div className="d-flex flex-column flex-lg-row gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Comment"
                  className="form-control"
                />
              </div>
              <div className="text-end mt-3">
                <button className="btn btn-dark py-2 px-5">
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>SEND MESSAGE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Contact;
