import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Showcase from './components/sections/Showcase';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ShowcasePage from './pages/Showcase';

function App() {
  const path = window.location.pathname;

  if (path === '/pricing') {
    return <Pricing />;
  }

  if (path === '/about') {
    return <About />;
  }

  if (path === '/login') {
    return <Login />;
  }

  if (path === '/signup') {
    return <Signup />;
  }

  if (path === '/showcase') {
    return <ShowcasePage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;