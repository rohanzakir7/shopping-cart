import { configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore ,FLUSH, PAUSE, PERSIST, REGISTER, REHYDRATE} from "redux-persist";
import { addtoCart } from "../reducer/reducer";

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig,cart:cartSlice);

export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware ({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER]
        }
    })
});

export const persist = persistStore(store);
