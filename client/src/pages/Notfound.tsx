import { Link } from 'react-router-dom'
function Notfound() {
  return (
      <div className="h-[calc(100dvh-60px)] w-full bg-[#0a0a0a] text-white flex flex-col justify-center items-center text-center px-4 overflow-hidden">

      {/* Floating Pencil */}
      <div className="relative animate-float">
        <div className="w-20 h-3 bg-yellow-400 rounded-lg"></div>

        <div className="w-4 h-3 absolute right-[-15px] top-0 bg-pink-500 rounded-r-lg"></div>

        <div className="absolute left-[-12px] top-0 
          w-0 h-0 
          border-t-[6px] border-t-transparent 
          border-b-[6px] border-b-transparent 
          border-r-[12px] border-r-blue-500">
        </div>
      </div>

      <h1 className="text-[110px] font-bold tracking-wider mt-6 animate-pop">
        404
      </h1>

      <p className="text-lg mt-1">
        <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white pr-2 animate-typing animate-blink">
          Oops! Code Pencil can't find this page...
        </span>
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition transform hover:scale-105"
      >
        Go Home
      </Link>
    </div>
  )
}

export default Notfound