import React, { useContext } from "react";
import { GlobalContext } from "../context/global/context";

const GreatGrandson = () => {
    const { state } = useContext(GlobalContext);

    return (
        <div className="great-grandson">
            Contador de visitas: {state.count}
        </div>
    );
};
export default GreatGrandson;