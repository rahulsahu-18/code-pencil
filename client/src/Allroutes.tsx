import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Compiler from "./pages/Compiler";
import Notfound from "./pages/Notfound";
import Loader from "./loader/Loder";
import Mycode from "./pages/Mycode";

function Allroutes() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-[calc(100dvh-60px)] flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/my-code" element={<Mycode />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/compiler/:url?" element={<Compiler />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Suspense>
  );
}

export default Allroutes;
