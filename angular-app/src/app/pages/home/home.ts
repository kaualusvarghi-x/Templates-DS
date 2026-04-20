import { Component, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

const COMPONENTS = [
  { id: 'button', name: 'Button', tag: 'xds-button', count: '7 kinds · sizes · icon · loading', done: true },
  { id: 'icon', name: 'Icon', tag: 'xds-icon', count: 'catálogo · variantes · cores · animações', done: true },
  { id: 'icon-button', name: 'Icon Button', tag: 'xds-icon-button', count: 'kinds · sizes · tooltip', done: true },
  { id: 'text', name: 'Text', tag: 'xds-text', count: '11 variantes · weight · align', done: true },
  { id: 'divider', name: 'Divider', tag: 'xds-divider', count: 'horizontal · vertical · label', done: true },
  { id: 'tag', name: 'Tag', tag: 'xds-tag', count: '5 kinds · composição', done: true },
  { id: 'callout', name: 'Callout', tag: 'xds-callout', count: '5 kinds · conteúdo rico', done: true },
  { id: 'avatar', name: 'Avatar', tag: 'xds-avatar', count: '4 tamanhos · 3 cores · fallback', done: true },
  { id: 'breadcrumb', name: 'Breadcrumb', tag: 'xds-breadcrumb', count: 'níveis · current page · disabled · links', done: true },
  { id: 'tooltip', name: 'Tooltip', tag: 'xds-tooltip', count: 'posições · auto-align · delays', done: true },
  { id: 'input', name: 'Input', tag: 'xds-input', count: 'text · email · tamanhos · estados', done: true },
  { id: 'password-input', name: 'Password Input', tag: 'xds-password-input', count: 'toggle show/hide · tamanhos · estados', done: true },
  { id: 'select', name: 'Select', tag: 'xds-select', count: 'grupos · estados · ghost · skeleton', done: true },
  { id: 'checkbox', name: 'Checkbox', tag: 'xds-checkbox', count: 'simples · grupo · validação', done: true },
  { id: 'accordion', name: 'Accordion', tag: 'xds-accordion', count: 'exclusive · slot title · skeleton', done: true },
  { id: 'progress-bar', name: 'Progress Bar', tag: 'xds-progress-bar', count: 'variants · status · sizes', done: true },
  { id: 'pagination', name: 'Pagination', tag: 'xds-pagination', count: 'total-pages · total-items · evento', done: true },
  { id: 'toast', name: 'Toast + Toaster', tag: 'xds-toast / xds-toaster', count: 'stack · descrição · duração', done: true },
  { id: 'modal', name: 'Modal', tag: 'xds-modal', count: 'confirm/chat/tutorial · sizes', done: true },
  { id: 'external-link-guard', name: 'External Link Guard', tag: 'xds-external-link-guard', count: 'confirm modal para links externos', done: true },
  { id: 'search', name: 'Search', tag: 'xds-search', count: '5 variações · expandable · disabled · skeleton', done: true },
  { id: 'card', name: 'Card', tag: 'xds-card / xds-news-card / xds-quick-service-card / xds-service-card', count: 'base · news · quick service · service', done: true },
  { id: 'loading', name: 'Loading', tag: 'xds-loading', count: 'active · size · descrição · ícone · overlay', done: true },
];

type FilterDone = 'all' | 'done' | 'wip';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [NgClass],
})
export class HomeComponent {
  done = signal<FilterDone>('all');

  doneOptions: FilterDone[] = ['all', 'done', 'wip'];

  total = COMPONENTS.length;
  doneCount = COMPONENTS.filter((c) => c.done).length;

  visible = computed(() =>
    [...COMPONENTS
      .filter((c) => this.done() === 'all' || (this.done() === 'done' ? c.done : !c.done))]
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
  );

  progressWidth = computed(() => `${(this.doneCount / this.total) * 100}%`);

  constructor(private router: Router) {}

  navigate(id: string) {
    this.router.navigate([id]);
  }

  doneLabel(d: FilterDone): string {
    return d === 'all' ? 'Todos' : d === 'done' ? 'Implementados' : 'Em desenvolvimento';
  }
}
