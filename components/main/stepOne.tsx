import Image from "next/image";
import { SelectionBtn } from "./stepOne/selectionBtn";
import useGameStore from "../../appStore";

export default function StepOne({ gamePlay }: any) {
    const setInput = useGameStore((state: any) => state.setInput);
    const setStep = useGameStore((state: any) => state.setStep);
    const step = useGameStore((state: any) => state.step);

    function handleClick(key: number) {
        setInput(Number(key));
        setStep(2);
        gamePlay();
    }

    return (
        <div className="stepOne">
            <div className="stepOne__bgImage">
                <Image
                    src={"/assets/images/bg-pentagon.svg"}
                    alt="pentagon background"
                    layout="fill"
                />
            </div>
            <div className="stepOne__rowOne">
                <SelectionBtn
                    className="selectionBtn scissors"
                    source={"/assets/images/icon-scissors.svg"}
                    id="scissors"
                    onClick={() => {
                        handleClick(2);
                    }}
                />
            </div>
            <div className="stepOne__rowTwo">
                <SelectionBtn
                    className="selectionBtn spock"
                    source={"/assets/images/icon-spock.svg"}
                    onClick={() => {
                        handleClick(3);
                    }}
                />
                <SelectionBtn
                    className="selectionBtn paper"
                    source={"/assets/images/icon-paper.svg"}
                    onClick={() => {
                        handleClick(1);
                    }}
                />
            </div>
            <div className="stepOne__rowThree">
                <SelectionBtn
                    className="selectionBtn lizard"
                    source={"/assets/images/icon-lizard.svg"}
                    onClick={() => {
                        handleClick(4);
                    }}
                />
                <SelectionBtn
                    className="selectionBtn rock"
                    source={"/assets/images/icon-rock.svg"}
                    onClick={() => {
                        handleClick(0);
                    }}
                />
            </div>
        </div>
    );
}
