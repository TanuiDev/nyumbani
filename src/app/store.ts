import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import loginApi from "../features/auth/loginAPI";
import userReducer from "../features/auth/userSlice";

// Workaround for a Vite/Rolldown CJS-interop bug where
// `redux-persist/lib/storage`'s default export doesn't resolve
// correctly through Vite's CJS interop, so use a plain localStorage adapter.
const storage = {
  getItem(key: string) {
    return Promise.resolve(window.localStorage.getItem(key));
  },
  setItem(key: string, value: string) {
    window.localStorage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem(key: string) {
    window.localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: "root",
  version: 1,
    storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  [loginApi.reducerPath]: loginApi.reducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
    .concat(loginApi.middleware),

})
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;