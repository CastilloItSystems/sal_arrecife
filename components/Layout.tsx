import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChat from './AIChat';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Layout;