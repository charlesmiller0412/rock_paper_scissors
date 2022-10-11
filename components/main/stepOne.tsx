import Image from "next/image";
import { SelectionBtn } from "./stepOne/selectionBtn";

export default function StepOne() {
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
                    value="2"
                />
            </div>
            <div className="stepOne__rowTwo">
                <SelectionBtn
                    className="selectionBtn spock"
                    source={"/assets/images/icon-spock.svg"}
                    value="3"
                />
                <SelectionBtn
                    className="selectionBtn paper"
                    source={"/assets/images/icon-paper.svg"}
                    value="1"
                />
            </div>
            <div className="stepOne__rowThree">
                <SelectionBtn
                    className="selectionBtn lizard"
                    source={"/assets/images/icon-lizard.svg"}
                    value="4"
                />
                <SelectionBtn
                    className="selectionBtn rock"
                    source={"/assets/images/icon-rock.svg"}
                    value="0"
                />
            </div>
        </div>
    );
}
