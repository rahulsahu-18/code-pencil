import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="h-[calc(100dvh-60px)] w-full bg-[#0d0d0d] text-white flex flex-col justify-center items-center px-6 overflow-hidden">

      {/* Pencil with wiggle hover + float */}
      <div className="mb-8 relative animate-float animate-wiggle cursor-pointer">
        {/* Body */}
        <div className="w-24 h-4 bg-yellow-400 rounded-lg shadow-lg"></div>

        {/* Eraser */}
        <div className="w-5 h-4 bg-pink-500 rounded-r-lg absolute right-[-20px] top-0 shadow-xl"></div>

        {/* Tip */}
        <div className="absolute left-[-15px] top-0 
          w-0 h-0 
          border-t-[8px] border-t-transparent 
          border-b-[8px] border-b-transparent 
          border-r-[15px] border-r-blue-500">
        </div>
      </div>

      {/* Title */}
      <h1 className="text-6xl md:text-7xl font-extrabold animate-pop">
        Code <span className="bg-gradient-to-r from-yellow-300 to-blue-400 bg-clip-text text-transparent animate-shine">Pencil</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 mt-4 max-w-xl text-center animate-fade">
        A fast and modern code playground. Write, compile & share instantly.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-10 animate-fade">
        
        <Link to="/compiler">
          <Button className="px-7 py-5 text-lg font-semibold animate-glow">
            Start Coding
          </Button>
        </Link>

        <Link to="/login">
          <Button variant="outline" className="px-7 py-5 text-lg font-semibold border-gray-500 hover:bg-gray-800">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
