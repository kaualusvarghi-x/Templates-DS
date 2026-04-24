import { Component, signal } from '@angular/core';
import { XDS_DIRECTIVES } from '@xvia/ds-types/angular';

@Component({
  selector: 'app-select',
  templateUrl: './select.html',
  imports: [XDS_DIRECTIVES],
})
export class SelectComponent {
  value = signal('');

  onChange(e: Event) {
    this.value.set((e as CustomEvent).detail ?? (e.target as HTMLSelectElement).value);
  }
}
