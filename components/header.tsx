import { useEffect } from "react";
import Image from "next/image";
import useGameStore from "../appStore";

export default function Header() {
    const wins = useGameStore((state: any) => state.wins);
    const updateWins = useGameStore((state: any) => state.updateWins);

    // get wins from localstorage and conver to number
    useEffect(() => {
        const winData = Number(localStorage.getItem("wins"));
        if (winData !== null) {
            updateWins(winData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // save wins to local storage as wins change
    useEffect(() => {
        localStorage.setItem("wins", JSON.stringify(wins));
    }, [wins]);

    return (
        <header className="header">
            <div className="header__title">
                <Image
                    src="/assets/images/logo-bonus.svg"
                    alt="logo"
                    layout="responsive"
                    height={11}
                    width={11.1}
                />
            </div>
            <div className="header__score">
                <span>Score</span>
                {wins}
            </div>
            <button
                className="header__reset"
                onClick={() => {
                    updateWins(0);
                }}
            >
                Reset Score
            </button>
        </header>
    );
}
