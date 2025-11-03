import { Copy, Loader, Save, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentLanguge } from "@/redux/slice/compilerSlice";
import type { RootState } from "@/redux/store";
import type { initialStateType } from "@/redux/slice/compilerSlice";
import { handleError } from "@/utils/handleError";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
function HelperHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { url } = useParams();
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const defaultValue = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguge
  );

  const [loader, setLoader] = useState<boolean>(false);
  const [shareBtn, setShareBtn] = useState<boolean>(false);

  const handleSaveCode = async () => {
    setLoader(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/compile/saveCode",
        {
          fullCode,
        }
      );
      console.log(response.data);
      navigate(`/compiler/${response.data.url}`);
      toast.success("code saved successfully");
    } catch (e) {
      handleError(e);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (!url) setShareBtn(false);
    else setShareBtn(true);
  }, [url]);
  return (
    <div className="h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="flex gap-2">
        <Button
          onClick={handleSaveCode}
          variant="success"
          disabled={loader}
          className="cursor-pointer flex justify-center items-center"
        >
          {loader ? (
            <div className="flex gap-2 items-center justify-center">
              saving... <Loader className="animate-spin" />
            </div>
          ) : (
            <>
              <Save size={16} /> save
            </>
          )}
        </Button>
        {shareBtn && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                {" "}
                <Share2 /> Share
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                  Share The Link To Yours Friend And Colabrate
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                  <label htmlFor="link" className="sr-only">
                    Link
                  </label>
                  <input id="link" value={window.location.href} readOnly />
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <div className="flex w-full justify-between p-4">
                    <Button type="button" variant="success">
                      Close
                    </Button>
                    <Button
                      onClick={() => {
                        window.navigator.clipboard.writeText(
                          window.location.href
                        );
                        toast.success("link copied to clipboard");
                      }}
                    >
                      <Copy />
                      Copy
                    </Button>
                  </div>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <div className="_tab_switcher flex justify-center items-center gap-3">
        <small>Current Languge</small>
        <Select
          defaultValue={defaultValue}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguge(value as initialStateType["currentLanguge"])
            )
          }
        >
          <SelectTrigger className="w-[180px] ">
            <SelectValue placeholder="HTML" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="js">JAVA SCRIPT</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default HelperHeader;
