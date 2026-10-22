import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Careers from './pages/Careers';
import AboutUs from './pages/AboutUs';
import TalkToExpert from './pages/TalkToExpert';
import BlogModal from './components/BlogModal';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'CapitalLinks';
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = '/logo-icon.png?v=3';
  }, []);

  useEffect(() => {
    if (location.pathname === '/blog' || location.pathname === '/insights') {
      setIsBlogOpen(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleOpenBlog = () => setIsBlogOpen(true);
    window.addEventListener('open-blog-modal', handleOpenBlog);
    return () => window.removeEventListener('open-blog-modal', handleOpenBlog);
  }, []);

  const handleCloseBlog = () => {
    setIsBlogOpen(false);
    if (location.pathname === '/blog' || location.pathname === '/insights') {
      navigate('/');
    }
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/talk-to-expert" element={<TalkToExpert />} />
        <Route path="/contact" element={<TalkToExpert />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/insights" element={<Home />} />
      </Routes>
      <BlogModal isOpen={isBlogOpen} onClose={handleCloseBlog} />
    </>
  );
}

export default App;
