import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function home() {
  return (
    <div className="bg-gradient-to-br from-purple-400 to-purple-600 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Manage Your Videos with Vidoo
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-purple-100 sm:text-2xl md:mt-5 md:max-w-3xl">
            Upload, organize, and repurpose your videos 10x faster with AI-powered tools.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to={"/upload"}>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
  )
}
