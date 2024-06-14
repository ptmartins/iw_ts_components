import * as styles from './Button.module.css'; 

export class Button {
  element: HTMLButtonElement;

  constructor(label: string, type?: string) {
    this.element = document.createElement('button');
    this.element.textContent = label;

    if (type && styles[type]) {
      this.element.classList.add(styles.button, styles[type]);
    } else {
      this.element.classList.add(styles.button);
    }
  }

  render() {
    return this.element;
  }
}
