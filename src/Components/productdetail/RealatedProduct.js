import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EnquiryButton from "../EnquiryButton";
const RealatedProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const allkit = [
    {
      id: 1,
      img: require("../../assets/new-images/related-products/imge-1.png"),
      title: "Sports Jersey",
      sku: "0124",
      model: "Demo",
      name: "Sports Jersey",
    },
    {
      id: 2,
      img: require("../../assets/new-images/related-products/imge-2.png"),
      title: "Socks",
      sku: "0124",
      model: "Demo",
      name: "Socks",
    },
    {
      id: 3,
      img: require("../../assets/new-images/related-products/imge-3.png"),
      title: "Sports Kit Bags",
      sku: "0124",
      model: "Demo",
      name: "Sports Kit Bags",
    },
    {
      id: 4,
      img: require("../../assets/new-images/related-products/imge-4.png"),
      title: "Staff T-Shirt (Men)",
      sku: "0124",
      model: "Demo",
      name: "Staff T-Shirt (Men)",
    },
    {
      id: 5,
      img: require("../../assets/new-images/related-products/imge-5.png"),
      title: "Staff T-Shirt (Women)",
      sku: "0124",
      model: "Demo",
      name: "Staff T-Shirt (Women)",
    },
    {
      id: 6,
      img: require("../../assets/new-images/related-products/imge-6.png"),
      title: "Chess Board",
      sku: "0124",
      model: "Demo",
      name: "Chess Board",
    },
  ];

  return (
    <div className="bg-white pt-40 pb-80">
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <div className="section-head border-bottom d-flex justify-content-sm-between align-items-sm-end flex-column flex-sm-row">
              <div className="d-flex section-head-side-title xs-mb-10">
                <h4 className="text-dark mb-0">Related Products</h4>
              </div>
            </div>
          </div>
          <div className="col-12 my-4">
            <div className="woocommerce-tabs equipments wc-tabs-wrapper ps-0 mt-0">
              <div
                className="tab-content icon-hover-primary product-style-2"
                id="pills-tabContent-two"
              >
                <div
                  className="tab-pane fade show active woocommerce-Tabs-panel woocommerce-Tabs-panel--description"
                  id="pills-clothing-two"
                  role="tabpanel"
                  aria-labelledby="pills-clothing-two-tab"
                >
                  <div className="e-hover-shadow-one e-hover-wrapper-absolute e-bg-light">
                    <Slider className="row g-2" {...settings}>
                      {allkit.map((item) => (
                        <div className="item related-items" key={item.id}>
                          <div className="product type-product">
                            <div className="product-wrapper">
                              <div className="product-image">
                                <Link
                                  to={`/product_details/${item.id}`}
                                  className="woocommerce-LoopProduct-link text-center"
                                >
                                  <img src={item.img} alt={item.title} />
                                </Link>
                              </div>
                              <div className="product-info allkit-c">
                                <h3 className="product-title">
                                  <a href="javascript:void(0)">{item.title}</a>
                                </h3>
                              </div>
                              <div className="enquiry-btn all-kit-enquiry">
                                <EnquiryButton
                                  classname="btn_3"
                                  productid={item.product_id}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealatedProduct;
