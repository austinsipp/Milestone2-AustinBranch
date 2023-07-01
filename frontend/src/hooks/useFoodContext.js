import { FoodsContext } from "../context/foodContext";
import { useContext } from "react";

export const useFoodsContext = () => {
    const context = useContext(FoodsContext)

    if(!context){
        throw Error('useFoodsContext must be used inside a FoodContextProvider')
    }

    return context
}