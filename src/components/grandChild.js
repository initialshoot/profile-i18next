import GreatGrandson from "./greatGrandson";

import { FaAngleDoubleRight } from "react-icons/fa";
import { useState } from "react";

const GrandChild = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className="grand-child">
            
                <button 
                onClick={() => setCount((current) => current +1)}
                >
                Contar Visita 
                <FaAngleDoubleRight /> 
                </button>
                
            </div>
            
            <GreatGrandson count={count}/>
        </div>
    );
};
export default GrandChild;