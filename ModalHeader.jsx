import React, { PropTypes } from 'react';


const ModalHeader = (props, context) => {
  const { modalTitle, handleModalClose } = context;

  return (
    <div className='modal-header'>

      <h4 className='modal-title'>{ modalTitle }</h4>

      <button
        type='button'
        className='close'
        data-dismiss='modal'
        aria-label='Close'
        onClick={handleModalClose}
      >

        <span aria-hidden='true'>&times;</span>

      </button>

      { props.children }

    </div>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node,
};

ModalHeader.defaultProps = {
  children: null,
};

ModalHeader.contextTypes = {
  handleModalClose: PropTypes.func.isRequired,
  modalTitle: PropTypes.string,
};

export default ModalHeader;
