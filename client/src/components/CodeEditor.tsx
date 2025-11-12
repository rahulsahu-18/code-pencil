import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from '@lezer/highlight';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { updateCodeValue } from "@/redux/slice/compilerSlice";

// import { javascript } from "@codemirror/lang-javascript";

function CodeEditor() {
  const dispatch = useDispatch();
  const currentLanguge = useSelector((state:RootState)=>state.compilerSlice.currentLanguge);
  const fullCode = useSelector((state:RootState)=>state.compilerSlice.fullCode);
  const onChange = React.useCallback((val: string) => {
    dispatch(updateCodeValue(val));
  }, []);
  return (
    <CodeMirror
      value={fullCode[currentLanguge]}
      height="calc(100vh - 60px - 50px)"
      extensions={[loadLanguage(currentLanguge)!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}

export default CodeEditor;
