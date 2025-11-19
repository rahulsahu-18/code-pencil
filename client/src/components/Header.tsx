import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import { useLogoutMutation } from "@/redux/slice/api";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slice/userSlice";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  const [logout] = useLogoutMutation();
  const currentUser = useSelector(
    (state: RootState) => state.userSlice.currentUser
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => state.userSlice.isLoggedIn
  );

  async function handleLogOut() {
    try {
      await logout().unwrap();
      dispatch(updateIsLoggedIn(false));
      dispatch(updateCurrentUser({}));
      navigate("/");
      toast.success("user loggout successfully !!");
    } catch (error) {
      handleError(error);
    }
  }
  return (
   <nav className="w-full h-[60px] bg-gray-900/70 backdrop-blur-md border-b border-white/10 text-white px-6 flex justify-between items-center shadow-md">

  <Link to="/" className="text-xl font-extrabold tracking-wide select-none hover:text-yellow-300 transition">
    CODE PENCIL
  </Link>

  <ul className="flex gap-3 items-center">
    {!isLoggedIn ? (
      <>
        <li>
          <Link to="/login">
            <Button 
              variant="blue" 
              className="text-lg cursor-pointer px-5 py-2 shadow-sm hover:shadow-blue-500/40 transition-all"
            >
              Login
            </Button>
          </Link>
        </li>

        <li>
          <Link to="/register">
            <Button 
              variant="blue" 
              className="text-lg cursor-pointer px-5 py-2 shadow-sm hover:shadow-blue-500/40 transition-all"
            >
              Register
            </Button>
          </Link>
        </li>
      </>
    ) : (
      <>
        <li>
          <Link to="/compiler">
            <Button 
              variant="secondary" 
              className="text-lg cursor-pointer px-5 py-2 hover:bg-gray-700 transition"
            >
              Compiler
            </Button>
          </Link>
        </li>

        <li>
          <Link to="/my-code">
            <Button 
              className="text-lg cursor-pointer px-5 py-2 hover:shadow-yellow-500/40 transition"
              variant="blue"
            >
              My Codes
            </Button>
          </Link>
        </li>

        <li>
          <Button
            variant="destructive"
            className="text-lg cursor-pointer px-5 py-2 hover:shadow-red-500/30 transition"
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </li>

        <li>
          <Avatar className="ring-2 ring-yellow-400 hover:scale-105 transition cursor-pointer">
            <AvatarImage src={currentUser.picture} />
            <AvatarFallback className="font-semibold">
              {currentUser.userName?.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </li>
      </>
    )}
  </ul>
</nav>

  );
}

export default Header;
