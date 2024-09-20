import { useEffect, useState } from "react";

const TestButton = () => {
const [count, setCount] = useState(0);
console.log("testbutton"); 

useEffect(() => {
    console.log('useEffect []');
}, [])

return (
    <div>
        <button onClick={() => setCount(count + 1)} >Tryck! </button>
        {count}
    </div>
)

}

export default TestButton; 