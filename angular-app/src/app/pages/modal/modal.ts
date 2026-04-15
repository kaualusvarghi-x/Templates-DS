import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';

type XdsModalEl = HTMLElement & { open: boolean };

@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalComponent {
  @ViewChild('confirmModal') confirmModal?: ElementRef<XdsModalEl>;
  @ViewChild('dangerModal')  dangerModal?:  ElementRef<XdsModalEl>;
  @ViewChild('successModal') successModal?: ElementRef<XdsModalEl>;
  @ViewChild('sizeXsModal')  sizeXsModal?:  ElementRef<XdsModalEl>;
  @ViewChild('sizeSmModal')  sizeSmModal?:  ElementRef<XdsModalEl>;
  @ViewChild('sizeMdModal')  sizeMdModal?:  ElementRef<XdsModalEl>;
  @ViewChild('sizeLgModal')  sizeLgModal?:  ElementRef<XdsModalEl>;
  @ViewChild('labelModal')   labelModal?:   ElementRef<XdsModalEl>;
  @ViewChild('scrollModal')  scrollModal?:  ElementRef<XdsModalEl>;
  @ViewChild('noFooterModal') noFooterModal?: ElementRef<XdsModalEl>;

  private openModal(ref?: ElementRef<XdsModalEl>) {
    if (ref?.nativeElement) ref.nativeElement.open = true;
  }

  openConfirm()  { this.openModal(this.confirmModal); }
  openDanger()   { this.openModal(this.dangerModal); }
  openSuccess()  { this.openModal(this.successModal); }
  openSizeXs()   { this.openModal(this.sizeXsModal); }
  openSizeSm()   { this.openModal(this.sizeSmModal); }
  openSizeMd()   { this.openModal(this.sizeMdModal); }
  openSizeLg()   { this.openModal(this.sizeLgModal); }
  openLabel()    { this.openModal(this.labelModal); }
  openScroll()   { this.openModal(this.scrollModal); }
  openNoFooter() { this.openModal(this.noFooterModal); }
}
