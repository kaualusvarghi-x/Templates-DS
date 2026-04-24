import { Component, ElementRef, ViewChild } from '@angular/core';
import { XDS_DIRECTIVES } from '@xvia/ds-types/angular';

type ToastKind = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.html',
  imports: [XDS_DIRECTIVES],
})
export class ToastComponent {
  @ViewChild('successToast') successToast?: ElementRef;
  @ViewChild('errorToast') errorToast?: ElementRef;
  @ViewChild('warningToast') warningToast?: ElementRef;
  @ViewChild('infoToast') infoToast?: ElementRef;

  showSuccess() { this.successToast?.nativeElement?.show?.(); }
  showError() { this.errorToast?.nativeElement?.show?.(); }
  showWarning() { this.warningToast?.nativeElement?.show?.(); }
  showInfo() { this.infoToast?.nativeElement?.show?.(); }

  pushToToaster(kind: ToastKind, title: string, description?: string, duration = 4000) {
    const api = (window as Window & {
      XviaDS?: {
        toast?: {
          (message: string, options?: { kind?: ToastKind; description?: string; duration?: number }): void;
          success?: (message: string, options?: { description?: string; duration?: number }) => void;
          error?: (message: string, options?: { description?: string; duration?: number }) => void;
          warning?: (message: string, options?: { description?: string; duration?: number }) => void;
          info?: (message: string, options?: { description?: string; duration?: number }) => void;
        };
      };
    }).XviaDS?.toast;

    if (!api) {
      const toaster = document.querySelector('xds-toaster') as
        | (HTMLElement & {
            push?: (message: string, options?: { kind?: ToastKind; description?: string; duration?: number }) => void;
          })
        | null;

      if (toaster?.push) {
        toaster.push(title, { kind, description, duration });
        return;
      }

      console.warn('XviaDS.toast não está disponível e <xds-toaster> não foi encontrado.');
      return;
    }

    if (kind === 'success' && api.success) return api.success(title, { description, duration });
    if (kind === 'error' && api.error) return api.error(title, { description, duration });
    if (kind === 'warning' && api.warning) return api.warning(title, { description, duration });
    if (kind === 'info' && api.info) return api.info(title, { description, duration });

    api(title, { kind, description, duration });
  }
}
