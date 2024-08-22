import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faPenClip,
  faKey,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProfileImage from "../../assets/new-images/profile_images.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Account = () => {
  return (
    <section className="account-page-section pt-40 pb-40">
      <div className="container">
        <Tabs>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 left_col">
              <div className="inner-box">
                <TabList>
                  <li>
                    <div className="user-profile">
                      <span className="user_profile_img">
                        <img src={ProfileImage} alt="" />
                      </span>
                      <span className="user-profile-1">
                        <h6>User 1</h6>
                        <span>user1@gmail.com</span>
                      </span>
                    </div>
                  </li>
                  <Tab>
                    <FontAwesomeIcon icon={faSliders} /> Overview
                  </Tab>

                  <Tab>
                    <FontAwesomeIcon icon={faKey} /> Change Password
                  </Tab>
                  <li>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    Logout
                  </li>
                </TabList>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 right_col">
              <div className="inner_box">
                <TabPanel>
                  <h4>Hello USer1 !</h4>
                  <p>
                    From your account dashboard. you can easily check & Enquiry
                    your Products and edit your password and account details.
                  </p>
                </TabPanel>

                <TabPanel>
                  <h4>Change Password</h4>
                  <div className="form_inner_box change_password mt-3">
                    <form action="javascript:void(0);">
                      <div className="mb-3">
                        <label>
                          Current password{" "}
                          <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input type="password" placeholder="Current password" />
                      </div>
                      <div className="mb-3">
                        <label>
                          New password <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input type="password" placeholder="New password" />
                      </div>
                      <div className="mb-3">
                        <label>
                          {" "}
                          Password Confirmation{" "}
                          <sup className="mandatory_symbol">*</sup>
                        </label>
                        <input
                          type="password"
                          placeholder="Password Confirmation"
                        />
                      </div>
                      <div>
                        <button className="btn_1">Change Password</button>
                      </div>
                    </form>
                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Account;
