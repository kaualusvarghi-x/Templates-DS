import { useState } from 'react';

export default function AccordionPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>

      <div className="pg-header">
        <span className="pg-tag">xds-accordion</span>
        <h1 className="pg-title">Accordion</h1>
        <p className="pg-desc">Painéis expansíveis · tamanhos · alinhamento · flush · disabled · controlado</p>
      </div>

      {/* ── Default ──────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Default</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <xds-accordion>
            <xds-accordion-item title="O que é o portal de serviços?">
              O portal é a plataforma digital do governo que centraliza o acesso a serviços públicos
              para cidadãos e empresas, disponível 24 horas por dia.
            </xds-accordion-item>
            <xds-accordion-item title="Como faço para criar uma conta?">
              Acesse a página de cadastro, informe seu CPF, e-mail e crie uma senha segura.
              Você receberá um código de confirmação no e-mail informado.
            </xds-accordion-item>
            <xds-accordion-item title="Quais documentos são necessários?">
              Os documentos variam conforme o serviço solicitado. Em geral, são necessários
              CPF, RG e comprovante de residência atualizado.
            </xds-accordion-item>
          </xds-accordion>
        </div>
      </div>

      {/* ── Tamanhos ─────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Tamanhos — sm / md / lg</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600, gap: 32 }}>
          {(['sm', 'md', 'lg'] as const).map(size => (
            <div key={size}>
              <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 8 }}>{size}</div>
              <xds-accordion size={size}>
                <xds-accordion-item title="Primeiro item">
                  Conteúdo do primeiro painel com tamanho {size}.
                </xds-accordion-item>
                <xds-accordion-item title="Segundo item">
                  Conteúdo do segundo painel com tamanho {size}.
                </xds-accordion-item>
              </xds-accordion>
            </div>
          ))}
        </div>
      </div>

      {/* ── Alinhamento ──────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Alinhamento do ícone — start / end</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600, gap: 32 }}>
          {(['start', 'end'] as const).map(align => (
            <div key={align}>
              <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 8 }}>alignment="{align}"</div>
              <xds-accordion alignment={align}>
                <xds-accordion-item title="Item com ícone alinhado">
                  O ícone de expansão está posicionado no lado {align === 'start' ? 'esquerdo' : 'direito'}.
                </xds-accordion-item>
                <xds-accordion-item title="Segundo item">
                  Outro painel demonstrando o alinhamento {align}.
                </xds-accordion-item>
              </xds-accordion>
            </div>
          ))}
        </div>
      </div>

      {/* ── Flush ────────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Flush — sem borda container</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <xds-accordion isFlush>
            <xds-accordion-item title="Sem borda externa">
              Variante flush remove a borda ao redor do accordion, deixando apenas
              as divisórias entre os itens.
            </xds-accordion-item>
            <xds-accordion-item title="Segundo item flush">
              Útil quando o accordion está dentro de um card ou container com borda própria.
            </xds-accordion-item>
          </xds-accordion>
        </div>
      </div>

      {/* ── Item aberto por padrão ───────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Item aberto por padrão — open</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <xds-accordion>
            <xds-accordion-item title="Fechado por padrão">
              Este painel começa fechado.
            </xds-accordion-item>
            <xds-accordion-item title="Aberto por padrão" open>
              Este painel inicia expandido graças à prop <code>open</code>.
            </xds-accordion-item>
            <xds-accordion-item title="Também fechado">
              Outro painel fechado para comparação.
            </xds-accordion-item>
          </xds-accordion>
        </div>
      </div>

      {/* ── Disabled ─────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Disabled — accordion inteiro / item individual</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600, gap: 32 }}>
          <div>
            <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 8 }}>accordion disabled</div>
            <xds-accordion disabled>
              <xds-accordion-item title="Item desabilitado (accordion)">
                Nenhum painel pode ser expandido.
              </xds-accordion-item>
              <xds-accordion-item title="Também desabilitado">
                O accordion inteiro está desabilitado.
              </xds-accordion-item>
            </xds-accordion>
          </div>
          <div>
            <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 8 }}>item individual disabled</div>
            <xds-accordion>
              <xds-accordion-item title="Item normal">
                Este item funciona normalmente.
              </xds-accordion-item>
              <xds-accordion-item title="Item desabilitado" disabled>
                Este item específico está desabilitado.
              </xds-accordion-item>
              <xds-accordion-item title="Outro item normal">
                Este também funciona normalmente.
              </xds-accordion-item>
            </xds-accordion>
          </div>
        </div>
      </div>

      {/* ── Controlado via React ─────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Controlado — open via useState</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
            {[0, 1, 2].map(i => (
              <xds-button
                key={i}
                kind={openIndex === i ? 'primary' : 'tertiary'}
                size="sm"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {openIndex === i ? `Fechar painel ${i + 1}` : `Abrir painel ${i + 1}`}
              </xds-button>
            ))}
          </div>
          <xds-accordion>
            {[
              { title: 'Painel 1 — Informações pessoais', content: 'Nome, CPF, data de nascimento e dados de contato.' },
              { title: 'Painel 2 — Endereço', content: 'Logradouro, número, complemento, bairro, cidade e CEP.' },
              { title: 'Painel 3 — Documentação', content: 'RG, CNH ou outro documento de identificação aceito.' },
            ].map((item, i) => (
              <xds-accordion-item
                key={i}
                title={item.title}
                open={openIndex === i || undefined}
              >
                {item.content}
              </xds-accordion-item>
            ))}
          </xds-accordion>
        </div>
      </div>

      {/* ── Exclusive ────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Exclusive — apenas um item aberto por vez</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <xds-accordion exclusive>
            <xds-accordion-item title="Primeiro item">
              Ao abrir outro item, este é fechado automaticamente.
            </xds-accordion-item>
            <xds-accordion-item title="Segundo item">
              O modo exclusive mantém somente um painel expandido.
            </xds-accordion-item>
            <xds-accordion-item title="Terceiro item">
              Útil para listas longas com foco em leitura sequencial.
            </xds-accordion-item>
          </xds-accordion>
        </div>
      </div>

      {/* ── Título com ícone ───────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Com ícone no título via slot title</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <xds-accordion>
            <xds-accordion-item>
              <span slot="title" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <xds-icon name="user" size="md" />
                Como recuperar minha senha?
              </span>
              Acesse a página de login e clique em Esqueci minha senha.
            </xds-accordion-item>
            <xds-accordion-item>
              <span slot="title" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <xds-icon name="info" size="md" />
                Como alterar meu endereço?
              </span>
              Acesse Meus Dados, clique em Editar e atualize seu comprovante.
            </xds-accordion-item>
          </xds-accordion>
        </div>
      </div>

      {/* ── Skeleton ────────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Skeleton</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <xds-accordion-skeleton count={4} open />
        </div>
      </div>

      {/* ── Conteúdo rico ────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Conteúdo rico no painel</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 600 }}>
          <xds-accordion>
            <xds-accordion-item title="Como solicitar um serviço?" open>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '8px 0' }}>
                <xds-text variant="body">Siga os passos abaixo para solicitar um serviço:</xds-text>
                <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <li><xds-text variant="body-sm">Faça login com seu CPF e senha.</xds-text></li>
                  <li><xds-text variant="body-sm">Acesse "Meus Serviços" no menu principal.</xds-text></li>
                  <li><xds-text variant="body-sm">Clique em "Nova Solicitação" e preencha o formulário.</xds-text></li>
                </ol>
                <xds-button kind="primary" size="sm">Iniciar solicitação<xds-icon slot="icon" name="arrow-right" /></xds-button>
              </div>
            </xds-accordion-item>
            <xds-accordion-item title="Prazo de atendimento">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '8px 0' }}>
                <xds-text variant="body">O prazo varia conforme o tipo de serviço:</xds-text>
                <xds-divider />
                <xds-text variant="body-sm">• Urgente: até 2 dias úteis</xds-text>
                <xds-text variant="body-sm">• Normal: até 10 dias úteis</xds-text>
                <xds-text variant="body-sm">• Complexo: até 30 dias úteis</xds-text>
              </div>
            </xds-accordion-item>
          </xds-accordion>
        </div>
      </div>

    </div>
  );
}
