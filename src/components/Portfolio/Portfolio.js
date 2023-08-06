import './Portfolio.css'; 
import Interiors from '../../Assets/Images/Interiors.jpg'
import RetailandFitout from '../../Assets/Images/RetailandFitout.png'
import ExhbStand from '../../Assets/Images/ExhbStand.png'
import ProductPatern from '../../Assets/Images/productPatern.jpg'

const Portfolio = () => {
    return (
        <section>
            <section className=" text-secondary text-center py-5 col-10 col-sm-8 col-lg-6 mx-auto" id="diadem">
                <h1 className="mt-5 pt-5">DIADEM</h1>
                <h6 className="fst-italic">
                    Be it stand building, fabrications, interior designing or electromechanical works, browse through our
                    Portfolio to take a peek into the wide array of projects we have undertaken and excelled at.
                </h6>
                <a className="bg-danger border-0 py-2 px-5 d-inline-block my-3 text-white fw-bold">Download Portfolio</a>
            </section>

            <section className="container my-5 ">
                <div className="d-flex gap-3 flex-column flex-lg-row justify-content-center">
                    <div className="col">
                        <div className="card z-n1 border-0">
                            <img src={Interiors} height="180px" className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h3 className="text-center text-danger"><span
                                        className="border-bottom border-3 border-secondary">Interiors</span></h3>
                                </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card z-n1 border-0">
                            <img src={RetailandFitout} height="180px" className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h3 className="text-center text-danger"><span className="border-bottom border-3 border-secondary">Retail
                                        &
                                        Fitouts</span></h3>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card z-n1  border-0">
                            <img src={ExhbStand} height="180px" className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h3 className="text-center text-danger"><span
                                        className="border-bottom border-3 border-secondary">Exhibition
                                        Stands</span></h3>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card z-n1  border-0">
                            <img src={ProductPatern} height="180px" className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h3 className="text-center text-danger"><span
                                        className="border-bottom border-3 border-secondary">Product
                                        Partners</span></h3>
                                </div>
                        </div>
                    </div>







                </div>
            </section>


        </section>

    );

}
export default Portfolio;