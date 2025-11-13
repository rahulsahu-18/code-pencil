import { useForm } from "react-hook-form";
import "./pagestyle/patternstyle.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegisterMutation } from "@/redux/slice/api";
import { handleError } from "@/utils/handleError";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slice/userSlice";

const formSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});
function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  async function handleRegister(values: z.infer<typeof formSchema>) {
    try {
      const response = await register(values).unwrap();
      dispatch(updateCurrentUser(response));
      dispatch(updateIsLoggedIn(true));
      navigate("/");
    } catch (error) {
      handleError(error);
      console.log(error);
    }
  }
  return (
    <div className="__login grid-style w-full h-[calc(100dvh-60px)] flex justify-center items-center flex-col gap-3">
      <div className="__form_container border-[3px] h-full sm:h-fit bg-black border-[1px] py-8 px-4 flex flex-col gap-5 w-full sm:w-[300px]">
        <div className="flex flex-col gap-3 font-mono">
          <h1 className="text-4xl font-bold text-left">User Register</h1>
          <p className="font-mono text-xs">
            Join the community of expert frontend developers🧑‍💻.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegister)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full cursor-pointer" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Register;
