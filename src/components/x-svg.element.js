/* global HTMLElement, XMLHttpRequest, CustomEvent */

export class XSvgElement extends HTMLElement {
  static get observedAttributes () { return ['src']; }

  constructor () {
    super();
    this._init();
  }

  _init () {
    this._loading = null;
    this.style.display = 'block';
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'src') {
      this._srcAttrChangedCallback(newValue, oldValue);
    }
  }

  _srcAttrChangedCallback (newValue, oldValue) {
    if (this._loading) {
      this._loading.abort();
      this._loading = null;
      this.innerHTML = '';
    }
    if (!newValue) {
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('GET', newValue);
    xhr.addEventListener('load', () => {
      this._loading = null;
      this._onSvgLoadSuccess(xhr);
    });
    xhr.addEventListener('error', () => {
      this._loading = null;
      this._onSvgLoadError(xhr);
    });
    this._loading = {
      xhr,
      abort: () => { xhr.abort(); }
    };
    xhr.send(null);
  }

  _onSvgLoadSuccess (xhr) {
    this.innerHTML = xhr.responseText;
    const svg = this.querySelector('svg');
    if (svg) {
      svg.style.width = '100%';
      svg.style.height = '100%';
    }
    this.dispatchEvent(new CustomEvent('load', {
      bubbles: true,
      cancelable: false
    }));
  }

  _onSvgLoadError () {
    this.innerHTML = '';
    this.dispatchEvent(new CustomEvent('error', {
      bubbles: true,
      cancelable: false
    }));
  }
}
