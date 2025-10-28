import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MediaPage from './pages/MediaPage';
import WeddingPage from './pages/WeddingPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/wedding" replace />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/" element={<Navigate to="/media" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

