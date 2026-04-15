import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaginationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('controlledPagination') controlledPagination?: ElementRef;

  page = signal(2);

  private onChange = (event: Event) => {
    const detail = (event as CustomEvent<{ page: number; previousPage: number }>).detail;
    this.page.set(detail.page);
  };

  ngAfterViewInit() {
    this.controlledPagination?.nativeElement?.addEventListener('xds-pagination-changed', this.onChange);
  }

  ngOnDestroy() {
    this.controlledPagination?.nativeElement?.removeEventListener('xds-pagination-changed', this.onChange);
  }
}
