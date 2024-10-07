import React from 'react';
import { Home, Info, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header({ onMobileMenuToggle }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">MixMed Safety</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button variant="ghost" className="flex items-center">
              <Info className="w-4 h-4 mr-2" />
              About
            </Button>
            <Button variant="ghost" className="flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" onClick={onMobileMenuToggle}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

// src/components/layout/Footer.jsx
export function Footer() {
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-gray-500 text-sm">
          © 2024 MixMed Safety. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// src/components/layout/MobileMenu.jsx
export function MobileMenu() {
  return (
    <div className="md:hidden bg-white border-t">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="w-4 h-4 mr-2" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Info className="w-4 h-4 mr-2" />
          About
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  );
}

// src/components/layout/Layout.jsx
export function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      {isMobileMenuOpen && <MobileMenu />}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}