import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from '../reducers/rootReducer'; // Importez votre rootReducer

// Configuration de Redux Persist.
const persistConfig = {
    key: 'root',
    storage
};

// Crée un nouveau reducer persistant combinant le rootReducer avec la configuration de Redux Persist.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure le store Redux.
const store = configureStore({
    reducer: persistedReducer, // Utilise le reducer persistant.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Désactive les vérifications de sérialisation des actions et du state.
        }),
});

// Crée un persistor qui permettra de maintenir le state persistant.
const persistor = persistStore(store);

// Exporte le store configuré et le persistor pour être utilisés dans l'application.
export { store, persistor };