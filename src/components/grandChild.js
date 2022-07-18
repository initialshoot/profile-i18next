import GreatGrandson from "./greatGrandson";

import { FaAngleDoubleRight } from "react-icons/fa";
import { useContext } from "react";

import { GlobalContext } from "../context/global/context";

const GrandChild = () => {
    const { add } = useContext(GlobalContext);

    return (
        <div>
            <div className="grand-child">
            
                <button 
                onClick={add}
                >
                Contar Visita 
                <FaAngleDoubleRight /> 
                </button>
                
            </div>
            
            <GreatGrandson/>
        </div>
    );
};
export default GrandChild;