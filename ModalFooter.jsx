import React, { PropTypes } from 'react';

import SubmitButton from 'AppComponents/SubmitButton';


const ModalFooter = (props, context) => {
  const {
    closeButtonTitle,
    submitButtonTitle,
    submitButtonEnabled,
    submitButtonType,
    submitButtonVariant,
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
        style={submitButtonVariant}
      />

      { children }

    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  closeButtonTitle: PropTypes.string,
<<<<<<< HEAD
  submitButtonTitle: PropTypes.string,
  submitButtonEnabled: PropTypes.bool,
  submitButtonVariant: PropTypes.oneOf([
    'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link',
  ]),
  submitButtonType: PropTypes.string,
=======
>>>>>>> temp
  isSubmitting: PropTypes.bool,
  onSubmitClick: PropTypes.func,
  submitButtonEnabled: PropTypes.bool,
  submitButtonTitle: PropTypes.string,
  submitButtonType: PropTypes.string,
};

ModalFooter.defaultProps = {
  children: null,
  closeButtonTitle: 'Close',
<<<<<<< HEAD
  submitButtonTitle: 'Submit',
  submitButtonEnabled: true,
  submitButtonType: 'submit',
  submitButtonVariant: 'primary',
=======
>>>>>>> temp
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
