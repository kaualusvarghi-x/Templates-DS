import React, { useState } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────────
type FormErrs = { name?: string; email?: string; password?: string };

// ─────────────────────────────────────────────────────────────────────────────
export default function InputPage() {

  // ── Formulário com useState ────────────────────────────────────────────────
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrs>({});
  const [formSuccess, setFormSuccess] = useState(false);

  function validateAndSubmit() {
    const errs: FormErrs = {};

    if (!name.trim()) errs.name = 'Nome é obrigatório';
    if (!email.trim()) errs.email = 'E-mail é obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Formato de e-mail inválido';
    if (!password) errs.password = 'Senha é obrigatória';
    else if (password.length < 8) errs.password = 'Senha deve ter pelo menos 8 caracteres';

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setFormSuccess(true);
      setName('');
      setEmail('');
      setPassword('');
    } else {
      setFormSuccess(false);
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div>

      {/* ── Cabeçalho ──────────────────────────────────────────────────────── */}
      <div className="pg-header">
        <span className="pg-tag">xds-input</span>
        <h1 className="pg-title">Input</h1>
        <p className="pg-desc">Testes, acessibilidade e simulação de fluxo real</p>
      </div>

      {/* ── Formulário com useState ─────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Formulário Completo — useState (sem useRef)</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>

          {formSuccess && (
            <div style={{
              padding: '12px 16px', background: '#d1fae5', borderRadius: 8,
              color: '#065f46', fontSize: 14, fontWeight: 600,
            }}>
              ✓ Dados enviados com sucesso!
            </div>
          )}

          <xds-input
            label="Nome completo"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLElement>) => {
              setName((e.target as HTMLInputElement).value);
              setErrors(p => ({ ...p, name: undefined }));
              setFormSuccess(false);
            }}
            invalid={!!errors.name}
          />
          <xds-input
            label="E-mail"
            type="email"
            placeholder="nome@exemplo.com.br"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLElement>) => {
              setEmail((e.target as HTMLInputElement).value);
              setErrors(p => ({ ...p, email: undefined }));
              setFormSuccess(false);
            }}
            invalid={!!errors.email}
          />
          <xds-input
            label="Telefone"
            placeholder="(00) 00000-0000"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLElement>) => {
              setPassword((e.target as HTMLInputElement).value);
              setErrors(p => ({ ...p, password: undefined }));
              setFormSuccess(false);
            }}
            invalid={!!errors.password}
          />
          <xds-button kind="primary" onClick={validateAndSubmit}>
            Enviar
          </xds-button>
        </div>
      </div>

      {/* ── Default ─────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Default — editável</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input label="Nome completo" placeholder="Digite seu nome" />
          <xds-input label="E-mail" type="email" placeholder="nome@exemplo.com.br" />
          <xds-input label="Telefone" placeholder="(00) 00000-0000" />
        </div>
      </div>

      {/* ── Tamanhos ────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — sm / md / lg</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          {(['sm', 'md', 'lg'] as const).map(size => (
            <xds-input
              key={size}
              label={size}
              placeholder="Exemplo de campo"
              size={size}
            />
          ))}
        </div>
      </div>

      {/* ── Skeleton ─────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Skeleton — placeholder de carregamento</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input-skeleton />
          <xds-input-skeleton />
        </div>
      </div>

      {/* ── Readonly ────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Readonly</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input label="CPF (não editável)" value="123.456.789-00" readonly />
          <xds-input label="Número de protocolo" value="2025-004512-SP" readonly />
        </div>
      </div>

      {/* ── Disabled ────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Disabled</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input label="Data de nascimento" value="01/01/1990" disabled />
          <xds-input label="Número de CPF" value="***.***.***-**" disabled />
        </div>
      </div>

      {/* ── Error state ─────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Error state</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input label="Nome completo" placeholder="Digite seu nome" invalid invalid-text="Nome é obrigatório" />
          <xds-input label="E-mail" value="email-invalido" invalid invalid-text="Formato de e-mail inválido" />
        </div>
      </div>

      {/* ── Warn state ──────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Warn state — warn + warn-text</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input
            label="Data de vencimento"
            value="01/2025"
            warn
            warn-text="Este documento vence em menos de 30 dias."
          />
          <xds-input
            label="Telefone"
            value="(11) 9999-9999"
            warn
            warn-text="Verifique se o DDD está correto para sua região."
          />
        </div>
      </div>

      {/* ── Helper text ─────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Helper text — instrução abaixo do campo</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 400 }}>
          <xds-input
            label="CPF"
            placeholder="000.000.000-00"
            helper-text="Digite apenas números — a formatação é automática."
          />
          <xds-input
            label="Telefone"
            placeholder="(00) 00000-0000"
            helper-text="Informe o DDD seguido do número."
          />
        </div>
      </div>
    </div>
  );
}
