export function ChildToParent(){

    const handleRequest = (request: string) => {
        if(request.includes('car')) alert('No');
    } 

    return (
        <div>
            <h1>Parent</h1>
            <Child onRequest={handleRequest}></Child>
        </div>
    );
}

function Child(props: ChildProps) {

    const handleClick = () => props.onRequest('Can I have the car?');

    return (
        <div>
            <h2>Child</h2>
            <button onClick={handleClick}>Ask for the car</button>
        </div>
    );
}

interface ChildProps {
    onRequest: (request: string) => void;
}