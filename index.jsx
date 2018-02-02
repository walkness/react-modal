/* globals window */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import { autobind } from 'core-decorators';

import ModalHeader from './ModalHeader';

import './styles.scss';

export { default as ModalHeader } from './ModalHeader';
export { default as ModalBody } from './ModalBody';
export { default as ModalFooter } from './ModalFooter';


class Modal extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    display: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    id: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'sm', 'default']),
    title: PropTypes.node,
  };

  static defaultProps = {
    children: null,
    className: null,
    display: false,
    id: null,
    size: 'default',
    title: null,
  };

  static childContextTypes = {
    handleModalClose: PropTypes.func,
    modalTitle: PropTypes.node,
  };

  getChildContext() {
    return {
      handleModalClose: this.props.handleClose,
      modalTitle: this.props.title,
    };
  }

  componentDidMount() {
    if (this.props.display) {
      window.addEventListener('keydown', this.onKeyPress);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.display && nextProps.display) {
      window.addEventListener('keydown', this.onKeyPress);
    } else if (this.props.display && !nextProps.display) {
      window.removeEventListener('keydown', this.onKeyPress);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyPress);
  }

  @autobind
  onKeyPress(e) {
    if (e.keyCode === 27) {
      this.props.handleClose();
    }
  }

  render() {
    const { display, children, size, className } = this.props;

    const modalProps = {};
    if (this.props.id) modalProps.id = this.props.id;

    return (
      <ReactCSSTransitionGroup
        transitionName='modal'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >

        { display ?
          <div
            key='backdrop'
            className={classNames('modal-backdrop', 'fade', { show: display })}
            styleName='backdrop'
          />
        : null }

        { display ?
          <div
            className={classNames('modal', className, 'fade', { show: display })}
            styleName='modal'
            {...modalProps}
          >

            <div className={classNames('modal-dialog', { [`modal-${size}`]: size !== 'default' })}>
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
