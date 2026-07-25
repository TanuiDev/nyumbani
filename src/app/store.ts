import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import loginApi from "../features/auth/loginAPI";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  version: 1,
    storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
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