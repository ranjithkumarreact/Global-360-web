import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const AdditionalIntro = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  // Toggle the active index to open or close the accordion item
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const accordionItems = [
    {
      title: "Website and Mobile App Design",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      title: "Motion Graphics and Animation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      title: "User Experience and Brand Strategy",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
  ];

  return (
    <div className="full-row pt-40 pb-40">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Tabs>
              <div className="section-head border-bottom addtionaliintro">
                <div className="woocommerce-tabs wc-tabs-wrapper ps-0">
                  <ul
                    className="nav nav-pills wc-tabs product-intro"
                    id="pills-tab-one"
                    role="tablist"
                  >
                    <TabList>
                      <Tab>
                        <a
                          className="nav-link active"
                          id="pills-description-one-tab"
                          data-bs-toggle="pill"
                          href="#pills-description-one"
                          role="tab"
                          aria-controls="pills-description-one"
                          aria-selected="true"
                        >
                          Description
                        </a>
                      </Tab>
                      <Tab>
                        <a
                          className="nav-link"
                          id="pills-information-one-tab"
                          data-bs-toggle="pill"
                          href="#pills-information-one"
                          role="tab"
                          aria-controls="pills-information-one"
                          aria-selected="true"
                        >
                          Additional Information
                        </a>
                      </Tab>
                    </TabList>
                  </ul>
                </div>
              </div>
              <div className="woocommerce-tabs wc-tabs-wrapper ps-0 mt-0">
                <div className="tab-content" id="pills-tabContent-one">
                  <TabPanel
                    className="tab-pane fade show active woocommerce-Tabs-panel woocommerce-Tabs-panel--description"
                    id="pills-description-one"
                    role="tabpanel"
                    aria-labelledby="pills-description-one-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6 product-intro-cont">
                        <h2 className="my-3">Product Description</h2>
                        <p>
                          Maecenas egestas quam et volutpat bibendum metus
                          vulputate platea eleifend sed Integer dictum ultricies
                          consectetuer nunc vivamus a. Eu mus justo magna
                          lacinia purus sodales scelerisque. Sociosqu pede
                          facilisi. Curae; lacinia id. Sociis pretium gravida
                          auctor mus amet accumsan adipiscing id dignissim,
                          potenti. Curae; massa ridiculus lobortis consectetuer
                          condimentum mollis vulputate hymenaeos tellus egestas
                          auctor dictumst imperdiet curae; quisque ut porta
                          molestie dui duis blandit molestie etiam enim erat
                          sociis lacinia litora phasellus sit. Ipsum Lacinia
                          className enim pharetra interdum potenti tellus
                          parturient. Potenti scelerisque erat facilisi mauris
                          tortor, mattis euismod augue nascetur rutrum augue
                          ipsum tortor cum Porta primis.
                        </p>
                      </div>
                      <div className="col-lg-6 product-intro-cont">
                        <h2 className="my-3">Payment & Shipment:</h2>
                        <div className="detailmodule_text">
                          <ul className="detail-desc-decorate-content">
                            <li>
                              1. We accept Alipay, Paypal, Western Union, TT.
                              All major credit cards are accepted through secure
                              payment processor ESCROW.
                            </li>
                            <li>
                              2. If you need faster shipping way, We recommend
                              the Aliexpress Standard Shipping .You also can
                              choose the DHL,Fedx.
                            </li>
                            <li>
                              3. All the items will be dispatched within 2
                              business days, to USA、France、United Kingdom need
                              1-5 weeks ,Canada, Australia Russia and need
                              around 2 to 5 weeks.{" "}
                            </li>
                            <li>
                              4. Also ,the delay or failure delivery is
                              sometimes caused by the policy of different
                              customs, for example ,the laser pointer is
                              unacceptable in some countries.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="detailmodule_text mt-30">
                          <h2 className="my-3">About FAQ:</h2>
                          <div className="bb-accordion ac-single-show accordion-plus-left">
                            {accordionItems.map((item, index) => (
                              <div className="ac-card" key={index}>
                                <a
                                  className={`ac-toggle d-block py-2 text-secondary font-medium higlight-font ${activeIndex === index ? "active" : ""}`}
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    toggleAccordion(index);
                                  }}
                                >
                                  {item.title}
                                </a>
                                <div
                                  className={`ac-collapse ${activeIndex === index ? "show" : ""}`}
                                >
                                  <p>{item.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel
                    className="tab-pane fade"
                    id="pills-information-one"
                    role="tabpanel"
                    aria-labelledby="pills-information-one-tab"
                  >
                    <div className="row">
                      <div className="col-8">
                        <h2 className="my-3">Additional Information</h2>
                        <table className="woocommerce-product-attributes shop_attributes">
                          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
                            <th className="woocommerce-product-attributes-item__label">
                              Weight :
                            </th>
                            <td className="woocommerce-product-attributes-item__value">
                              <p>150 g</p>
                            </td>
                          </tr>
                          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
                            <th className="woocommerce-product-attributes-item__label">
                              Dimensions :
                            </th>
                            <td className="woocommerce-product-attributes-item__value">
                              <p>16 × 10 × 20 cm</p>
                            </td>
                          </tr>
                          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
                            <th className="woocommerce-product-attributes-item__label">
                              Item Height :
                            </th>
                            <td className="woocommerce-product-attributes-item__value">
                              <p>18 Millimeters</p>
                            </td>
                          </tr>
                          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
                            <th className="woocommerce-product-attributes-item__label">
                              Item model number :
                            </th>
                            <td className="woocommerce-product-attributes-item__value">
                              <p>MF841HN/A</p>
                            </td>
                          </tr>
                          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
                            <th className="woocommerce-product-attributes-item__label">
                              Fabric Type :
                            </th>
                            <td className="woocommerce-product-attributes-item__value">
                              <p>100% Polyester</p>
                            </td>
                          </tr>
                          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
                            <th className="woocommerce-product-attributes-item__label">
                              Fabric Technology :
                            </th>
                            <td className="woocommerce-product-attributes-item__value">
                              <p>Moisture-Wicking, Quick-Dry</p>
                            </td>
                          </tr>
                          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
                            <th className="woocommerce-product-attributes-item__label">
                              Fit :
                            </th>
                            <td className="woocommerce-product-attributes-item__value">
                              <p>Athletic Fit</p>
                            </td>
                          </tr>
                          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
                            <th className="woocommerce-product-attributes-item__label">
                              Sizes Available :
                            </th>
                            <td className="woocommerce-product-attributes-item__value">
                              <p>XS, S, M, L, XL, XXL </p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalIntro;
