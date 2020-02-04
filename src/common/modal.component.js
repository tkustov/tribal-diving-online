import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.container = document.createElement('div');
  }

  componentDidMount () {
    modalRoot.appendChild(this.container);
  }

  componentWillUnmount () {
    modalRoot.removeChild(this.container);
  }

  render () {
    return createPortal(
      this.props.children,
      this.container
    );
  }
}
