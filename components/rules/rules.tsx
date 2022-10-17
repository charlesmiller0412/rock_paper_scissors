import { useEffect } from "react";
import Image from "next/image";
import useGameStore from "../../appStore";
export default function Rules() {
    const setShowRules = useGameStore((state: any) => state.setShowRules);

    function handleClick() {
        setShowRules(false);
    }
    useEffect(() => {
        handleClick;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="rules">
            <div className="rules__modal">
                <div className="rules__modal--top">
                    <div className="rules__modal--top-title">rules</div>
                    <div
                        className="rules__modal--top-closeBtn"
                        onClick={handleClick}
                    >
                        <Image
                            src={"/assets/images/icon-close.svg"}
                            alt="close button"
                            layout="fill"
                        />
                    </div>
                </div>
                <div className="rules__modal--image">
                    <Image
                        src="/assets/images/image-rules-bonus.svg"
                        alt="rules image"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    );
}
