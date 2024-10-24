function ChildComponent({render}) {

    return (
        <>
            <h1 className="text-red-500">Child Component</h1>
            {render()}
        </>

    );
}

export default ChildComponent