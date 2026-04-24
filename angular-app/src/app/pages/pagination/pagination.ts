import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';
import { XDS_DIRECTIVES } from '@xvia/ds-types/angular';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
  imports: [XDS_DIRECTIVES],
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
