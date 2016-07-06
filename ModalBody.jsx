import React, { PropTypes } from 'react';

const ModalBody = (props, context) => {

  const { children } = props;

  return (
    <div className='modal-body'>

      { children }

    </div>
  )
}

export default ModalBody;
