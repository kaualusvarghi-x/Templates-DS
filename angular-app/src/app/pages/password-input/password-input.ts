import { Component, signal } from '@angular/core';
import { XDS_DIRECTIVES } from '@xvia/ds-types/angular';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.html',
  imports: [XDS_DIRECTIVES],
})
export class PasswordInputComponent {
  password = signal('');
  confirm  = signal('');
  passwordError = signal('');
  confirmError  = signal('');
  formSuccess   = signal(false);

  sizes = ['sm', 'md', 'lg'] as const;

  validateAndSubmit() {
    let hasError = false;
    this.passwordError.set('');
    this.confirmError.set('');

    if (!this.password()) {
      this.passwordError.set('A senha é obrigatória.');
      hasError = true;
    } else if (this.password().length < 8) {
      this.passwordError.set('Senha deve ter pelo menos 8 caracteres.');
      hasError = true;
    }

    if (!this.confirm()) {
      this.confirmError.set('Confirme sua senha.');
      hasError = true;
    } else if (this.confirm() !== this.password()) {
      this.confirmError.set('As senhas não coincidem.');
      hasError = true;
    }

    if (!hasError) {
      this.formSuccess.set(true);
      this.password.set('');
      this.confirm.set('');
    } else {
      this.formSuccess.set(false);
    }
  }

  onPasswordChange(e: Event) {
    this.password.set((e as CustomEvent).detail ?? (e.target as HTMLInputElement).value);
    this.passwordError.set('');
    this.formSuccess.set(false);
  }

  onConfirmChange(e: Event) {
    this.confirm.set((e as CustomEvent).detail ?? (e.target as HTMLInputElement).value);
    this.confirmError.set('');
    this.formSuccess.set(false);
  }
}
