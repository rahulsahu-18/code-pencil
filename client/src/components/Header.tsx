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
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold select-none">
        CODE PENCIL
      </Link>
      <ul className="flex gap-2">
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login">
                <Button variant="blue" className="text-xl cursor-pointer">
                  Login
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <Button variant="blue" className="text-xl cursor-pointer">
                  Register
                </Button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/compiler">
                <Button variant="secondary" className="text-xl cursor-pointer">
                  Compiler
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/my-code">
                <Button className="text-lg cursor-pointer" variant="blue">
                  My codes
                </Button>
              </Link>
            </li>
            <li>
              <Button
                variant="destructive"
                className="text-xl cursor-pointer"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            </li>

            <li>
              <Avatar>
                <AvatarImage src={currentUser.picture} />
                <AvatarFallback>
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
