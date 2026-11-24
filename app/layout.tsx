import type { Metadata } from 'next';
import './portfolio.css';
export const metadata: Metadata = {
  title: 'Jiacai Song | Moves & Makes',
  description: 'Portfolio.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
                const previousRestoration = history.scrollRestoration;
                history.scrollRestoration = 'manual';

                window.addEventListener('pageshow', () => {
                  requestAnimationFrame(() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    history.scrollRestoration = previousRestoration;
                  });
                }, { once: true });
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
