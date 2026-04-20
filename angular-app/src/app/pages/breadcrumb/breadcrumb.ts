import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnDestroy, PLATFORM_ID, ViewChild, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type BreadcrumbClickDetail = {
  href?: string;
  text?: string;
};

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BreadcrumbComponent implements AfterViewInit, OnDestroy {
  @ViewChild('rootRef') rootRef?: ElementRef<HTMLElement>;
  lastClick = signal('Nenhum clique ainda');

  private platformId = inject(PLATFORM_ID);
  private removeListener?: () => void;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const root = this.rootRef?.nativeElement;
    if (!root) return;

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<BreadcrumbClickDetail>).detail ?? {};
      const href = detail.href ?? 'sem href';
      const text = detail.text ?? 'item';
      this.lastClick.set(`${text} (${href})`);
    };

    root.addEventListener('xds-breadcrumb-item-click', handler as EventListener);
    this.removeListener = () => root.removeEventListener('xds-breadcrumb-item-click', handler as EventListener);
  }

  ngOnDestroy(): void {
    this.removeListener?.();
  }
}
