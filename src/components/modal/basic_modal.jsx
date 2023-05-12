import React from "react";

import { Modal } from "antd";
import PropTypes from "prop-types";

export const BasicModal = ({
  isModalOpen,
  title = "",
  children,
  handleCancel,
}) => {
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={handleCancel}
        closable={true}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

BasicModal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleCancel: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
};
