import { ApiUrl } from "../../utils/apiURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";

export type Tuser = {
  id: number;
  userName: string;
  emailAddress: string;
  password: string;
  phoneNumber: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ApiUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.accesstoken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    createUser: builder.mutation<Tuser, Partial<Tuser>>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
   },
    ),
  }),
});

export const { useCreateUserMutation } = userApi;

export default userApi;