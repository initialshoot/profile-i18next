import React, { useContext } from "react";
import { GlobalContext } from "../context/global/context";

import { useTranslation } from 'react-i18next';

const GreatGrandson = () => {
    const { state } = useContext(GlobalContext);

    const { t } = useTranslation();

    return (
        <div className="great-grandson">
            {t("counter")}: {state.count}
        </div>
    );
};
export default GreatGrandson;