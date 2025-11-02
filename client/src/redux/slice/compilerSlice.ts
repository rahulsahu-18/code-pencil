import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface initialStateType {
  currentLanguge: "js" | "html" | "css";
  fullCode: {
    html: string;
    css: string;
    js: string;
  };
}

const initialState: initialStateType = {
  currentLanguge: "html",
  fullCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>Hello, World!</h1>
  <button id="clickMe">Click Me</button>

</body>
</html>
`,
    css: `body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f5f5f5;
  margin: 0;
  padding-top: 50px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
`,
    js: `document.getElementById("clickMe").addEventListener("click", () => {
  alert("say Hello World !!");
});
`,
  },
};

const compilerSlice = createSlice({
  name: "compiler",
  initialState,
  reducers: {
    updateCurrentLanguge: (
      state,
      action: PayloadAction<initialStateType["currentLanguge"]>
    ) => {
      state.currentLanguge = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguge] = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguge, updateCodeValue } = compilerSlice.actions;
