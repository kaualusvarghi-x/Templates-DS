import { Component, signal } from '@angular/core';
import { XDS_DIRECTIVES } from '@xvia/ds-types/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  imports: [XDS_DIRECTIVES],
})
export class ButtonComponent {
  loading = signal(false);

  toggleLoading() {
    this.loading.set(!this.loading());
  }
}
