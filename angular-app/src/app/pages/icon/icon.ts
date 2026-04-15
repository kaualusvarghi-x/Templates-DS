import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const ICON_NAMES_FALLBACK = [
  'x','circle-check','circle-x','triangle-alert','circle-help','trash-2','sparkles','pencil','share-2','refresh-cw',
  'arrow-right','arrow-left','download','upload','settings','plus','bell','mail','shopping-cart','user',
  'badge-alert','instagram','twitter','menu','close','chevron_right','chevron_left','arrow_forward','home','search',
  'search_off','filter_list','sort_by_alpha','notifications','notifications_active','notifications_off','contrast',
  'text_increase','text_decrease','check_circle','warning','error','info','help','help_outline','star','star_outline',
  'edit','save','delete_outline','add','share','print','visibility','visibility_off','lock','security','verified',
  'login','logout','sync','directions_car','badge','smartphone','school','medical_services','policy','work','store',
  'forest','account_balance','account_circle','person','camera_alt','add_a_photo','newspaper','calendar_today',
  'schedule','history','payments','qr_code_2','document_scanner','folder_open','smart_toy','auto_awesome','send',
  'email','support_agent','photo_camera','play_arrow','check','minus','android','apple','facebook','youtube','user2',
] as const;

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
})
export class IconComponent implements OnInit {
  allIcons: string[] = [];
  private platformId = inject(PLATFORM_ID);

  readonly sizes = ['sm', 'md', 'lg'] as const;
  readonly variantKinds = ['circle', 'square'] as const;

  readonly variantColors = [
    { color: 'primary', icon: 'user' },
    { color: 'info', icon: 'badge-alert' },
    { color: 'success', icon: 'notifications' },
    { color: 'warning', icon: 'smartphone' },
    { color: 'danger', icon: 'security' },
    { color: 'neutral', icon: 'directions_car' },
  ] as const;

  readonly colorIcons = [
    { color: '#3b82f6', name: 'info', label: 'Azul' },
    { color: '#ef4444', name: 'circle-x', label: 'Vermelho' },
    { color: '#22c55e', name: 'circle-check', label: 'Verde' },
    { color: '#f59e0b', name: 'triangle-alert', label: 'Amarelo' },
  ] as const;

  readonly hoverAnims = [
    { name: 'arrow-right', anim: 'slide-right', label: 'slide-right' },
    { name: 'arrow-left', anim: 'slide-left', label: 'slide-left' },
    { name: 'upload', anim: 'slide-up', label: 'slide-up' },
    { name: 'download', anim: 'slide-down', label: 'slide-down' },
    { name: 'arrow-right', anim: 'bounce-right', label: 'bounce-right' },
    { name: 'arrow-left', anim: 'bounce-left', label: 'bounce-left' },
    { name: 'plus', anim: 'scale', label: 'scale' },
  ] as const;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const runtimeIcons = (window as Window & { XviaDS?: { ICON_NAMES?: string[] } }).XviaDS?.ICON_NAMES;
    const source = runtimeIcons?.length ? runtimeIcons : [...ICON_NAMES_FALLBACK];
    this.allIcons = Array.from(new Set(source));
  }

  sizeLabel(size: string): string {
    return size === 'sm' ? '16' : size === 'md' ? '20' : '24';
  }
}
