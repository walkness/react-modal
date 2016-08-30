import React, { PropTypes } from 'react';

const ModalHeader = (props, context) => {
  const { modalTitle, handleModalClose } = context;

  return (
    <div className='modal-header'>

      <button
        type='button'
        className='close'
        data-dismiss='modal'
        aria-label='Close'
        onClick={ handleModalClose }>

          <span aria-hidden='true'>&times;</span>

      </button>

      <h4 className='modal-title'>{ modalTitle }</h4>

      { props.children }

    </div>
  );
};

ModalHeader.contextTypes = {
  handleModalClose: PropTypes.func.isRequired,
  modalTitle: PropTypes.string,
};

export default ModalHeader;
