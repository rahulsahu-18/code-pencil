import { Link } from "react-router-dom"
import { Button } from "./ui/button"

function Header() {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
       <Link to='/' className="text-xl font-bold select-none">CODE PENCIL</Link>
       <ul className="flex gap-2">
        <li>
         <Link to='/compiler'>
         <Button variant="secondary" className="text-xl">Compiler</Button>
         </Link>
        </li>
        <li>
         <Link to='/login'>
         <Button variant="blue" className="text-xl">Login</Button>
         </Link>
        </li>
        <li>
         <Link to='/register'>
         <Button variant="blue" className="text-xl">Register</Button>
         </Link>
        </li>
       </ul>
    </nav>
  )
}

export default Header