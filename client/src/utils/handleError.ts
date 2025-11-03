import { AxiosError } from "axios";
import { toast } from "sonner";

export const handleError = (error:unknown) => {
    if (error instanceof AxiosError) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong while making a request.";
    toast.error(message);
    console.error(message);
    return;
  }

    toast.error("Unexpected error occurred");
  console.error(error);
};