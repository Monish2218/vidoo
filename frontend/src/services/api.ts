import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(new Error(`Request configuration failed: ${error.message}`))
)

export const uploadVideo = async (videoUrl: string, keywords: string) => {
  const response = await api.post('/videos/upload', { url: videoUrl, keywords })
  return response.data
}

export const getVideos = async () => {
  const response = await api.get('/videos/my-videos')
  return response.data
}

export const getVideoById = async (id: string) => {
  const response = await api.get(`/videos/${id}`)
  return response.data
}

export const updateVideo = async (id: string, data: unknown) => {
  const response = await api.put(`/videos/${id}`, data)
  return response.data
}

export const deleteVideo = async (id: string) => {
  const response = await api.delete(`/videos/${id}`)
  return response.data
}

export const register = async (name: string, email: string, password: string) => {
  const response = await api.post('/auth/register', { name, email, password })
  return response.data
}

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password })
  return response.data
}

export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const clearAuthToken = () => {
  delete api.defaults.headers.common['Authorization']
}

