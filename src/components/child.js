import GrandChild from "./grandChild";

import { useTranslation } from 'react-i18next';

const Child = () => {
    const { t } = useTranslation();

    return (
        <div >
            <div className="child">
                {t("description")}
            </div>
            
            <GrandChild />
        </div>
    );
};
export default Child;