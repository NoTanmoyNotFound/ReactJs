function Welcome(props){
    console.log(props);
    return (
        <>
            <h1>Welcome to React component {props.user}</h1>
        </>
    );
}
export default Welcome;