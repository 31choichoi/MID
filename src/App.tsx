import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
import BundangInterior from './pages/BundangInterior';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const DynamicSEO = () => {
  const { pathname } = useLocation();
  const cleanPath = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  const canonicalUrl = `https://minterior.kr${cleanPath}`;

  const isMainDomain = typeof window !== 'undefined' && window.location.hostname === 'minterior.kr';
  const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname.includes('127.0.0.1'));
  const isDevSandbox = typeof window !== 'undefined' && (window.location.hostname.includes('run.app') || window.location.hostname.includes('ais-dev') || window.location.hostname.includes('ais-pre'));

  // Prevent crawling on duplicate domains or vercel.app domains (while keeping local & dev preview accessible)
  const preventIndexing = !isMainDomain && !isLocalhost && !isDevSandbox;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="twitter:url" content={canonicalUrl} />
      {preventIndexing && (
        <meta name="robots" content="noindex, nofollow, noarchive" />
      )}
    </Helmet>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <DynamicSEO />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/bundang-interior" element={<BundangInterior />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

