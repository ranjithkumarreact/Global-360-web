import React from "react";
import Breadcrump from "../breadcrump/Breadcrump";
import { Link } from "react-router-dom";
function Registerpage() {
  return (
    <div>
      <Breadcrump subname="Register" />
      <section className="pt-5 pb-5 register_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-10 right_col">
              <div className="inner-box">
                <div className="heading_box mb-3">
                  <h4>Register</h4>
                </div>
                <div>
                  <form action="javascript:void(0);">
                    <div>
                      <div className="mb-3">
                        <label className="mb-2">
                          School Name <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter  School Name"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">
                          Email ID <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter  Email ID"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">
                          Mobile Number{" "}
                          <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter  Mobile Number"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">
                          Password <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter  Password"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="mb-3 text-center">
                        <button className="btn_1">Submit</button>
                      </div>
                    </div>
                  </form>
                  <p style={{ fontSize: "14px" }} className="text-center">
                    Already have an Account ?{" "}
                    <Link to="/login" style={{ color: "#0db1b3" }}>
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registerpage;
