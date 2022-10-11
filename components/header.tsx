import Image from "next/image";
import useGameStore from "../appStore";

export default function Header() {
    const wins = useGameStore((state: any) => state.wins);

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
        </header>
    );
}
