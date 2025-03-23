interface IonIconElement extends HTMLElement {
  name: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': Partial<IonIconElement>;
    }
  }
} 