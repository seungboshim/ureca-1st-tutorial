const Clock = () => {
    // const tick = () => {
    //     const element = (
    //         <div>
    //             <h1>Hello, world!</h1>
    //             <h2>It is {new Date().toLocaleTimeString()}.</h2>
    //         </div>
    //     );
    //     ReactDOM.render(element, document.getElementById('root'));
    // }

    // setInterval(tick, 1000);

    return (
        <div>
            <h1>안뇽리액트!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;