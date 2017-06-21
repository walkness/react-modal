import React, { PropTypes } from 'react';

import SubmitButton from 'AppComponents/SubmitButton';


const ModalFooter = (props, context) => {
  const {
    closeButtonTitle,
    submitButtonTitle,
    submitButtonEnabled,
    submitButtonType,
    isSubmitting,
    children,
    onSubmitClick } = props;

  const { handleModalClose } = context;

  return (
    <div className='modal-footer'>

      <button
        type='button'
        className='btn btn-secondary'
        data-dismiss='modal'
        onClick={handleModalClose}
      >
        { closeButtonTitle }
      </button>

      <SubmitButton
        label={submitButtonTitle}
        enabled={submitButtonEnabled}
        isSubmitting={isSubmitting}
        onClick={onSubmitClick}
        type={submitButtonType}
      />

      { children }

    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  closeButtonTitle: PropTypes.string,
  isSubmitting: PropTypes.bool,
  onSubmitClick: PropTypes.func,
  submitButtonEnabled: PropTypes.bool,
  submitButtonTitle: PropTypes.string,
  submitButtonType: PropTypes.string,
};

ModalFooter.defaultProps = {
  children: null,
  closeButtonTitle: 'Close',
  isSubmitting: false,
  onSubmitClick: () => {},
  submitButtonEnabled: true,
  submitButtonTitle: 'Submit',
  submitButtonType: 'submit',
};

ModalFooter.contextTypes = {
  handleModalClose: PropTypes.func.isRequired,
};

export default ModalFooter;
