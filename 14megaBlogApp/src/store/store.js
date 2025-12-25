import configureStore from '@reduxjs/toolkit';
import reducer from './authSlice';
// import reducer from './postSlice';


const store = configureStore({
  reducer: {
    }
})

export default store;