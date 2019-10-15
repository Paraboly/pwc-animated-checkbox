import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "pwc-animated-checkbox",
  styleUrl: "pwc-animated-checkbox.scss",
  shadow: true
})
export class MyComponent {
  checkboxInput: HTMLInputElement;

  /**
   * Set the checkbox's right side text property
   */
  @Prop() checkboxText: string = "Checkbox";
  /**
   * Set the base name for multiple usage
   */
  @Prop() baseName: string = "base";

  /**
   * Default checked value
   */
  @Prop({ mutable: true, reflect: true }) isChecked: boolean = false;

  /**
   * onChange method for checkbox event
   */
  @Event({
    eventName: "checkedEvent",
    composed: true,
    cancelable: true,
    bubbles: true
  })
  checkedChangeEmitter: EventEmitter;

  /**
   *
   * @param checked
   */
  checkedChangeHandler(checked: boolean) {
    this.checkedChangeEmitter.emit({ checked });
  }

  render() {
    return (
      <div class="animated-checkbox">
        <form>
          <div class="flex-center-vertically">
            <input
              class="message"
              type="checkbox"
              ref={el => (this.checkboxInput = el as HTMLInputElement)}
              checked={this.isChecked}
              onChange={() =>
                this.checkedChangeHandler(this.checkboxInput.checked)
              }
            />
            <label htmlFor="read">
              <span></span>
            </label>
            <span class="content-text-style">{this.checkboxText}</span>
          </div>
        </form>
      </div>
    );
  }
}
