import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

import ModalHeader from './ModalHeader';

export { default as ModalHeader } from './ModalHeader';
export { default as ModalBody } from './ModalBody';
export { default as ModalFooter } from './ModalFooter';


class Modal extends Component {

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    handleClose: PropTypes.func.isRequired,
    display: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    display: false,
  };

  static childContextTypes = {
    handleModalClose: PropTypes.func,
    modalTitle: PropTypes.string,
  };

  getChildContext() {
    return {
      handleModalClose: this.props.handleClose,
      modalTitle: this.props.title,
    };
  }

  render() {
    const { display, children } = this.props;

    const modalProps = {};
    if (this.props.id) modalProps.id = this.props.id;

    return (
      <ReactCSSTransitionGroup
        transitionName='modal'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >

        { display ?
          <div className={classNames('modal', 'fade', { in: display })} {...modalProps}>

            <div className='modal-dialog'>
              <div className='modal-content'>

                <ModalHeader />

                { children }

              </div>
            </div>

          </div>
        : null }

      </ReactCSSTransitionGroup>
    );
  }
}

export default Modal;
