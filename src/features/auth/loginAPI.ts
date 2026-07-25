import { ApiUrl } from "../../utils/apiURL";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export type TloginResponse = {
  accesstoken: string;
  user: {
    id: number;
    userName: string;
    emailAddress: string;
    phoneNumber: string;
     role: string;
  };
};
export type loginInput = {
  emailAddress: string;
  password: string;
};

const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ApiUrl,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<TloginResponse, loginInput>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
export default loginApi;