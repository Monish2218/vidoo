import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { login, register, setAuthToken } from "@/services/api"
import { useNavigate } from "react-router"
import { CustomError } from "@/services/types"

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, isLogin: boolean) => {
    e.preventDefault()
    setIsLoading(true);
    setError("")
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      if(isLogin){
        const token = await login(email, password);
        setAuthToken(token.token);
        localStorage.setItem('token', token.token);
      } else {
        const name = formData.get('name') as string;
        await register(name, email, password);
      }
      navigate('/upload');
    } catch (error: unknown) {
      setError((error as CustomError)?.response?.data?.message || "An error occurred")
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-purple-600">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Welcome to Vidoo</CardTitle>
          <CardDescription>
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <Button className="w-full" disabled={isLoading}>
                  {isLoading ? "Loading..." : "Login"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <Button className="w-full" disabled={isLoading}>
                  {isLoading ? "Loading..." : "Register"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        </CardContent>
      </Card>
    </div>
  )
}

