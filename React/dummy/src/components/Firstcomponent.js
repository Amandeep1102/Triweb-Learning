function FirstComponent(props)
{
    return <div>
        <h1>{props.owner} application </h1>
        <p> its application- { props.reason}</p>
        <button> click here</button>
    </div>

}

export default FirstComponent;