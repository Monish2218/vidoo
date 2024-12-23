import {ReactNode} from 'react';
import { VideoProvider } from './VideoContext';

export default function ContextProvider({children} : {readonly children: ReactNode}) {
  return (
    <VideoProvider>
        {children}
    </VideoProvider>
  )
}
