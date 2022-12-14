import React, { useState, useEffect } from "react";
import { PageControl, Button } from "../styles/styles";
import { fetchCharacters } from "../store/characterSlice";
import { useDispatch } from "react-redux";


function Pagination() {
    const dispatch = useDispatch();

    // State to store count value
    const [count, setCount] = useState(1);

    console.log(count)
    // Function to increment count by 1
    const incrementCount = () => {
        // Update state with incremented value
        setCount(count + 1);

    };
    const dicrementCount = () => {
        // Update state with dicremented value
        if (count > 1) {
            setCount(count - 1);
        }

    };

    useEffect(() => {

        console.log(count)
        dispatch(fetchCharacters(count));


    }, [dispatch, count]);


    return (
        <PageControl>
            <Button onClick={dicrementCount}>Back</Button>
            <p>{count}</p>
            <Button onClick={incrementCount}>Next</Button>
        </PageControl>
    );
}
export default Pagination;
