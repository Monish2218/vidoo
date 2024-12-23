import {createContext, useContext, useState, useEffect, ReactNode, useMemo} from 'react';
import { getVideos } from '@/services/api';
import { Video } from '@/services/types';

interface VideoContextType {
  videos: Video[];
  loading: boolean;
}

const VideoContext = createContext<VideoContextType | null>(null);

export const VideoProvider = ({children}: {children: ReactNode}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
        try {
            const data = await getVideos();
            setVideos(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    fetchVideos();
  }, []);

  const value = useMemo(() => ({ videos, loading }), [videos, loading]);

  return (
    <VideoContext.Provider value={value}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => useContext(VideoContext);