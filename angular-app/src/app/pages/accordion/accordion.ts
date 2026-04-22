import { Component, signal } from '@angular/core';
import { XDS_DIRECTIVES } from '@xvia/design-system/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.html',
  imports: [XDS_DIRECTIVES],
})
export class AccordionComponent {
  openIndex = signal<number | null>(0);

  toggle(i: number) {
    this.openIndex.set(this.openIndex() === i ? null : i);
  }

  isOpen(i: number): boolean {
    return this.openIndex() === i;
  }

  panels = [
    { title: 'Painel 1 — Informações pessoais', content: 'Nome, CPF, data de nascimento e dados de contato.' },
    { title: 'Painel 2 — Endereço',             content: 'Logradouro, número, complemento, bairro, cidade e CEP.' },
    { title: 'Painel 3 — Documentação',          content: 'RG, CNH ou outro documento de identificação aceito.' },
  ];
}
