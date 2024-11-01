import { ReCaptchaProvider } from 'next-recaptcha-v3';
import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
  title: {
    template: '%s | Narrate AI',
    default: 'Narrate AI'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lofi">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="antialiased text-white bg-blue-900">
        <ReCaptchaProvider>
          <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
            <div className="flex flex-col w-full max-w-5xl mx-auto grow">
              <Header />
              <div className="grow">{children}</div>
              <Footer />
            </div>
          </div>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
