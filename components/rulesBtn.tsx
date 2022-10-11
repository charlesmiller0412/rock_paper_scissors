import { useEffect } from "react";
import useGameStore from "../appStore";
export default function RulesBtn() {
    const showRules = useGameStore((state: any) => state.showRules);
    const setShowRules = useGameStore((state: any) => state.setShowRules);

    function handleClick() {
        setShowRules(true);
    }
    useEffect(() => {
        handleClick;
    }, []);
    return (
        <button className="rulesBtn" onClick={handleClick}>
            Rules
        </button>
    );
}
