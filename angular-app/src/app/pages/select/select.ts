import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelectComponent {
  value = signal('');

  onChange(e: Event) {
    this.value.set((e as CustomEvent).detail ?? (e.target as HTMLSelectElement).value);
  }
}
