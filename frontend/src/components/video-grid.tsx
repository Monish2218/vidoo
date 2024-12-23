"use client"

import { useState} from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from 'lucide-react'
import { Link } from "react-router"
import { useVideos } from "@/context/VideoContext"

export function VideoGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
 
  const videosContext = useVideos()
  const isLoading = videosContext?.loading;
  const videos = videosContext?.videos || [];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["Hype", "Reach", "Impact", "Trend", "Engage"].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {!isLoading && videos.map((video) => (
            <Link to={`/video/${video._id}`} key={video._id}>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
                  {video.score}/100
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-medium line-clamp-2">{video.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag) => (
                    <span key={tag} className="text-xs text-purple-600">
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">Created on: {video.uploadedAt}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

