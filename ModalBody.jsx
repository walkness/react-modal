import React, { PropTypes } from 'react';

const ModalBody = (props) => {
  const { children } = props;

  return (
    <div className='modal-body'>

      { children }

    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node,
};

export default ModalBody;
