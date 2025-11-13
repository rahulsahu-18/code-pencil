import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { initialStateType } from "./compilerSlice";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    saveCode: builder.mutation<
      { url: string; status: string },
      initialStateType["fullCode"]
    >({
      query: (fullCode) => ({
        url: "/compile/saveCode",
        method: "POST",
        body: { fullCode },
      }),
    }),
    loadCode: builder.mutation<
      { success: boolean; allCode: initialStateType["fullCode"] },
      string
    >({
      query: (url) => ({
        url: "/compile/loadCode",
        method: "POST",
        body: { urlId: url },
      }),
    }),
    login: builder.mutation<userInfoTypes, loginCradentialType>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body,
        credentials: "include",
      }),
    }),
     register:builder.mutation<userInfoTypes,registerCradentialType>({
       query:(body)=>({
        url:"/auth/register",
        method:"POST",
        body:body,
       })
     }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useSaveCodeMutation,
  useLoadCodeMutation,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} = api;
export default api;
