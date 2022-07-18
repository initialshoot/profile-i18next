import GreatGrandson from "./greatGrandson";

import { FaAngleDoubleRight } from "react-icons/fa";
import { useContext } from "react";

import { GlobalContext } from "../context/global/context";
import { useTranslation } from 'react-i18next';

const GrandChild = () => {
    const { add } = useContext(GlobalContext);

    const { t } = useTranslation();

    return (
        <div>
            <div className="grand-child">
            
                <button 
                onClick={add}
                >
                {t("action")} 
                <FaAngleDoubleRight /> 
                </button>
                
            </div>
            
            <GreatGrandson/>
        </div>
    );
};
export default GrandChild;