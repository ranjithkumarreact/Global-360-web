// src/components/ModalPopup.js
import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalPopup({ show, onHide, onSubmit, productid, productname }) {
  return (
    <Modal show={show} onHide={onHide} centered className="enquiry_product_model_popup">
      <form action="javascript:void(0);">
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Product Name : {productname}</p>
          <div>
            <div className="mb-3">
              <label>School Name <sup className="mandatory_symbol">*</sup></label>
              <input
                type="text"
                placeholder="Enter School Name"
                className="form-label"
                style={{ width: "100%" }}
              />
            </div>
            <div className="mb-3">
              <label>Contact Person Name <sup className="mandatory_symbol">*</sup></label>
              <input
                type="text"
                placeholder="Enter Contact Person Name"
                className="form-label"
                style={{ width: "100%" }}
              />
            </div>
            <div className="mb-3">
              <label>Designation <sup className="mandatory_symbol">*</sup></label>
              <input
                type="text"
                placeholder="Enter Designation"
                className="form-label"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn_2" onClick={onHide}>
            Close
          </button>
          <button className="btn_1" onClick={onSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalPopup;
