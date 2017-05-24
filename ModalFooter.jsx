import React, { PropTypes } from 'react';

import SubmitButton from 'Components/Forms/SubmitButton';

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
  closeButtonTitle: PropTypes.string,
  submitButtonTitle: PropTypes.string,
  submitButtonEnabled: PropTypes.bool,
  submitButtonVariant: PropTypes.oneOf([
    'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link',
  ]),
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
  submitButtonVariant: 'primary',
  isSubmitting: false,
  onSubmitClick: () => {},
};

ModalFooter.contextTypes = {
  handleModalClose: PropTypes.func.isRequired,
};

export default ModalFooter;
