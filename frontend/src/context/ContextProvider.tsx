import {ReactNode} from 'react';
import { VideoProvider } from './VideoContext';
import { AuthProvider } from './AuthContext';
import { Toaster } from 'react-hot-toast';

export default function ContextProvider({children} : {readonly children: ReactNode}) {
  return (
    <AuthProvider>
      <Toaster />
      <VideoProvider>
          {children}
      </VideoProvider>
    </AuthProvider>
  )
}
