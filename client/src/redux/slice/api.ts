import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { initialStateType } from "./compilerSlice";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://code-pencil-18.onrender.com",
    credentials: "include",
  }),
  tagTypes: ["myCodes"],
  endpoints: (builder) => ({
    saveCode: builder.mutation<{ url: string; status: string }, saveBodyType>({
      query: (fullCode) => {
        return {
          url: "/compile/saveCode",
          method: "POST",
          body: fullCode,
        };
      },
      invalidatesTags: ["myCodes"],
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
    register: builder.mutation<userInfoTypes, registerCradentialType>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    getUserDetails: builder.query<userInfoTypes, void>({
      query: () => ({ url: "/auth/userInfo", cache: "no-store" }),
    }),
    getMycode: builder.query<[codeType],void>({
      query: () => ({ url: "/compile/my-codes" }),
       providesTags: ["myCodes"],
    }),
    deleteCode: builder.mutation<void,string>({
      query:(id) => ({
        url:`/compile/delete/${id}`,
        method:"DELETE",
      }),
      invalidatesTags: ["myCodes"]
    })
  }),
});

export const {
  useSaveCodeMutation,
  useLoadCodeMutation,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetUserDetailsQuery,
  useGetMycodeQuery,
  useDeleteCodeMutation,
} = api;
export default api;
