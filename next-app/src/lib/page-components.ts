import type { ComponentType } from 'react';
import AccordionPage from '@/components/pages/AccordionPage';
import AvatarPage from '@/components/pages/AvatarPage';
import BreadcrumbPage from '@/components/pages/BreadcrumbPage';
import ButtonPage from '@/components/pages/ButtonPage';
import CalloutPage from '@/components/pages/CalloutPage';
import CardPage from '@/components/pages/CardPage';
import CheckboxPage from '@/components/pages/CheckboxPage';
import DividerPage from '@/components/pages/DividerPage';
import ExternalLinkGuardPage from '@/components/pages/ExternalLinkGuardPage';
import IconButtonPage from '@/components/pages/IconButtonPage';
import IconPage from '@/components/pages/IconPage';
import InputPage from '@/components/pages/InputPage';
import LoadingPage from '@/components/pages/LoadingPage';
import ModalPage from '@/components/pages/ModalPage';
import PaginationPage from '@/components/pages/PaginationPage';
import PasswordInputPage from '@/components/pages/PasswordInputPage';
import ProgressBarPage from '@/components/pages/ProgressBarPage';
import SearchPage from '@/components/pages/SearchPage';
import SelectPage from '@/components/pages/SelectPage';
import TagPage from '@/components/pages/TagPage';
import TextPage from '@/components/pages/TextPage';
import ToastPage from '@/components/pages/ToastPage';
import TooltipPage from '@/components/pages/TooltipPage';
import type { PageId } from '@/lib/navigation';

export const PAGE_COMPONENTS: Record<PageId, ComponentType> = {
  button: ButtonPage,
  icon: IconPage,
  'icon-button': IconButtonPage,
  text: TextPage,
  divider: DividerPage,
  tag: TagPage,
  callout: CalloutPage,
  avatar: AvatarPage,
  breadcrumb: BreadcrumbPage,
  tooltip: TooltipPage,
  input: InputPage,
  'password-input': PasswordInputPage,
  select: SelectPage,
  checkbox: CheckboxPage,
  accordion: AccordionPage,
  'progress-bar': ProgressBarPage,
  pagination: PaginationPage,
  loading: LoadingPage,
  toast: ToastPage,
  modal: ModalPage,
  'external-link-guard': ExternalLinkGuardPage,
  search: SearchPage,
  card: CardPage,
};
