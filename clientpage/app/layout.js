import './globals.css';
import { ThemeProvider } from 'next-themes';
export const metadata = {
  title: "Jevinik..",
  description: "Serving Meals to Millions with benefits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="duration-300">
      <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}