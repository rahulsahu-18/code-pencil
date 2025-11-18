import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useLoadCodeMutation } from "@/redux/slice/api";
import { updatedCode } from "@/redux/slice/compilerSlice";
import { handleError } from "@/utils/handleError";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Compiler() {
  const navigate = useNavigate();
  const { url } = useParams();
  const dispatch = useDispatch();

  const[loadCodefun] = useLoadCodeMutation();
  const loadCode = async () => {
    if (!url) return;
    try {
      const responce = await loadCodefun(url).unwrap()
      console.log(responce)
      dispatch(updatedCode(responce.allCode));
    } catch (error) {
      navigate('/compiler');
      handleError(error);
    }
  };
  useEffect(() => {
    loadCode();
  }, [url]);
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        defaultSize={50}
        className="h-[calc(100dvh-60px)] min-w-[350px]"
      >
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={50}
        className="h-[calc(100dvh-60px)] min-w-[350px]"
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Compiler;
