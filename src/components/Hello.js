import './Hello.css';

function Hello(props){
    return (
        <>
        <h1>Hello!!</h1>
        <h2>name: {props.name}</h2>
        </>
    );
}

export default Hello;