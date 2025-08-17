import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      {/* Parallel route for intercepted modals */}
      {modal}
      {/* Floating WhatsApp CTA */}
      <WhatsAppFAB />
    </div>
  );
}
