import { notFound } from 'next/navigation';
import AppShell from '@/components/AppShell';
import { isPageId } from '@/lib/navigation';
import { PAGE_COMPONENTS } from '@/lib/page-components';

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!isPageId(slug)) {
    notFound();
  }

  const Page = PAGE_COMPONENTS[slug];

  return (
    <AppShell currentPage={slug}>
      <Page />
    </AppShell>
  );
}
