import CodeEditor from "@/components/CodeEditor"
import HelperHeader from "@/components/HelperHeader"
import RenderCode from "@/components/RenderCode"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

function Compiler() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50} className="h-[calc(100dvh-60px)] min-w-[350px]">
        <HelperHeader/>
         <CodeEditor/>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="h-[calc(100dvh-60px)] min-w-[350px]">
          <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Compiler