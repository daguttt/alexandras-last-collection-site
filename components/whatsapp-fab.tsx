'use client';

import { WhatsAppLogo } from './whatsapp-logo.component';

const WHATSAPP_NUMBER = '50688823775'; // Cambia a tu número (incluye código de país, sin +, espacios ni guiones)

export function WhatsAppFAB({
  message = 'Hola Alexandra, me interesa conocer la colección actual.',
}: {
  message?: string;
}) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 grid p-2 place-items-center rounded-full shadow-lg"
      style={{ backgroundColor: '#25D366' }}
    >
      <WhatsAppLogo className="size-10" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
