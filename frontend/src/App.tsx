import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthForm } from './components/auth-form';
import { VideoUpload } from './components/video-upload';
import { VideoGrid } from './components/video-grid';
import { VideoDetail } from './components/video-detail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path='/upload' element={<VideoUpload/>} />
        <Route path='/grid' element={<VideoGrid/>} />
        <Route path='/detail' element={<VideoDetail/>} />
      </Routes>
    </Router>
  )
}

export default App
