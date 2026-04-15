import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName: `xds-${string}`]: any;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName: `xds-${string}`]: HTMLElement;
  }
}
