import AppShell from '@/components/AppShell';

export default function NotFound() {
  return (
    <AppShell>
      <section className="ds-demo-page">
        <header className="ds-page-header">
          <h1>Página não encontrada</h1>
          <p>A rota solicitada não existe neste host de testes Next SSR.</p>
        </header>
      </section>
    </AppShell>
  );
}
