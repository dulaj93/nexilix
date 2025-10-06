import type { Metadata } from 'next';
import { baseMetadata } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatbotButton from '@/components/ChatbotButton';
import StickyCTA from '@/components/StickyCTA';

export const metadata: Metadata = baseMetadata();

export default function SiteLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="content" className="flex-1">{children}</main>
      <Footer />
      <ChatbotButton />
      <StickyCTA />
    </div>
  );
}
