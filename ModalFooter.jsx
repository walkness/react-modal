import React, { PropTypes } from 'react';

import SubmitButton from '../Forms/SubmitButton';

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
  closeButtonTitle: PropTypes.string,
  submitButtonTitle: PropTypes.string,
  submitButtonEnabled: PropTypes.bool,
  submitButtonType: PropTypes.string,
  isSubmitting: PropTypes.bool,
  onSubmitClick: PropTypes.func,
  children: PropTypes.node,
};

ModalFooter.defaultProps = {
  closeButtonTitle: 'Close',
  submitButtonTitle: 'Submit',
  submitButtonEnabled: true,
  submitButtonType: 'submit',
  isSubmitting: false,
  onSubmitClick: () => {},
};

ModalFooter.contextTypes = {
  handleModalClose: PropTypes.func.isRequired,
};

export default ModalFooter;
