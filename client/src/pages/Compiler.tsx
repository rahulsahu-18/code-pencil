import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

function Compiler() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50} className="h-[calc(100dvh-60px)] min-w-[350px]">
   
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="h-[calc(100dvh-60px)] min-w-[350px]">
          
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Compiler