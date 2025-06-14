import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import { cn } from 'shared/lib';

import 'app/styles/global.css';

import { AuthProvider } from '@shared/lib/auth';
import { I18nProvider } from '@shared/providers';
import { ReduxProvider } from '@shared/providers/ReduxProvider';

import { AppSidebar } from 'widgets';
import { SidebarProvider } from 'shared/ui';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Next.js Template',
  description:
    'This Next.js template provides a ready-to-use setup for building fast, scalable web apps.',
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-white text-gray-600 transition-all duration-1000 ease-in-out dark:bg-gray-600 dark:text-white',
          urbanist.className,
        )}
      >
        <AuthProvider>
          <I18nProvider>
            <ReduxProvider>
              <SidebarProvider>
                <AppSidebar />
                <main className="flex-1">{children}</main>
              </SidebarProvider>
            </ReduxProvider>
          </I18nProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
