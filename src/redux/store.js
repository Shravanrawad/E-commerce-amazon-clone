import { configureStore} from '@reduxjs/toolkit'
import {
       persistStore,
       persistReducer,
       FLUSH,
       REHYDRATE,
       PAUSE,
       PERSIST,
       PURGE,
       REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import amazonReducer from '../redux/amazonslice'

const persistConfig = {
       key: 'root',
       version: 1,
       storage,
}

const persistedReducer = persistReducer(persistConfig, amazonReducer)


const store = configureStore({
       reducer: {
              amazon: persistedReducer,
       },
       middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
           serializableCheck: {
             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
           },
         }),
     })

const persistor = persistStore(store);

export { store, persistor };
