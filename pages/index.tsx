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
import StepTwo from "../components/main/stepTwo/stepTwo";

const Home: NextPage = () => {
    const showRules = useGameStore((state: any) => state.showRules);
    const wins = useGameStore((state: any) => state.wins);
    const updateWins = useGameStore((state: any) => state.updateWins);
    const input = useGameStore((state: any) => state.input);
    const setInput = useGameStore((state: any) => state.setInput);
    const aiSelect = useGameStore((state: any) => state.aiSelect);
    const setAiSelect = useGameStore((state: any) => state.setAiSelect);
    const step = useGameStore((state: any) => state.step);
    const setIsLoading = useGameStore((state: any) => state.setIsLoading);
    const setResult = useGameStore((state: any) => state.setResult);

    // data retreival
    function getRandomInt(max: number, min: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getAI() {
        let x = 0;
        x = getRandomInt(0, 4);
        if (x == input || x === null) {
            getRandomInt(0, 4);
        } else {
            setAiSelect(x);
        }
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
            if (wins > 0) {
                updateWins(wins - 1);
            }
            setResult("loss");
        } else if (aiSelect == input) {
            console.log("draw");
            setResult("draw");
        } else {
            updateWins(wins + 1);
            setResult("win");
        }
    }

    function gamePlay() {
        setIsLoading(true);
        getAI();
        logic(aiSelect, input);
        console.log("input: " + input + " ai: " + aiSelect);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        setTimeout(() => {
            document.getElementById("announce")?.classList.add("widen");
            document.getElementById("playAgain")?.classList.add("show");
        }, 3000);
        return;
    }

    return (
        <div>
            <Head>
                <title>Charles Miller | Rock, Paper, Scissors, Spock</title>
            </Head>

            <main>
                <Header />
                {step === 1 ? (
                    <StepOne gamePlay={gamePlay} />
                ) : step === 2 ? (
                    <StepTwo />
                ) : step === 3 ? (
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
