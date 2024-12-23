export interface CustomError{
    response: {
        data: {
            message: string
        }
    }
}

export interface Video {
  _id: string
  user: string
  title: string
  description: string
  url: string
  thumbnail?: string
  score?: number
  tags: string[]
  uploadedAt: string
}