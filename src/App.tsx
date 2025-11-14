import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MediaPage from './pages/MediaPage';
import WeddingPage from './pages/WeddingPage';


const App = () => {
  return (
    <Router basename="/photo-portfolio">
      <Routes>
        <Route path="/" element={<Navigate to="/wedding" replace />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/wedding" element={<WeddingPage />} />
      </Routes>
    </Router>
  );
};

export default App;

