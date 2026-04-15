import AppShell from '@/components/AppShell';
import HomePage from '@/components/pages/HomePage';

export default function Home() {
  return (
    <AppShell currentPage="home">
      <HomePage />
    </AppShell>
  );
}
