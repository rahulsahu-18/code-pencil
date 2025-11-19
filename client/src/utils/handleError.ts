// import { AxiosError } from "axios";
import { toast } from "sonner";

export const handleError = (error:any) => {
    // if (error instanceof AxiosError) {
    // const message =
    //   error.response?.data?.message ||
    //   error.message ||
    //   "Something went wrong while making a request.";
    // toast.error(message);
    // console.error(message);
    // return;
    // }
    console.log(error)
    toast.error(error?.data?.message ||
      error?.message || error?.error ||  "something went worng");

};