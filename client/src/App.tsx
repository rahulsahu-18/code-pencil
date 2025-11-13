// import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Allroutes from "./Allroutes"

function App() {
  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
     <Allroutes/>
    </ThemeProvider>
    </>
  )
}

export default App