import {BrowserRouter as Router, Routes, Route} from 'react-router';
import { AuthForm } from './components/auth-form';
import { VideoUpload } from './components/video-upload';
import { VideoGrid } from './components/video-grid';
import { VideoDetail } from './components/video-detail';
import Home from '@/components/home';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path='/upload' element={<VideoUpload/>} />
        <Route path='/videos' element={<VideoGrid/>} />
        <Route path='/video/:id' element={<VideoDetail/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
