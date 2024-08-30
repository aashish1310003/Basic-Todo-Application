
import './counter.css'

function Counter({by, count, setCount }){

    function incrementCounterFunction(){
        const temp = count+by;
        setCount(temp)  
        console.log(count)
   }
   function decrementCounterFunction(){
    const temp = count-by;
    setCount(temp)
    console.log(count)
   }

    
    return <div className="Counter">
         
        <div>
            <button className="counterButton" 
                onClick={incrementCounterFunction}
                >
            {by}</button>
        </div>

        <div>
            <button className="counterButton" 
                onClick={decrementCounterFunction}
                >
            -{by}</button>
        </div>

    </div>
}



export default Counter;