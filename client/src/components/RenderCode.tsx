import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function RenderCode() {
    const allCode = useSelector((state:RootState)=>state.compilerSlice.fullCode)
    const renderCode = `<html><style>${allCode.css}</style><body>${allCode.html}</body><script>${allCode.js}</script></html>`;
    const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    renderCode
  )}`;
  return (
     <div className="bg-white h-full sm:h-[calc(100dvh-60px)]">
      <iframe
        title="rendered-code"
        className="w-full h-full"
        src={iframeCode}
      />
    </div>
  )
}

export default RenderCode