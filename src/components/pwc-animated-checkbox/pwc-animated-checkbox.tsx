import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "pwc-animated-checkbox",
  styleUrl: "pwc-animated-checkbox.scss",
  shadow: true
})
export class PWCAnimatedCheckbox {
  checkboxInput: HTMLInputElement;

  /**
   * Set the checkbox's right side text property
   */
  @Prop() checkboxText: string = "Checkbox";

  /**
   * Default checked value
   */
  @Prop({ mutable: true, reflect: true }) isChecked: boolean = false;

  /**
   * onChange method for checkbox event
   */
  @Event({
    eventName: "checkedEvent",
    bubbles: true,
    composed: true,
    cancelable: true
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
              checked={this.isChecked}
              ref={el => (this.checkboxInput = el as HTMLInputElement)}
              onChange={() =>
                this.checkedChangeHandler(this.checkboxInput.checked)
              }
            />
            <label htmlFor="checkbox">
              <span></span>
            </label>
            <span class="content-text-style">{this.checkboxText}</span>
          </div>
        </form>
      </div>
    );
  }
}
