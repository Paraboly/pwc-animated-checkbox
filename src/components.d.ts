/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PwcAnimatedCheckbox {
    /**
    * Set the base name for multiple usage
    */
    'baseName': string;
    /**
    * Set the checkbox's right side text property
    */
    'checkboxText': string;
    /**
    * Default checked value
    */
    'isChecked': boolean;
  }
}

declare global {


  interface HTMLPwcAnimatedCheckboxElement extends Components.PwcAnimatedCheckbox, HTMLStencilElement {}
  var HTMLPwcAnimatedCheckboxElement: {
    prototype: HTMLPwcAnimatedCheckboxElement;
    new (): HTMLPwcAnimatedCheckboxElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-animated-checkbox': HTMLPwcAnimatedCheckboxElement;
  }
}

declare namespace LocalJSX {
  interface PwcAnimatedCheckbox {
    /**
    * Set the base name for multiple usage
    */
    'baseName'?: string;
    /**
    * Set the checkbox's right side text property
    */
    'checkboxText'?: string;
    /**
    * Default checked value
    */
    'isChecked'?: boolean;
    /**
    * onChange method for checkbox event
    */
    'onCheckedEvent'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'pwc-animated-checkbox': PwcAnimatedCheckbox;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-animated-checkbox': LocalJSX.PwcAnimatedCheckbox & JSXBase.HTMLAttributes<HTMLPwcAnimatedCheckboxElement>;
    }
  }
}


