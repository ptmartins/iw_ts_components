import * as styles from './Card.module.css';

export class Card {
    element: HTMLElement;
  
    constructor(title: string) {
      this.element = document.createElement('DIV');
      this.element.textContent = title;
      this.element.className = styles.card;
    }
  
    render() {
      return this.element;
    }
  }