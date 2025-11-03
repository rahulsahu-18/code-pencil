// import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Compiler from "./pages/Compiler"
import Notfound from "./pages/Notfound"

function App() {
  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/compiler" element={<Compiler/>}/>
        <Route path="/compiler/:url" element={<Compiler/>}/>
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </ThemeProvider>
    </>
  )
}

export default App