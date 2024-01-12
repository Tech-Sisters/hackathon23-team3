import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage"
import authReducer from "../redux/reducers/authReducers"; 

const userReducer = combineReducers({
      auth: authReducer 
})

const persistConfig = {
      key: "root",
      storage: localStorage,
      whitelist: ["auth", "token"]
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
      reducer: persistedReducer,
    
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false
      })
})
    
export const persistor = persistStore(store)
