import GreatGrandson from "./greatGrandson";

import { FaAngleDoubleRight } from "react-icons/fa";

const GrandChild = () => {
    return (
        <div>
            <div className="grand-child">
                <button>Contar Visita <FaAngleDoubleRight /> </button>
            </div>
            
            <GreatGrandson />
        </div>
    );
};
export default GrandChild;