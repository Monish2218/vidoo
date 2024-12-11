"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Share2, Download, Edit } from 'lucide-react'

export function VideoDetail() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-semibold">Video title ipsum dolor sit amet</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Advanced Edit
            </Button>
          </div>
        </div>
      </header>
        <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full"
                src="/placeholder.mp4"
              />
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Hashtags</label>
                <Input defaultValue="#ViralScore #BuzzMeter #ContentImpact" />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  className="min-h-[200px]"
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Transcript</h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50">
                  <span className="text-sm text-gray-500">
                    {`${Math.floor(i / 2)}:${(i % 2) * 30}`}
                  </span>
                  <p className="flex-1 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
  )
}

