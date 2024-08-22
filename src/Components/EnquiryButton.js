// src/components/EnquiryButton.js
import React, { useState } from "react";
import ModalPopup from "./ModalPopup";

function EnquiryButton({ classname, productid, productname }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <button className={classname} onClick={handleShowModal}>
        Enquiry Now
      </button>

      <ModalPopup
        show={showModal}
        onHide={handleCloseModal}
        onSubmit={handleCloseModal}
        productid={productid}
        productname = {productname}
      />
    </div>
  );
}

export default EnquiryButton;
