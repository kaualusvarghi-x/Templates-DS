export default function CardPage() {
  return (
    <>
      <div className="pg-header">
        <span className="pg-tag">xds-card · xds-news-card · xds-quick-service-card · xds-service-card · xds-icon-card · xds-action-card</span>
        <h1 className="pg-title">Card</h1>
        <p className="pg-desc">Base card · cards de notícia · atalho de serviço · card de serviço detalhado · card com ícone em destaque · botão-card de ação</p>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-card — padrão</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-card>
            <p style={{ margin: 0 }}>Conteúdo do card usando o slot padrão.</p>
          </xds-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-card — com slots (header, content, footer)</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-card>
            <div slot="header" style={{ fontWeight: 700, fontSize: 16 }}>Título do Card</div>
            <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
              Este é o conteúdo principal do card, renderizado no slot padrão.
            </p>
            <div slot="footer" style={{ textAlign: 'right', fontSize: 12 }}>Rodapé do card</div>
          </xds-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-card — interativo (hover)</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-card interactive>
            <p style={{ margin: 0 }}>Passe o mouse para ver o efeito de hover.</p>
          </xds-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-card — variantes de padding</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 420 }}>
          <xds-card padding="none"><p style={{ margin: 0 }}>padding="none"</p></xds-card>
          <xds-card padding="sm"><p style={{ margin: 0 }}>padding="sm"</p></xds-card>
          <xds-card padding="md"><p style={{ margin: 0 }}>padding="md"</p></xds-card>
          <xds-card padding="lg"><p style={{ margin: 0 }}>padding="lg"</p></xds-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-news-card — padrão</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 380 }}>
          <xds-news-card
            title="Nova plataforma digital reduz tempo de espera em 50%"
            description="A iniciativa faz parte do programa de modernização administrativa..."
            date="24 Out, 2023"
            image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
            category="INOVAÇÃO"
          />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-news-card — grid (3 cards)</div>
        <div
          className="pg-canvas"
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            width: '100%',
          }}
        >
          <xds-news-card
            title="Nova plataforma digital reduz tempo de espera em 50%"
            description="A iniciativa faz parte do programa de modernização administrativa..."
            date="24 Out, 2023"
            image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
            category="INOVAÇÃO"
          />
          <xds-news-card
            title="Nova plataforma digital reduz tempo de espera em 50%"
            description="A iniciativa faz parte do programa de modernização administrativa..."
            date="24 Out, 2023"
            image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop"
            category="INOVAÇÃO"
          />
          <xds-news-card
            title="Nova plataforma digital reduz tempo de espera em 50%"
            description="A iniciativa faz parte do programa de modernização administrativa..."
            date="24 Out, 2023"
            image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop"
            category="INOVAÇÃO"
          />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-news-card — edge cases</div>
        <div className="pg-canvas" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', width: '100%' }}>
          <xds-news-card
            title="Governo anuncia novos investimentos em infraestrutura"
            description="Os recursos serão destinados a melhorias nas rodovias estaduais..."
            date="15 Nov, 2023"
            image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop"
          />
          <xds-news-card
            title="Serviço disponível apenas online"
            description="Acesse o novo portal de serviços digitais..."
            date="10 Dez, 2023"
            category="TECNOLOGIA"
          />
          <xds-news-card
            title="Nova funcionalidade disponível"
            description="Confira as novidades do portal do cidadão..."
            image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop"
            category="ATUALIZAÇÃO"
          />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-quick-service-card — padrão</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 280 }}>
          <xds-quick-service-card title="Emissão de RG" description="Solicite a 1ª ou 2ª via do seu documento.">
            <xds-icon slot="icon" name="badge" size="lg" />
          </xds-quick-service-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-quick-service-card — grid (4 cards)</div>
        <div className="pg-canvas" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', width: '100%' }}>
          <xds-quick-service-card title="Emissão de RG" description="Solicite a 1ª ou 2ª via do seu documento.">
            <xds-icon slot="icon" name="badge" size="lg" />
          </xds-quick-service-card>
          <xds-quick-service-card title="IPTU 2024" description="Consulte débitos e emita boletos.">
            <xds-icon slot="icon" name="payments" size="lg" />
          </xds-quick-service-card>
          <xds-quick-service-card title="CNH Digital" description="Renovação e consulta de pontos.">
            <xds-icon slot="icon" name="directions_car" size="lg" />
          </xds-quick-service-card>
          <xds-quick-service-card title="Saúde Digital" description="Agende consultas e veja vacinas.">
            <xds-icon slot="icon" name="medical_services" size="lg" />
          </xds-quick-service-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-quick-service-card — sem descrição e sem ícone</div>
        <div className="pg-canvas" style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', width: '100%' }}>
          <xds-quick-service-card title="IPTU 2024">
            <xds-icon slot="icon" name="payments" size="lg" />
          </xds-quick-service-card>
          <xds-quick-service-card title="Serviço sem ícone" description="Nenhum ícone foi fornecido no slot." />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-service-card — padrão / presencial / gratuito / híbrido</div>
        <div className="pg-canvas pg-canvas--column" style={{ width: '100%' }}>
          <xds-service-card
            title="Renovação de Carteira Nacional de Habilitação (CNH)"
            description="Serviço para motoristas que precisam renovar sua licença para conduzir veículos. O processo pode ser iniciado online."
            price="R$ 112,00"
            type="digital"
            category="TRANSPORTE E TRÂNSITO"
          >
            <xds-button slot="actions" kind="primary" size="sm">INICIAR SERVIÇO</xds-button>
          </xds-service-card>

          <xds-service-card
            title="Segunda via da CNH por Perda ou Roubo"
            description="Solicitação de novo documento físico em caso de extravio, furto ou roubo. Requer boletim de ocorrência."
            price="R$ 85,00"
            type="presencial"
            category="TRANSPORTE E TRÂNSITO"
          >
            <xds-button slot="actions" kind="tertiary" size="sm">VER DETALHES</xds-button>
          </xds-service-card>

          <xds-service-card
            title="Habilitação Digital (CDT)"
            description="Baixe sua CNH Digital diretamente no seu smartphone. O documento tem o mesmo valor jurídico da versão impressa."
            type="digital"
            category="TRANSPORTE E TRÂNSITO"
            free
          >
            <xds-button slot="actions" kind="primary" size="sm">INICIAR SERVIÇO</xds-button>
          </xds-service-card>

          <xds-service-card
            title="Emissão de Carteira de Identidade (RG)"
            description="Solicitação de 1ª e 2ª via da carteira de identidade com agendamento prévio."
            type="hibrido"
            category="SEGURANÇA"
            free
          >
            <xds-button slot="actions" kind="tertiary" size="sm">VER DETALHES</xds-button>
          </xds-service-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-service-card — sem tipo/categoria + badges customizados</div>
        <div className="pg-canvas pg-canvas--column" style={{ width: '100%' }}>
          <xds-service-card
            title="Serviço genérico"
            description="Nenhuma modalidade ou categoria informada."
          >
            <xds-button slot="actions" kind="tertiary" size="sm">VER DETALHES</xds-button>
          </xds-service-card>

          <xds-service-card
            title="Serviço Especial"
            description="Serviço com badges adicionais via slot."
            type="digital"
            category="SAÚDE"
            free
          >
            <span
              slot="badges"
              style={{
                display: 'inline-flex',
                padding: '2px 8px',
                borderRadius: 9999,
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                background: 'color-mix(in srgb, var(--color-success) 15%, var(--color-surface))',
                color: 'var(--color-success)',
              }}
            >
              Novo
            </span>
            <xds-button slot="actions" kind="primary" size="sm">ACESSAR</xds-button>
          </xds-service-card>
        </div>
      </div>
      {/* ── xds-icon-card ─────────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">xds-icon-card — padrão</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 560 }}>
          <xds-icon-card
            title="Alterar Senha"
            description="Para garantir sua segurança, a alteração de senha é realizada através de um link seguro enviado ao seu e-mail cadastrado."
            icon-color="primary"
          >
            <xds-icon slot="icon" name="lock" size="md" />
            <xds-button kind="primary" size="sm">
              <xds-icon slot="icon" name="mail" size="sm" />
              Enviar Link de Redefinição
            </xds-button>
          </xds-icon-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-icon-card — cores do ícone</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 560 }}>
          <xds-icon-card title="Primary" description="Ações gerais, padrão." icon-color="primary">
            <xds-icon slot="icon" name="star" size="md" />
          </xds-icon-card>
          <xds-icon-card title="Info" description="Informações, notificações." icon-color="info">
            <xds-icon slot="icon" name="info" size="md" />
          </xds-icon-card>
          <xds-icon-card title="Success" description="Confirmações, segurança ativa." icon-color="success">
            <xds-icon slot="icon" name="check_circle" size="md" />
          </xds-icon-card>
          <xds-icon-card title="Warning" description="Alertas, atenção." icon-color="warning">
            <xds-icon slot="icon" name="warning" size="md" />
          </xds-icon-card>
          <xds-icon-card title="Danger" description="Erros, ações destrutivas." icon-color="danger">
            <xds-icon slot="icon" name="error" size="md" />
          </xds-icon-card>
          <xds-icon-card title="Neutral" description="Ações secundárias." icon-color="neutral">
            <xds-icon slot="icon" name="settings" size="md" />
          </xds-icon-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-icon-card — conteúdo rico no slot</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 560 }}>
          <xds-icon-card
            title="Verificação em Duas Etapas"
            description="Adicione uma camada extra de segurança à sua conta."
            icon-color="success"
          >
            <xds-icon slot="icon" name="shield" size="md" />
            <div style={{
              padding: 'var(--spacing-md, 16px)',
              background: 'color-mix(in srgb, var(--color-success, #4caf50) 8%, var(--color-surface, #fff))',
              borderRadius: 'var(--radius-md, 8px)',
              fontSize: 'var(--font-size-sm, 14px)',
              color: 'var(--color-text-secondary, #475569)',
            }}>
              Ative agora e receba um código via SMS ou e-mail a cada acesso.
            </div>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm, 8px)' }}>
              <xds-button kind="primary" size="sm">Ativar agora</xds-button>
              <xds-button kind="ghost" size="sm">Saiba mais</xds-button>
            </div>
          </xds-icon-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-icon-card — callout informativo</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 560 }}>
          <xds-icon-card title="Última Atualização:" icon-color="info">
            <xds-icon slot="icon" name="info" size="md" />
            <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm, 14px)' }}>Solicitação cancelada por falta de requisitos.</p>
          </xds-icon-card>
          <xds-icon-card title="Concluído:" icon-color="success">
            <xds-icon slot="icon" name="check_circle" size="md" />
            <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm, 14px)' }}>Sua solicitação foi processada com sucesso.</p>
          </xds-icon-card>
          <xds-icon-card title="Atenção:" icon-color="warning">
            <xds-icon slot="icon" name="warning" size="md" />
            <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm, 14px)' }}>O prazo para envio de documentos se encerra em 3 dias.</p>
          </xds-icon-card>
          <xds-icon-card title="Erro:" icon-color="danger">
            <xds-icon slot="icon" name="error" size="md" />
            <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm, 14px)' }}>Não foi possível concluir a operação. Tente novamente.</p>
          </xds-icon-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-icon-card — sem descrição</div>
        <div className="pg-canvas pg-canvas--column" style={{ maxWidth: 560 }}>
          <xds-icon-card title="Notificações" icon-color="info">
            <xds-icon slot="icon" name="bell" size="md" />
            <xds-button kind="secondary" size="sm">Gerenciar preferências</xds-button>
          </xds-icon-card>
        </div>
      </div>

      {/* ── xds-action-card ───────────────────────────────────────────────────── */}
      <div className="pg-group">
        <div className="pg-group__label">xds-action-card — padrão</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-action-card label="Adicionar" style={{ width: '160px', height: '160px' }} />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-action-card — ícone customizado</div>
        <div className="pg-canvas" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <xds-action-card label="Nova Foto" style={{ width: '160px', height: '160px' }}>
            <xds-icon slot="icon" name="photo_camera" size="lg" />
          </xds-action-card>
          <xds-action-card label="Importar" style={{ width: '160px', height: '160px' }}>
            <xds-icon slot="icon" name="upload" size="lg" />
          </xds-action-card>
          <xds-action-card label="Conectar" style={{ width: '160px', height: '160px' }}>
            <xds-icon slot="icon" name="link" size="lg" />
          </xds-action-card>
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-action-card — em grid</div>
        <div className="pg-canvas" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 160px)', gap: 16 }}>
          <xds-action-card label="Adicionar" />
          <xds-action-card label="Adicionar" />
          <xds-action-card label="Adicionar" />
        </div>
      </div>

      <div className="pg-group">
        <div className="pg-group__label">xds-action-card — desabilitado</div>
        <div className="pg-canvas pg-canvas--column">
          <xds-action-card label="Adicionar" disabled style={{ width: '160px', height: '160px' }} />
        </div>
      </div>
    </>
  );
}
