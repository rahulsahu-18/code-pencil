import { useForm } from 'react-hook-form'
import './pagestyle/patternstyle.css'
import { zodResolver } from "@hookform/resolvers/zod"
import {  z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  userId: z.string(),
  password:z.string(),
})
function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      password:"",
    },
  })

   function handleLogin(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div className="__login grid-style w-full h-[calc(100dvh-60px)] flex justify-center items-center flex-col gap-3">
      <div className='__form_container border-[3px] h-full sm:h-fit bg-black border-[1px] py-8 px-4 flex flex-col gap-5 w-full sm:w-[300px]'>
      <div className='flex flex-col gap-3 font-mono'>
        <h1 className='text-4xl font-bold text-left'>Login</h1>
        <p className='font-mono text-xs'>Welcome back fellow coder 😁</p>
      </div>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="email or username" {...field} />
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
                <Input type='password' placeholder="enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full cursor-pointer' type="submit">Submit</Button>
      </form>
    </Form>

      </div>
    </div>
  )
}

export default Login