"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function VideoUpload() {
  const [videoUrl, setVideoUrl] = useState("")
  const [keywords, setKeywords] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement video upload logic
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-purple-600 p-6">
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">
            Now Repurpose your videos, 10x faster.
          </h1>
          <p className="text-lg text-white/90">
            Vidoo allows you to manage video content in just a few clicks, saving you time and effort.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Paste your video link (Live, YouTube, behance)"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="bg-white/90"
          />
          <Textarea
            placeholder="Keywords to include relevant data"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="bg-white/90 min-h-[100px]"
          />
          <Button 
            size="lg" 
            disabled={isLoading}
            className="bg-purple-700 hover:bg-purple-800 text-white px-8"
          >
            {isLoading ? "Processing..." : "Call to Action"}
          </Button>
        </form>
      </div>
    </div>
  )
}

