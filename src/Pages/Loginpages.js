import React from "react";
import Breadcrump from "../breadcrump/Breadcrump";
import { Link } from "react-router-dom";
function Registerpage() {
  return (
    <div>
      <Breadcrump subname="Login" />
      <section className="pt-5 pb-5 login_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-10 right_col">
              <div className="inner-box">
                <div className="heading_box mb-3">
                  <h4>Login</h4>
                </div>
                <div>
                  <form action="javascript:void(0);">
                    <div>
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
                          Password <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter  Password"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <input type="checkbox" style={{ width: "auto" }} />
                            <label
                              style={{
                                fontSize: "12px",
                                width: "auto",
                                paddingLeft: "4px",
                              }}
                            >
                              Remeber me
                            </label>
                          </div>
                          <span style={{ fontSize: "12px" }}>
                            Forget Password ?
                          </span>
                        </div>
                      </div>
                      <div className="mb-3 text-center">
                        <button className="btn_1">Submit</button>
                      </div>
                    </div>
                  </form>
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
