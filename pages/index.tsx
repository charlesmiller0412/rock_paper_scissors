import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import useGameStore from "../appStore";
import RulesBtn from "../components/rulesBtn";
import Rules from "../components/rules";
import { type } from "os";
import StepOne from "../components/main/stepOne";

const Home: NextPage = () => {
    const wins = useGameStore((state: any) => state.wins);
    const updateWins = useGameStore((state: any) => state.updateWins);
    const showRules = useGameStore((state: any) => state.showRules);

    let aiSelect: number = 0;
    let input: number = 0;

    // data retreival
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function getInput() {
        input = Number(prompt("Pick a number between 0 and 4"));
        console.log("input: " + input);
    }

    function getAI() {
        aiSelect = getRandomInt(5);
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
            alert("Loser");
            if (wins > 0) {
                updateWins(wins - 1);
            }
        } else if (aiSelect === input) {
            alert("Draw");
            return;
        } else {
            alert("Winner");
            updateWins(wins + 1);
        }
    }

    function gamePlay() {
        getInput();
        getAI();
        logic(aiSelect, input);
        return;
    }

    // get wins from localstorage and conver to number
    useEffect(() => {
        const winData = Number(localStorage.getItem("wins"));
        if (winData !== null) {
            updateWins(winData);
        }
    }, []);

    // save wins to local storage as wins change
    useEffect(() => {
        localStorage.setItem("wins", JSON.stringify(wins));
    }, [wins]);

    // begin the game after 2 secs (will be removed when frontend complete)
    useEffect(() => {
        const timer = setTimeout(() => {
            // gamePlay();
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div>
            <Head>
                <title>Charles Miller | Rock, Paper, Scissors, Spock</title>
            </Head>

            <main>
                <Header />
                <StepOne />
                {showRules ? <Rules /> : ""}
            </main>

            <footer>
                <RulesBtn />
            </footer>
        </div>
    );
};

export default Home;
