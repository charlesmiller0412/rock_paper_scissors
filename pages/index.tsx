import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    let aiSelect: number = 0;
    let input: number = 0;
    const [wins, setWins] = useState(0);

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
                setWins(wins - 1);
            }
        } else if (aiSelect === input) {
            alert("Draw");
            return;
        } else {
            alert("Winner");
            setWins(wins + 1);
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
            setWins(winData);
        }
    }, []);

    // save wins to local storage as wins change
    useEffect(() => {
        localStorage.setItem("wins", JSON.stringify(wins));
    }, [wins]);

    // begin the game after 2 secs (will be removed when frontend complete)
    useEffect(() => {
        const timer = setTimeout(() => {
            gamePlay();
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div>
            <Head>
                <title>Charles Miller | Rock, Paper, Scissors, Spock</title>
                <meta
                    name="description"
                    content="Rock, Paper, Scissors, Spock game created by Charles Miller as a frontendmentor.io challenge."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{ fontSize: "3rem" }}>
                {wins}
                <button onClick={gamePlay}>Play Again?</button>
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
