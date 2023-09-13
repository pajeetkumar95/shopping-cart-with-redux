import { configureStore } from '@reduxjs/toolkit'
import Shopping  from '../Slice'


export default configureStore({
    reducer: {
        shoppingcart : Shopping,
    },
})