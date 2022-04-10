import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

import auth from '../pages/LogInPage/reducers';
import pokemonsPage from '../pages/PokemonsPage/reducers';
import signup from '../pages/SignUpPage/reducers';
import pokemonDetailsPage from '../pages/PokemonDetailsPage/reducers';
import cartPage from '../pages/CartPage/reducers';
import userPage from '../pages/UserPage/reducers';

const authBlackListedFields = createBlacklistFilter('auth', [
   'isLoading',
   'errors',
]);

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['auth'], 
   transforms: [authBlackListedFields],
};

const rootReducer = combineReducers({
   auth,
   pokemonsPage,
   signup,
   pokemonDetailsPage,
   cartPage,
   userPage,
});

export default persistReducer(persistConfig, rootReducer);