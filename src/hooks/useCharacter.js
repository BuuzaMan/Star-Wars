import { useEffect, useState } from "react";
import { charactersSlice, fetchData } from "../store/slices/charactersSlice";
import  { characterSelector, currentPageSelector } from "../store/selectors"
import { useDispatch, useSelector } from "react-redux";

function useCharacters () {
    const dispatch = useDispatch();
    const nextPage = () => dispatch(charactersSlice.actions.nextPage());
    const prevPage = () => dispatch(charactersSlice.actions.prevPage());
  

    const currentPage = useSelector(currentPageSelector);

    const characterSliceState = useSelector(characterSelector);

    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState(
      characterSliceState[currentPage]?.entities || []
    );
    
    useEffect(() => {
        dispatch(fetchData(currentPage));
      }, [currentPage, dispatch]);

    useEffect(() => {
        if (
          characterSliceState[currentPage].loading === "idle" ||
          characterSliceState[currentPage].loading === "pending"
        )
        {setIsLoading(true);
        } else {setIsLoading(false);
        }
  
      setCharacters(characterSliceState[currentPage]?.entities || []);
    }, [characterSliceState, currentPage]);
    
      return {
        characters,
        currentPage,
        isLoading,
        nextPage,
        prevPage,
      };
}

export default useCharacters;