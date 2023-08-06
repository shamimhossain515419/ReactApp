import { useContext } from "react";
import { AuthContact } from "../../Provider/AuthProviders";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img from '../../../Assets/Images/Interiors.jpg'
import './AdminDashboard.css'
const AdminDashboard = () => {
     const { user } = useContext(AuthContact);

     return (
          <div>

               <h1 className="  text-center      fs-2 "> Welcome Your Dashboard  <span className=" text-primary  "> {user?.displayName}  </span> </h1>
               <div>
                    <h1 className="  fs-4 text-center mt-5  border-bottom-1 border-dark  "> Services  Management</h1>

               </div>


               <div className=" mt-5">
                    <div>
                         <Container>
                              <Row>
                                   <Col>
                                        <div>
                                       
                                        </div>
                                   </Col>
                                   <Col>  </Col>
                                   <Col>1 of 1</Col>
                                   <Col>1 of 1</Col>
                              </Row>
                         </Container>

                    </div>
               </div>
          </div>
     );
};

export default AdminDashboard;