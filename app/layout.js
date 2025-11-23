
import "./globals.css";


// placeholders for font variables used in the body className
const geistSans = { variable: "geistSans" };
const geistMono = { variable: "geistMono" };

export const metadata = {
  title: "Lipsa's Portfolio",
  description: "My portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        

        {children}
      </body>
    </html>
  );
}
