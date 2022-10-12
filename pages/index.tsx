import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import useGameStore from "../appStore";
import RulesBtn from "../components/rulesBtn";
import Rules from "../components/rules";
import StepOne from "../components/main/stepOne";
import { PlayAgainBtn } from "../components/main/stepThree/playAgainBtn";

const Home: NextPage = () => {
    const showRules = useGameStore((state: any) => state.showRules);
    const wins = useGameStore((state: any) => state.wins);
    const updateWins = useGameStore((state: any) => state.updateWins);
    const input = useGameStore((state: any) => state.input);
    const aiSelect = useGameStore((state: any) => state.aiSelect);
    const setAiSelect = useGameStore((state: any) => state.setAiSelect);
    const step = useGameStore((state: any) => state.step);

    // data retreival
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function getAI() {
        setAiSelect(getRandomInt(5));
        console.log("aiSelect: " + aiSelect);
    }

    // game logic and main function
    function logic(aiSelect: number, input: number) {
        if (
            (aiSelect == 0 && input == 4) ||
            (aiSelect == 0 && input == 2) ||
            (aiSelect == 1 && input == 0) ||
            (aiSelect == 1 && input == 3) ||
            (aiSelect == 2 && input == 1) ||
            (aiSelect == 2 && input == 4) ||
            (aiSelect == 3 && input == 2) ||
            (aiSelect == 3 && input == 0) ||
            (aiSelect == 4 && input == 3) ||
            (aiSelect == 4 && input == 1)
        ) {
            console.log("Loser");
            if (wins > 0) {
                updateWins(wins - 1);
            }
        } else if (aiSelect === input) {
            console.log("Draw");
            return;
        } else {
            console.log("Winner");
            updateWins(wins + 1);
        }
    }

    function gamePlay() {
        getAI();
        logic(aiSelect, input);
        console.log(aiSelect + " " + input);
        return;
    }

    return (
        <div>
            <Head>
                <title>Charles Miller | Rock, Paper, Scissors, Spock</title>
            </Head>

            <main>
                <Header />
                {step == 1 ? (
                    <StepOne gamePlay={gamePlay} />
                ) : step == 2 ? (
                    ""
                ) : step == 3 ? (
                    ""
                ) : (
                    ""
                )}
                {showRules ? <Rules /> : ""}
            </main>

            <footer>
                <RulesBtn />
            </footer>
        </div>
    );
};

export default Home;
