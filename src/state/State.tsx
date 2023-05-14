import { useEffect, useState } from "react";

export function ExampleUseState(){
    const [loading, setLoading] = useState(false);
    const arr: number[] = [];
    const [data, setData] = useState(arr);
    const [page, setPage] = useState(1);

    function loadData(){
        console.log('loadData');
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            if(page === 1) setData([1,2,3,4,5]);
            else if(page === 2) setData([6,7,8,9,10]);
            else setData([]);

            //setData(data => [...data, data.length]);
        }, 3000);
    }

    function handleNext() {
        console.log('handleNext event handler');
        setPage((currentPage) => currentPage + 1);
    }

    //after first render AND subsequent renders caused by a change in a dependency in this case "page"
    useEffect(loadData, [page]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {data && <pre>{JSON.stringify(data, null, ' ')}</pre>}
            <span>Current Page: {page}</span>
            {/* <button onClick={loadData}>Load Data</button> */}
            <button onClick={handleNext}>Next</button>
        </>
    );
}