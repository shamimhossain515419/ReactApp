import "./Admin.css";
import React, { useState } from "react";
import home_banner from "../../Assets/Images/banner.jpg";
import about_banner from "../../Assets/Images/banner2.jpeg";
import contact_banner from "../../Assets/Images/contact_banner.jpeg";
import items from "../../Assets/Images/electric1.jpeg";
import { Link } from "react-router-dom";
import useServer from "../../hooks/useServer";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import AdminDashboard from '../../components/Admin/AdminDashboard/AdminDashboard.jsx'

const Admin = () => {
  const { serverRequest } = useServer();

  // load banner data
  const { data: bannersData = {}, refetch } = useQuery({
    queryKey: ["bannersDate", serverRequest],
    queryFn: async () => {
      const res = await serverRequest.get("/banners");
      return res.data[0];
    },
  });

  // file upload and get  url
  const [url, setUrl] = useState(null);

  const handelFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=ff805abbbc2abf76b4e55392990e9755",
        {
          method: "POST",
          body: formData,
        }
      );
      const responseData = await response.json();
      if (responseData.data) {
        setUrl(responseData.data.url);
      } else {
        console.log("Image upload failed. Please try again later.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // save banner image
  const saveBannerImage = (bannerOf) => {
    const data = bannersData;
    data[bannerOf] = url;
    serverRequest.put(`/save-banner/${data._id}`, data).then(({ data }) => {
      if (data.modifiedCount) {
        toast.success("Save Sucessfully!");
        setUrl(null);
        refetch();
      } else {
        toast.error("Something went wrong!");
      }
    });
  };


  return (
    <div className="mt-4">
      <ul
        className="nav nav-pills justify-content-lg-center"
        id="myTab"
        role="tablist"
      >
        <Link to="/">
          <li className="nav-item">
            <button
              className="nav-link"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#Home"
            >
              Home
            </button>
          </li>
        </Link>
        <li className="nav-item">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#Home"
          >
            Banner
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link "
            id="admin-tab"
            data-bs-toggle="tab"
            data-bs-target="#admin"
          >
            admin
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#About"
          >
            About
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#Service"
          >
            Service
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#Contact"
          >
            Contact
          </button>
        </li>
      </ul>


      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="Home">
          {/* <!--------------- Home -------------------> */}
          <div className="container">
            <div className="my-3">
              <label htmlFor="" className="form-label">
                Select Banner *
              </label>
              <div className="input-group mb-3">
                <input
                  onChange={handelFile}
                  type="file"
                  className="form-control"
                />
                <button
                  className="input-group-text btn btn-primary"
                  onClick={() => saveBannerImage("main-banner")}
                  disabled={!url}
                >
                  Save
                </button>
              </div>

              <div>
                <img src={bannersData["main-banner"]} className="w-100 banner" alt="" />
              </div>
            </div>
          </div>
        </div>




        <div className="tab-pane fade" id="About">
          {/* ---------------About----------------- */}
          <div className="col-10 col-lg-6 mx-auto">
            <label htmlFor="" className="form-label">
              {" "}
              Select About Banner *{" "}
            </label>
            <div className="input-group mb-3">
              <input
                type="file"
                onChange={handelFile}
                className="form-control"
              />
              <button
                className="input-group-text btn btn-primary"
                onClick={() => saveBannerImage("about-banner")}
                disabled={!url}
              >
                Save
              </button>
            </div>

            <div>
              <img src={bannersData["about-banner"]} className=" banner" alt="" />
            </div>

            <hr className="my-5"></hr>

            <div className="d-lg-flex gap-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Enter About Items Title*
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col">
                <label htmlFor="" className="form-label">
                  Select About Items Image*
                </label>
                <input type="file" className="form-control" />
              </div>
            </div>
            <button className="input-group-text btn btn-primary my-3 w-100">
              Save
            </button>

            <div className="my-3 border table__DIV overflow-x-scroll ">
              <table className="table table-bordered text-center">
                <tr>
                  <th>Items Title</th>
                  <th>Image</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>Title</td>
                  <td>
                    <img src={items} className="item" alt="" />
                  </td>
                  <td>
                    <i className="fa-solid fa-pen-to-square fs-1 text-info"></i>
                    <i className="fa-solid fa-trash fs-1 text-danger"></i>
                  </td>
                </tr>

                <tr>
                  <td>Title</td>
                  <td>
                    <img src={items} className="item" alt="" />
                  </td>
                  <td>
                    <i className="fa-solid fa-pen-to-square fs-1 text-info"></i>
                    <i className="fa-solid fa-trash fs-1 text-danger"></i>
                  </td>
                </tr>

                <tr>
                  <td>Title</td>
                  <td>
                    <img src={items} className="item" alt="" />
                  </td>
                  <td>
                    <i className="fa-solid fa-pen-to-square fs-1 text-info"></i>
                    <i className="fa-solid fa-trash fs-1 text-danger"></i>
                  </td>
                </tr>

                <tr>
                  <td>Title</td>
                  <td>
                    <img src={items} className="item" alt="" />
                  </td>
                  <td>
                    <i className="fa-solid fa-pen-to-square fs-1 text-info"></i>
                    <i className="fa-solid fa-trash fs-1 text-danger"></i>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>


        <div className="tab-pane fade" id="Service">
          <div className="col-10 mx-auto my-5">
            {/* Service Catagory */}
            <div>
              <div className="d-lg-flex gap-3">
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Enter Service Catagory Title*
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Enter Service Catagory Description*
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Select Service Catagory Image*
                  </label>
                  <input type="file" className="form-control" />
                </div>
              </div>
              <button className="input-group-text w-100 btn btn-primary my-3">
                Save
              </button>

              <div className="my-3 border overflow-x-scroll table__DIV">
                <table className="text-center table  table-responsive table-bordered">
                  <tr>
                    <th>Title </th>
                    <th>Description </th>
                    <th>Image </th>
                    <th>Status </th>
                  </tr>
                  <tr>
                    <td> Title </td>
                    <td> Description </td>
                    <td>
                      <img src={items} className=" item" alt="" />
                    </td>
                    <td>
                      <i className="fa-solid fa-pen-to-square fs-1 text-info"></i>
                      <i className="fa-solid fa-trash fs-1 text-danger"></i>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            {/* Service Image  */}

            <hr className="my-5"></hr>
            <div>
              <h1 className="my-3 border-bottom">*Service Images</h1>

              <div className="d-lg-flex gap-3">
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Service Catagory
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">Select Service Catagory*</option>
                    <option value="">Electric</option>
                    <option value="">Plumbing</option>
                    <option value="">Plumbing</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="" className="form-label">
                    Select Service Image*
                  </label>
                  <input type="file" className="form-control" />
                </div>
              </div>
              <button className="input-group-text btn w-100 btn-primary my-3">
                Save
              </button>

              <div className="my-3 border overflow-x-scroll table__DIV">
                <table className="text-center table  table-responsive table-bordered">
                  <tr>
                    <th>Catagory </th>
                    <th>Image </th>
                    <th>Status </th>
                  </tr>
                  <tr>
                    <td> Catagory </td>
                    <td>
                      <img src={items} className=" item" alt="" />
                    </td>
                    <td>
                      <i className="fa-solid fa-pen-to-square fs-1 text-info"></i>
                      <i className="fa-solid fa-trash fs-1 text-danger"></i>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="admin">
          {/*------------------ Contact--------------   */}
          <div className="container">
            <div className="my-3">
              <div>

                <div className=" mt-5">
                  <AdminDashboard></AdminDashboard>
                </div>

             </div>



            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="Contact">
          {/*------------------ Contact--------------   */}
          <div className="container">
            <div className="my-3">
              <label htmlFor="" className="form-label">
                Select Banner *
              </label>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  onChange={handelFile}
                />
                <button
                  className="input-group-text btn btn-primary"
                  onClick={() => saveBannerImage("contract-banner")}
                  disabled={!url}
                >
                  Save
                </button>
              </div>

              <div>
                <img src={bannersData["contract-banner"]} className="w-100 banner" alt="" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Admin;
