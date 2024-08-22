import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Mainimg from "../../assets/new-images/student-need-popular-img/main-imge.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import EnquiryButton from "../EnquiryButton";
import { apiurl } from "../../Constants";

const Categorylists = () => {
  const params = useParams();
  const categoryid = params.id;

  const [allProducts, setAllProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          "http://localhost/global_backend/Apidata/product_list",
          {
            category_id: categoryid,
            limit: 6,
          }
        );
        const products = response.data.records;
        setAllProducts(products);

        // Assuming your API returns product objects with properties that can determine trending/latest
        setTrendingProducts(products); // Replace with actual logic
        setLatestProducts(products); // Replace with actual logic
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [categoryid]);

  return (
    <div className="full-row bg-white pt-80 pb-40 categories_list">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 px-2 col-lg-4 md-mb-30 mx-auto categorie-product">
            <div className="item">
              <div className="product type-product">
                <div className="product-wrapper">
                  <div className="product-image">
                    <a
                      href="javascript:void(0)"
                      className="text-center category-banner"
                    >
                      <img src={Mainimg} alt="Product Image" />
                    </a>
                  </div>
                  <div className="product-info category-product-info">
                    <h3 className="product-title">
                      <a href="javascript:void(0)">Sports Shoes</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 right_col">
            <Tabs>
              <TabList style={{ border: "0" }}>
                <h5>Category Name</h5>
                <div className="d-flex" style={{ justifyContent: "end" }}>
                  <Tab style={{ border: "0" }}>All</Tab>
                  <Tab style={{ border: "0" }}>Trending Products</Tab>
                  <Tab style={{ border: "0" }}>Latest Products</Tab>
                </div>
              </TabList>

              <TabPanel>
                <div className="products product-style-1 category_list">
                  <div className="row show-hover-area e-title-secondary e-bg-white e-hover-image-zoom icon-hover-primary e-bg-light">
                    {allProducts.length > 0 ? (
                      allProducts.map((item, index) => (
                        <div className="col-lg-4 grid_col" key={index}>
                          <div className="product type-product">
                            <div className="product-wrapper">
                              <Link to={`/product_details/${item.product_id}`}>
                                <div className="product-image">
                                  <img src={item.image} alt="Product Image" />
                                </div>
                                <div className="product-info product_heading">
                                  <h3 className="product-title text-center">
                                    {item.product_name}
                                  </h3>
                                </div>
                              </Link>
                              <div className="enquiry-btn all-kit-enquiry">
                                <EnquiryButton
                                  classname="btn_3"
                                  productid={item.product_id}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No products found.</p>
                    )}
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="products product-style-1 category_list">
                  <div className="row show-hover-area e-title-secondary e-bg-white e-hover-image-zoom icon-hover-primary e-bg-light">
                    {trendingProducts.length > 0 ? (
                      trendingProducts.map((item, index) => (
                        <div className="col-lg-4 grid_col" key={index}>
                          <div className="product type-product">
                            <div className="product-wrapper">
                              <Link to={`/product_details/${item.product_id}`}>
                                <div className="product-image">
                                  <img src={item.image} alt="Product Image" />
                                </div>
                                <div className="product-info product_heading">
                                  <h3 className="product-title text-center">
                                    {item.product_name}
                                  </h3>
                                </div>
                              </Link>
                              <div className="enquiry-btn all-kit-enquiry">
                                <EnquiryButton
                                  classname="btn_3"
                                  productid={item.product_id}
                                  productname = {item.product_name}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No trending products found.</p>
                    )}
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="products product-style-1 category_list">
                  <div className="row show-hover-area e-title-secondary e-bg-white e-hover-image-zoom icon-hover-primary e-bg-light">
                    {latestProducts.length > 0 ? (
                      latestProducts.map((item, index) => (
                        <div className="col-lg-4 grid_col" key={index}>
                          <div className="product type-product">
                            <div className="product-wrapper">
                              <Link to={`/product_details/${item.product_id}`}>
                                <div className="product-image">
                                  <img src={item.image} alt="Product Image" />
                                </div>
                                <div className="product-info product_heading">
                                  <h3 className="product-title text-center">
                                    {item.product_name}
                                  </h3>
                                </div>
                              </Link>
                              <div className="enquiry-btn all-kit-enquiry">
                                <EnquiryButton
                                  classname="btn_3"
                                  productid={item.product_id}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No latest products found.</p>
                    )}
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorylists;
