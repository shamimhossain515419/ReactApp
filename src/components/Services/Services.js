import React from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Services.css';
import servicCatagory from '../../Assets/Images/Interiors.jpg'

const Services = () => {
    return (

        <section className="container py-5" id="our_service">
            <h1 className="text-center fw-bold my-5">
                Our Services  </h1>
            <div className="row row-cols-1 row-cols-lg-3 g-3">
                <div className="col">
                    <div className="card z-0">
                        <Link to='/service'>
                            <img src={servicCatagory} alt="" height="250px" className="card-img-top" />
                        </Link>
                        <div className="card-body">
                            <h3>Electric</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, non dolor perspiciatis
                                culpa quos odio quod recusandae ex, vitae corporis pariatur, ut accusamus iste aspernatur
                                qui! Tempore a commodi ad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card z-0">
                        <Link to='/service'>
                            <img src={servicCatagory} alt="" height="250px" className="card-img-top" />
                        </Link>
                        <div className="card-body">
                            <h3>Plumbing</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, non dolor perspiciatis
                                culpa quos odio quod recusandae ex, vitae corporis pariatur, ut accusamus iste aspernatur
                                qui! Tempore a commodi ad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card z-0">
                        <Link to='/service'>
                            <img src={servicCatagory} alt="" height="250px" className="card-img-top" />
                        </Link>
                        <div className="card-body">
                            <h3>Roof Water Proof</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, non dolor perspiciatis
                                culpa quos odio quod recusandae ex, vitae corporis pariatur, ut accusamus iste aspernatur
                                qui! Tempore a commodi ad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card z-0">
                        <Link to='/service'>
                            <img src={servicCatagory} alt="" height="250px" className="card-img-top" />
                        </Link>
                        <div className="card-body">
                            <h3>Ceiling</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, non dolor perspiciatis
                                culpa quos odio quod recusandae ex, vitae corporis pariatur, ut accusamus iste aspernatur
                                qui! Tempore a commodi ad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card z-0">
                        <Link to='/service'>
                            <img src={servicCatagory} alt="" height="250px" className="card-img-top" />
                        </Link>
                        <div className="card-body">
                            <h3>Gypsum Board Partition</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, non dolor perspiciatis
                                culpa quos odio quod recusandae ex, vitae corporis pariatur, ut accusamus iste aspernatur
                                qui! Tempore a commodi ad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card z-0">
                        <Link to='/service'>
                            <img src={servicCatagory} alt="" height="250px" className="card-img-top" />
                        </Link>
                        <div className="card-body">
                            <h3>Mezzanine Floor</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, non dolor perspiciatis
                                culpa quos odio quod recusandae ex, vitae corporis pariatur, ut accusamus iste aspernatur
                                qui! Tempore a commodi ad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card z-0">
                        <Link to='/service'>
                            <img src={servicCatagory} alt="" height="250px" className="card-img-top" />
                        </Link>
                        <div className="card-body">
                            <h3>Pain't</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, non dolor perspiciatis
                                culpa quos odio quod recusandae ex, vitae corporis pariatur, ut accusamus iste aspernatur
                                qui! Tempore a commodi ad.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card z-0">
                        <Link to='/service'>
                            <img src={servicCatagory} alt="" height="250px" className="card-img-top" />
                        </Link>
                        <div className="card-body">
                            <h3>Iron Ladder</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, non dolor perspiciatis
                                culpa quos odio quod recusandae ex, vitae corporis pariatur, ut accusamus iste aspernatur
                                qui! Tempore a commodi ad.
                            </p>
                        </div>
                    </div>
                </div>


            </div>




            
        </section>




    );

}
export default Services;