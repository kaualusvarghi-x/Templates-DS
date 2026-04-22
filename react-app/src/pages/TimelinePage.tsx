export default function TimelinePage() {
  return (
    <div>

      <div className="pg-header">
        <span className="pg-tag">xds-timeline · xds-timeline-item</span>
        <h1 className="pg-title">Timeline</h1>
        <p className="pg-desc">Sequência de etapas ou eventos · steps · history · progress · horizontal · ícone customizado</p>
      </div>

      {/* ── Steps vertical ───────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Steps — vertical</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-timeline variant="steps">
            <xds-timeline-item variant="steps" status="completed" step={1} title="Agendamento Online" description="Escolha local e data pelo portal." />
            <xds-timeline-item variant="steps" status="active"    step={2} title="Atendimento Presencial" description="Compareça para biometria." />
            <xds-timeline-item variant="steps" status="pending"   step={3} title="Retirada" description="Aguarde o prazo de entrega." />
          </xds-timeline>
        </div>
      </div>

      {/* ── Steps horizontal ─────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Steps — horizontal</div>
        <div className="pg-canvas" style={{ maxWidth: 640 }}>
          <xds-timeline variant="steps" orientation="horizontal">
            <xds-timeline-item variant="steps" orientation="horizontal" status="completed" step={1} title="Agendamento"  description="Concluído." />
            <xds-timeline-item variant="steps" orientation="horizontal" status="active"    step={2} title="Atendimento" description="Em andamento." />
            <xds-timeline-item variant="steps" orientation="horizontal" status="pending"   step={3} title="Retirada"    description="Aguardando." />
          </xds-timeline>
        </div>
      </div>

      {/* ── History vertical ─────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">History — vertical</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-timeline variant="history">
            <xds-timeline-item variant="history" status="completed" timestamp="28/04/2024 09:00" description="Solicitação de abertura iniciada." />
            <xds-timeline-item variant="history" status="completed" timestamp="28/04/2024 09:05" description="Validação automática de dados." />
            <xds-timeline-item variant="history" status="active"    timestamp="28/04/2024 09:10" description="Aguardando confirmação do responsável." />
            <xds-timeline-item variant="history" status="pending"   timestamp="28/04/2024 09:15" description="Emissão do documento final." />
          </xds-timeline>
        </div>
      </div>

      {/* ── History horizontal ───────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">History — horizontal</div>
        <div className="pg-canvas" style={{ maxWidth: 640 }}>
          <xds-timeline variant="history" orientation="horizontal">
            <xds-timeline-item variant="history" orientation="horizontal" status="completed" timestamp="09:00" description="Abertura iniciada." />
            <xds-timeline-item variant="history" orientation="horizontal" status="completed" timestamp="09:05" description="Dados validados." />
            <xds-timeline-item variant="history" orientation="horizontal" status="active"    timestamp="09:10" description="Aguardando confirmação." />
            <xds-timeline-item variant="history" orientation="horizontal" status="pending"   timestamp="09:15" description="Emissão pendente." />
          </xds-timeline>
        </div>
      </div>

      {/* ── Progress vertical ────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Progress — vertical</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-timeline variant="progress">
            <xds-timeline-item variant="progress" status="completed" title="Envio de documentos"       description="Todos os arquivos recebidos." />
            <xds-timeline-item variant="progress" status="active"    title="Análise de crédito"        description="Em análise pela equipe." />
            <xds-timeline-item variant="progress" status="invalid"   title="Verificação de identidade" description="Documento ilegível. Reenvie." />
            <xds-timeline-item variant="progress" status="pending"   title="Assinatura do contrato"    description="Aguardando etapas anteriores." />
          </xds-timeline>
        </div>
      </div>

      {/* ── Progress horizontal ──────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Progress — horizontal</div>
        <div className="pg-canvas" style={{ maxWidth: 640 }}>
          <xds-timeline variant="progress" orientation="horizontal">
            <xds-timeline-item variant="progress" orientation="horizontal" status="completed" title="Documentos"  description="Recebidos." />
            <xds-timeline-item variant="progress" orientation="horizontal" status="active"    title="Análise"     description="Em andamento." />
            <xds-timeline-item variant="progress" orientation="horizontal" status="invalid"   title="Identidade"  description="Erro na validação." />
            <xds-timeline-item variant="progress" orientation="horizontal" status="pending"   title="Contrato"    description="Aguardando." />
          </xds-timeline>
        </div>
      </div>

      {/* ── Progress ícone customizado vertical ──────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Progress — ícone customizado</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-timeline variant="progress">
            <xds-timeline-item variant="progress" status="completed" title="Upload de arquivos"  description="Documentos enviados com sucesso.">
              <xds-icon slot="icon" name="upload" size="sm" aria-hidden="true" />
            </xds-timeline-item>
            <xds-timeline-item variant="progress" status="active"    title="Processamento"       description="Analisando os dados enviados.">
              <xds-icon slot="icon" name="schedule" size="sm" aria-hidden="true" />
            </xds-timeline-item>
            <xds-timeline-item variant="progress" status="invalid"   title="Validação"           description="Falha na verificação de integridade.">
              <xds-icon slot="icon" name="error" size="sm" aria-hidden="true" />
            </xds-timeline-item>
            <xds-timeline-item variant="progress" status="pending"   title="Publicação"          description="Aguardando correção das etapas anteriores." />
          </xds-timeline>
        </div>
      </div>

      {/* ── Progress ícone customizado horizontal ────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Progress — ícone customizado horizontal</div>
        <div className="pg-canvas" style={{ maxWidth: 640 }}>
          <xds-timeline variant="progress" orientation="horizontal">
            <xds-timeline-item variant="progress" orientation="horizontal" status="completed" title="Upload"        description="Concluído.">
              <xds-icon slot="icon" name="upload" size="sm" aria-hidden="true" />
            </xds-timeline-item>
            <xds-timeline-item variant="progress" orientation="horizontal" status="active"    title="Processamento" description="Em andamento.">
              <xds-icon slot="icon" name="schedule" size="sm" aria-hidden="true" />
            </xds-timeline-item>
            <xds-timeline-item variant="progress" orientation="horizontal" status="invalid"   title="Validação"     description="Erro.">
              <xds-icon slot="icon" name="error" size="sm" aria-hidden="true" />
            </xds-timeline-item>
            <xds-timeline-item variant="progress" orientation="horizontal" status="pending"   title="Publicação"    description="Aguardando." />
          </xds-timeline>
        </div>
      </div>

      {/* ── Item único ───────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Item único — sem linha conectora</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-timeline variant="steps">
            <xds-timeline-item variant="steps" status="active" step={1} title="Única etapa" description="Quando há apenas um item, a linha conectora é omitida automaticamente." />
          </xds-timeline>
        </div>
      </div>

      {/* ── Exemplo real: abertura de empresa ────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Exemplo real — abertura de empresa</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-timeline variant="steps">
            <xds-timeline-item variant="steps" status="completed" step={1} title="Consulta de viabilidade"     description="Verificação do nome e atividade na Junta Comercial." />
            <xds-timeline-item variant="steps" status="completed" step={2} title="Registro do contrato social" description="Envio dos documentos e assinaturas dos sócios." />
            <xds-timeline-item variant="steps" status="active"    step={3} title="Emissão do CNPJ"             description="Aguardando processamento pela Receita Federal." />
            <xds-timeline-item variant="steps" status="pending"   step={4} title="Alvará de funcionamento"     description="Solicitação junto à prefeitura municipal." />
            <xds-timeline-item variant="steps" status="pending"   step={5} title="Inscrição estadual"          description="Obrigatória para atividades com incidência de ICMS." />
          </xds-timeline>
        </div>
      </div>

      {/* ── Exemplo real: histórico de protocolo ─────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">Exemplo real — histórico de protocolo</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-timeline variant="history">
            <xds-timeline-item variant="history" status="completed" timestamp="10/06/2025 08:32" description="Protocolo nº 2025/001234 aberto." />
            <xds-timeline-item variant="history" status="completed" timestamp="10/06/2025 08:35" description="Documentos recebidos e validados." />
            <xds-timeline-item variant="history" status="completed" timestamp="11/06/2025 14:10" description="Encaminhado para análise técnica." />
            <xds-timeline-item variant="history" status="active"    timestamp="12/06/2025 09:00" description="Em análise pela equipe responsável." />
            <xds-timeline-item variant="history" status="pending"   timestamp="—"               description="Aguardando parecer final e publicação." />
          </xds-timeline>
        </div>
      </div>

    </div>
  );
}
