import useBannerData from "../../hooks/useBannerData";
import "./About.css";
const About = () => {
  const bannerData = useBannerData();
  return (
    <section className="">
      <section className="container  py-5 text-secondary" id="about">
        <h3 className="text-center mt-5 pt-5">DISCOVER | About Us</h3>
        <h5 className="fst-italic text-center">
          "What is this life if, full of care, we have no time to stand and
          stare."
        </h5>

        <h6 className="lh-lg mt-4">
          For us, empty spaces are full of opportunities. Every square inch of
          it is meant to be explored and transformed into something that’s worth
          our time and effort. Our love for designing and experimenting with
          wood, acrylic and many other materials is unbeatable. We guess, that’s
          what got us some of the most prestigious projects in the region. We
          see each project as a challenge – to escalate our skillsets and
          execute something unique and remarkable.
        </h6>

        <h6 className="text-center mt-4">How do we do it?</h6>
        <h6>
          Give us some credit for we have over 25 years of experience in the
          industry. Trusted with quality deliverables and committed towards
          excellence, you are most welcome to sample our creativity and finesse
          at work.
        </h6>
      </section>

      <section className="border-end  border-start mx-0 mx-lg-5 position-relative d-flex justify-content-center align-items-center about__Banner">
        <img
          src={bannerData["about-banner"]}
          alt="banner"
          className="position-absolute w-100 top-0 start-0 z-n1 h-100"
        ></img>
        <div className="">
          <h1 className="bg-black text-white fw-bold px-2 px-lg-5 py-3 font-monospace">
            Seeing is believing
          </h1>
        </div>
      </section>
    </section>
  );
};
export default About;
