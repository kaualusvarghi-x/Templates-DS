import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputPageComponent {
  sizes = ['sm', 'md', 'lg'] as const;

  name = signal('');
  email = signal('');
  password = signal('');
  nameError = signal('');
  emailError = signal('');
  passwordError = signal('');
  formSuccess = signal(false);

  validateAndSubmit() {
    let hasError = false;
    this.nameError.set('');
    this.emailError.set('');
    this.passwordError.set('');

    if (!this.name().trim()) { this.nameError.set('Nome é obrigatório'); hasError = true; }
    if (!this.email().trim()) { this.emailError.set('E-mail é obrigatório'); hasError = true; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email())) { this.emailError.set('Formato de e-mail inválido'); hasError = true; }
    if (!this.password()) { this.passwordError.set('Senha é obrigatória'); hasError = true; }
    else if (this.password().length < 8) { this.passwordError.set('Senha deve ter pelo menos 8 caracteres'); hasError = true; }

    if (!hasError) {
      this.formSuccess.set(true);
      this.name.set('');
      this.email.set('');
      this.password.set('');
    } else {
      this.formSuccess.set(false);
    }
  }

  onNameChange(e: Event) {
    this.name.set((e as CustomEvent).detail ?? (e.target as HTMLInputElement).value);
    this.nameError.set('');
    this.formSuccess.set(false);
  }
  onEmailChange(e: Event) {
    this.email.set((e as CustomEvent).detail ?? (e.target as HTMLInputElement).value);
    this.emailError.set('');
    this.formSuccess.set(false);
  }
  onPasswordChange(e: Event) {
    this.password.set((e as CustomEvent).detail ?? (e.target as HTMLInputElement).value);
    this.passwordError.set('');
    this.formSuccess.set(false);
  }
}
