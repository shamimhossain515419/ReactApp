import './Service.css';

import img from '../../Assets/Images/electric1.jpeg';
import video from '../../Assets/video/electric1.mp4';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const Service = () => {
    return (
        <div>
            <NavBar></NavBar>
            <section className="mb-5 mx-2">
                {/* ervice Catagory Title Show   */}
                <h1 className="text-center mt-5 mb-3">Electric</h1>

                {/* 1. Service Catagory Title Onujai Serivce Show Korbe
                2.index File e je catagori te clcik hobe sei catagori wise service image show hobe */}

                <div className="row row-cols-1 row-cols-lg-2 m-0 g-2">
                    <div className="col col-lg-6">
                        <div className="row  m-0 row-cols-2 g-1">
                            <div className="col">
                                <div>
                                    <img src={img} className="w-100 rounded-2 service_img"
                                        alt="" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={img} className="w-100 rounded-2 service_img"
                                        alt="" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={img} className="w-100 rounded-2 service_img"
                                        alt="" />
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <img src={img} className="w-100 rounded-2 service_img"
                                        alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="mt-3 mt-lg-2">
                            <video className="w-100" controls autoplay>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="col col-lg-6">

                        <div className="d-flex flex-column-reverse flex-lg-column">
                            <div className=" mt-3 mt-lg-0">
                                <video className="w-100" controls autoplay>
                                    <source src={video} type="video/mp4" />

                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="row  m-0 row-cols-2 g-1">
                                <div className="col">
                                    <div>
                                        <img src={img} className="w-100 rounded-2 service_img"
                                            alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <img src={img} className="w-100 rounded-2 service_img"
                                            alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <img src={img} className="w-100 rounded-2 service_img"
                                            alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <img src={img} className="w-100 rounded-2 service_img"
                                            alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );

}


export default Service;