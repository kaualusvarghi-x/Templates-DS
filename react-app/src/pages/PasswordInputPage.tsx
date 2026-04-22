import React, { useState } from 'react';

type FormErrs = { password?: string; confirm?: string };

export default function PasswordInputPage() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm]   = useState('');
  const [errors, setErrors]     = useState<FormErrs>({});
  const [formSuccess, setFormSuccess] = useState(false);

  function validateAndSubmit() {
    const errs: FormErrs = {};

    if (!password) errs.password = 'A senha é obrigatória.';
    else if (password.length < 8) errs.password = 'Senha deve ter pelo menos 8 caracteres.';

    if (!confirm) errs.confirm = 'Confirme sua senha.';
    else if (confirm !== password) errs.confirm = 'As senhas não coincidem.';

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setFormSuccess(true);
      setPassword('');
      setConfirm('');
    } else {
      setFormSuccess(false);
    }
  }

  return (
    <div>

      {/* ── Cabeçalho ──────────────────────────────────────────────────────── */}
      <div className="pg-header">
        <span className="pg-tag">xds-password-input</span>
        <h1 className="pg-title">Password Input</h1>
        <p className="pg-desc">Campo de senha com toggle show/hide · tamanhos · estados · skeleton</p>
      </div>

      {/* ── Padrão ─────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Padrão — toggle exibir/ocultar senha</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-password-input
            label="Senha"
            placeholder="Digite sua senha"
          />
        </div>
      </div>

      {/* ── Tamanhos ────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — sm / md / lg</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          {(['sm', 'md', 'lg'] as const).map(size => (
            <xds-password-input
              key={size}
              label={size}
              placeholder="Digite sua senha"
              size={size}
            />
          ))}
        </div>
      </div>

      {/* ── Helper text ─────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Com helper text — requisitos da senha</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-password-input
            label="Nova senha"
            placeholder="Mínimo 8 caracteres"
            helper-text="Mínimo de 8 caracteres, letras e números."
            value="minhasenha123"
          />
        </div>
      </div>

      {/* ── Estados de validação ─────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Estados de validação — invalid / warn</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-password-input
            label="Inválido"
            placeholder="Digite sua senha"
            invalid
            invalid-text="A senha é obrigatória."
          />
          <xds-password-input
            label="Aviso"
            warn
            warn-text="A senha não atende aos requisitos mínimos."
            value="1234"
          />
        </div>
      </div>

      {/* ── Disabled / Readonly ──────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Desabilitado — disabled / readonly</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-password-input
            label="Desabilitado"
            placeholder="Digite sua senha"
            disabled
          />
          <xds-password-input
            label="Somente leitura"
            readonly
            value="••••••••"
          />
        </div>
      </div>

      {/* ── Skeleton ─────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Skeleton — placeholder de carregamento</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-password-input-skeleton />
        </div>
      </div>

      {/* ── Formulário controlado — useState ────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Formulário — definir nova senha (useState)</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>

          {formSuccess && (
            <div style={{
              padding: '12px 16px', background: '#d1fae5', borderRadius: 8,
              color: '#065f46', fontSize: 14, fontWeight: 600,
            }}>
              ✓ Senha alterada com sucesso!
            </div>
          )}

          <xds-password-input
            label="Nova senha"
            placeholder="Mínimo 8 caracteres"
            helper-text="Use letras maiúsculas, minúsculas, números e símbolos."
            value={password}
            onChange={(e: React.ChangeEvent<HTMLElement>) => {
              setPassword((e.target as HTMLInputElement).value);
              setErrors(p => ({ ...p, password: undefined }));
              setFormSuccess(false);
            }}
            invalid={!!errors.password}
            invalid-text={errors.password}
          />
          <xds-password-input
            label="Confirmar senha"
            placeholder="Repita a senha"
            value={confirm}
            onChange={(e: React.ChangeEvent<HTMLElement>) => {
              setConfirm((e.target as HTMLInputElement).value);
              setErrors(p => ({ ...p, confirm: undefined }));
              setFormSuccess(false);
            }}
            invalid={!!errors.confirm}
            invalid-text={errors.confirm}
          />
          <xds-button kind="primary" onClick={validateAndSubmit}>
            Alterar senha
          </xds-button>
        </div>
      </div>

    </div>
  );
}
