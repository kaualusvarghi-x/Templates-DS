import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonComponent {
  loading = signal(false);

  toggleLoading() {
    this.loading.set(!this.loading());
  }
}
