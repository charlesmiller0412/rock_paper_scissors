import { SelectionBtn } from "../stepOne/selectionBtn";
import { PlayAgainBtn } from "../stepThree/playAgainBtn";
import useGameStore from "../../../appStore";
import { WinHalo } from "../stepThree/winHalo";

export default function StepTwo(props: any) {
    const input = useGameStore((state: any) => state.input);
    const aiSelect = useGameStore((state: any) => state.aiSelect);
    const setStep = useGameStore((state: any) => state.setStep);
    const isLoading = useGameStore((state: any) => state.isLoading);
    const result = useGameStore((state: any) => state.result);

    return (
        <div className="stepTwo" id="announce">
            <div className="stepTwo__userPick">
                <div className="stepTwo__userPick--title">you picked</div>
                <div className="stepTwo__userPick--icon">
                    {result == "win" ? <WinHalo id="userHalo" /> : ""}
                    {input === 0 ? (
                        <SelectionBtn
                            className="selectionBtn rock large"
                            source={"/assets/images/icon-rock.svg"}
                        />
                    ) : input === 1 ? (
                        <SelectionBtn
                            className="selectionBtn paper large"
                            source={"/assets/images/icon-paper.svg"}
                        />
                    ) : input === 2 ? (
                        <SelectionBtn
                            className="selectionBtn scissors large"
                            source={"/assets/images/icon-scissors.svg"}
                        />
                    ) : input === 3 ? (
                        <SelectionBtn
                            className="selectionBtn spock large"
                            source={"/assets/images/icon-spock.svg"}
                        />
                    ) : (
                        <SelectionBtn
                            className="selectionBtn lizard large"
                            source={"/assets/images/icon-lizard.svg"}
                        />
                    )}
                </div>
            </div>
            <div className="stepTwo__playAgain" id="playAgain">
                <h4>
                    {result === "win"
                        ? "you win"
                        : result == "loss"
                        ? "you lose"
                        : "draw"}
                </h4>
                <PlayAgainBtn
                    onClick={() => {
                        setStep(1);
                    }}
                />
            </div>
            <div className="stepTwo__aiPick">
                <div className="stepTwo__aiPick--title">the house picked</div>
                {isLoading ? (
                    <div className="stepTwo__aiPick--pre"></div>
                ) : (
                    <div className="stepTwo__aiPick--icon">
                        {result == "loss" ? (
                            <WinHalo id="aiHalo" logic={props.logic} />
                        ) : (
                            ""
                        )}

                        {aiSelect === 0 ? (
                            <SelectionBtn
                                className="selectionBtn rock large"
                                source={"/assets/images/icon-rock.svg"}
                            />
                        ) : aiSelect === 1 ? (
                            <SelectionBtn
                                className="selectionBtn paper large"
                                source={"/assets/images/icon-paper.svg"}
                            />
                        ) : aiSelect === 2 ? (
                            <SelectionBtn
                                className="selectionBtn scissors large"
                                source={"/assets/images/icon-scissors.svg"}
                            />
                        ) : aiSelect === 3 ? (
                            <SelectionBtn
                                className="selectionBtn spock large"
                                source={"/assets/images/icon-spock.svg"}
                            />
                        ) : aiSelect === 4 ? (
                            <SelectionBtn
                                className="selectionBtn lizard large"
                                source={"/assets/images/icon-lizard.svg"}
                            />
                        ) : (
                            aiSelect
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
