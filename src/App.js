import Test from './components/pages/Test';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header';
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
