import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "pwc-animated-checkbox",
  styleUrl: "pwc-animated-checkbox.scss",
  shadow: true
})
export class MyComponent {
  checkboxInput: HTMLInputElement;

  @Prop() checkboxText: string = "Checkbox";
  /**
   * onChange method for checkbox event
   */
  @Event({
    eventName: "on-checked-change",
    composed: true,
    cancelable: true,
    bubbles: true
  })
  checkedChangeEmitter: EventEmitter;

  checkedChangeHandler(checked: boolean) {
    this.checkedChangeEmitter.emit(checked);
  }

  @Prop() baseName: string = "base";

  /**
   * Default checked value
   */
  @Prop({ mutable: true, reflect: true }) isChecked: boolean = false;

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
              onChange={() => {
                const { checked } = this.checkboxInput;
                console.log("Checked : ", checked);
                this.checkedChangeHandler(checked);
              }}
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
