import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Just testing",
};

function MainNav() {
  return (
    <div style={{backgroundColor:'red'}}>
      <h1>-- navbar --</h1>
    </div>  
);
}

function Footer() {
  return (
    <div style={{backgroundColor:'blue'}}>
      <h1>Contact Info/FAQ</h1>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNav></MainNav>
        {children}
        <Footer></Footer>
      </body>
      
    </html>
  );
}
