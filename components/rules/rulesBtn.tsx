import useGameStore from "../../appStore";

export default function RulesBtn() {
    const setShowRules = useGameStore((state: any) => state.setShowRules);

    function handleClick() {
        setShowRules(true);
    }

    return (
        <button className="rulesBtn" onClick={handleClick}>
            Rules
        </button>
    );
}
