import Test from './components/pages/Test';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header';
import { inject } from '@vercel/analytics';

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;

inject();
