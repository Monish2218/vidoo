import { Link, NavLink, useNavigate } from "react-router"
import { Button } from "../ui/button"
import { Home, Upload, Film, User } from 'lucide-react'
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function NavBar() {
    const navigate = useNavigate();
    const {user, logout} = useAuth();
    const handleSignOut = () => {
      logout();
      toast.success("Logged out successfully");
      navigate('/');
    }
  return (
    <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">Vidoo</span>
            </Link>
            <nav className="hidden md:flex space-x-4">
              <NavL href="/" icon={<Home className="h-5 w-5" />}>Home</NavL>
              <NavL href="/upload" icon={<Upload className="h-5 w-5" />}>Upload</NavL>
              <NavL href="/videos" icon={<Film className="h-5 w-5" />}>Videos</NavL>
              <NavL href="/profile" icon={<User className="h-5 w-5" />}>Profile</NavL>
            </nav>
            <div className="flex items-center space-x-4">
             {user? <Button onClick={handleSignOut} variant="outline">Sign Out</Button>:<Button onClick={()=>navigate("/auth")} variant="outline">Sign In</Button>}
            </div>
          </div>
        </div>
      </header>
  )
}

function NavL({ href, icon, children }: { readonly href: string, readonly icon: React.ReactNode, readonly children: React.ReactNode }) {  
    return (
      <NavLink to={href} className={({isActive})=> `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
    isActive
      ? 'bg-purple-100 text-purple-700'
      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
  }`}>
        {icon}
        <span>{children}</span>
      </NavLink>
    )
  }