import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faUser,
  faXmark,
  faBars,
  faRightToBracket,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/new-images/global-360-logo-.png";
import { Link } from "react-router-dom";
import { apiurl } from "../../Constants";
import axios from "axios";

function Header() {
  const [menuitem, setMenuitem] = useState();

  useEffect(() => {
    const fetchMenuitem = async () => {
      await axios
        .post(apiurl + "menucategories")
        .then((res) => {
          setMenuitem(res.data.records);
        })
        .catch((err) => {
          console.log(`The Error is ${err}`);
        });
    };
    fetchMenuitem();
  }, []);

  const [stickyclassName, setStickyclassName] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.getElementById("sidebar").style.opacity = "unset";
    document.getElementById("sidebar").style.left = "0";
  };
  const toggleclosebar = () => {
    document.getElementById("sidebar").style.opacity = "0";
    document.getElementById("sidebar").style.left = "-100%";
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 130
        ? setStickyclassName("sticky-nav")
        : setStickyclassName("");
    }
  };

  return (
    <div>
      <header className="ecommerce-header">
        <div className="top-header border-0 d-none d-lg-block py-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 sm-mx-none">
                <ul>
                  <li className="d-flex ms-auto align-items-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;&nbsp;{" "}
                    <a
                      href="javascript:void(0);"
                      style={{ textTransform: "lowercase" }}
                    >
                      global360educare@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8 d-flex">
                <ul className="top-links d-flex ms-auto align-items-center">
                  <li className="profile-menu">
                    <Link to="/my-account" className="has-dropdown">
                      <FontAwesomeIcon icon={faUser} className="mx-2" />
                      Account
                    </Link>
                    <ul className="dropdown">
                      <li style={{ borderTop: "1px solid #fff" }}>
                        <Link to="/login">
                          {" "}
                          <FontAwesomeIcon
                            icon={faRightToBracket}
                            style={{ marginRight: "10px" }}
                          />{" "}
                          Login
                        </Link>
                      </li>
                      <li style={{ borderTop: "1px solid #fff" }}>
                        <Link to="/register">
                          <FontAwesomeIcon
                            icon={faPencil}
                            style={{ marginRight: "10px" }}
                          />
                          Register
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`middle-header d-none d-lg-block ${stickyclassName} `}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="h-100 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img
                      className="nav-logo"
                      src={Logo}
                      alt="Image not found !"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="product-search-one flex-grow-1">
                  <form
                    className="form-inline search-line-shape head-search"
                    action="#"
                    method="post"
                  >
                    <input
                      type="text"
                      className="form-control search-field"
                      name="search"
                      placeholder="Search ..."
                    />
                    <button
                      type="submit"
                      name="submit"
                      className="search-submit"
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="margin-right-1 h-100 d-flex align-items-center justify-content-end">
                  <div className="wishlist-view head-wishlist sticky-user">
                    {/* <ul>
                      <li className="profile-menu text-decoration-none">
                        <Link to="/my-account" className="has-dropdown">
                          <FontAwesomeIcon icon={faUser} className="mx-2" />
                        </Link>
                        <ul className="dropdown">
                          <li style={{ borderTop: "1px solid #fff" }}>
                            <Link to="/login">
                              {" "}
                              <FontAwesomeIcon
                                icon={faRightToBracket}
                                style={{ marginRight: "10px" }}
                              />{" "}
                              Login
                            </Link>
                          </li>
                          <li style={{ borderTop: "1px solid #fff" }}>
                            <Link to="/register">
                              <FontAwesomeIcon
                                icon={faPencil}
                                style={{ marginRight: "10px" }}
                              />
                              Register
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav py-3 d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-lg nav-dark nav-primary-hover nav-line-active">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="navbar-toggler-icon flaticon-menu-2 flat-small text-dark"></i>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/">
                          Home
                        </Link>
                      </li>
                      {menuitem !== undefined &&
                        menuitem.length > 0 &&
                        menuitem.map((item) => {
                          return (
                            <>
                              <li className="nav-item dropdown">
                                <Link
                                  className="nav-link"
                                  to={`/category_list/${item.pro_category_id}`}
                                >
                                  {item.category_name}
                                </Link>
                              </li>
                            </>
                          );
                        })}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-sticky bg-white py-10 mobile-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="d-flex align-items-center h-100 md-py-10">
                <Link className="navbar-brand" to="/">
                  <img
                    className="nav-logo"
                    src={Logo}
                    alt="Image not found !"
                  />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="nav-leftpush-overlay">
                <nav
                  className="navbar navbar-expand-lg nav-general nav-primary-hover"
                  style={{ justifyContent: "end" }}
                >
                  <button
                    type="button"
                    className="push-nav-toggle d-lg-none border-0 toogle-btn"
                    onClick={toggleSidebar}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                  <div
                    id="sidebar"
                    className={`navbar-slide-push transation-this ${
                      isSidebarOpen ? "open" : ""
                    }`}
                  >
                    <div className="login-signup  d-flex justify-content-between py-10 px-20 align-items-center">
                      <span>
                        <img src={Logo} alt="logo" />
                      </span>
                      <div
                        className="slide-nav-close"
                        onClick={toggleclosebar}
                        style={{ display: "inline-block" }}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </div>
                    </div>
                    <div className="menu-and-category">
                      <div
                        className="tab-content"
                        id="menu-and-categoryContent"
                      >
                        <div
                          className="tab-pane fade show active woocommerce-Tabs-panel woocommerce-Tabs-panel--description"
                          id="pills-push-menu"
                          role="tabpanel"
                          aria-labelledby="pills-push-menu-tab"
                        >
                          <div className="push-navbar">
                            <ul className="navbar-nav">
                              <li onClick={toggleclosebar} className="nav-item">
                                <Link className="nav-link" to="/">
                                  Home
                                </Link>
                              </li>

                              {menuitem !== undefined &&
                                menuitem.length > 0 &&
                                menuitem.map((item) => {
                                  return (
                                    <li
                                      onClick={toggleclosebar}
                                      className="nav-item"
                                    >
                                      <Link
                                        className="nav-link"
                                        to={`/category_list/${item.pro_category_id}`}
                                      >
                                        {item.category_name}
                                      </Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-12">
              <div className="product-search-one mobile-header-search">
                <form
                  className="form-inline search-pill-shape"
                  action="#"
                  method="post"
                >
                  <input
                    type="text"
                    className="form-control search-field"
                    name="search"
                    placeholder="Search ..."
                  />

                  <button type="submit" name="submit" className="search-submit">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faMagnifyingGlass}
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
