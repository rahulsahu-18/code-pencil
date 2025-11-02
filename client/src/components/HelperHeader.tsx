import { Save, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentLanguge } from "@/redux/slice/compilerSlice";
import type { RootState } from "@/redux/store";
import type { initialStateType } from "@/redux/slice/compilerSlice";
function HelperHeader() {
  const dispatch = useDispatch();
  const defaultValue = useSelector((state:RootState)=>state.compilerSlice.currentLanguge)
  return (
    <div className="h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="flex gap-2">
        <Button
          variant="success"
          className="cursor-pointer flex justify-center items-center"
        >
          <Save size={16} />
          save
        </Button>
        <Button className="cursor-pointer flex justify-center items-center">
          <Share2 size={16} />
          <p>share</p>
        </Button>
      </div>

      <div className="_tab_switcher flex justify-center items-center gap-3">
        <small>Current Languge</small>
        <Select defaultValue={defaultValue} onValueChange={(value)=>dispatch(updateCurrentLanguge(value as initialStateType["currentLanguge"]))}>
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
