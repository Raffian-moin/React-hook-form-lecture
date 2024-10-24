import ChildComponent from './ChildComponent';

function ParentComponent() {

    return (
        <ChildComponent render={(data) => <h1>I'm a render props</h1>} />
    );
}

export default ParentComponent