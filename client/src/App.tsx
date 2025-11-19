// import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Allroutes from "./Allroutes"
import { useGetUserDetailsQuery } from "./redux/slice/api"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentUser, updateIsLoggedIn } from "./redux/slice/userSlice";

function App() {
  const dispatch = useDispatch();
  const {data,error} = useGetUserDetailsQuery();
  useEffect(()=>{
    if(data)
    {
      dispatch(updateCurrentUser(data));
      dispatch(updateIsLoggedIn(true));
    }else{
      dispatch(updateCurrentUser({}));
      dispatch(updateIsLoggedIn(false));
    }
  },[data,error])
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