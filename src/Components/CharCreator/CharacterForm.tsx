import React, { useState, useEffect, ReactEventHandler } from "react"

type AppProps = {
}

class InputBuffer {
    name: string;
    level: number;
    race: string;
    profession: string;
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    [key: string]: any;

    constructor(name: string, level: number, race: string, profession: string, str: number, dex: number, con: number, int: number, wis: number, cha: number) {
        this.name = name;
        this.level = level;
        this.race = race;
        this.profession = profession;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }
}

function CharacterForm({} : AppProps) : JSX.Element {


    const [inputBuffer, setInputBuffer] = useState<InputBuffer>(new InputBuffer("", 0, "", "", 0, 0, 0, 0, 0, 0)); 

    function handleInput (event: any, key: string) {
        const inputKey = key as keyof typeof inputBuffer;
        setInputBuffer({...inputBuffer, [inputKey]: event.target.value});
    }

    return (
        <>
            <h1>I'm a typescript component</h1>
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" onChange={(e) => handleInput(e, "name")} value={inputBuffer.name}></input>
        </>
    )
}

export default CharacterForm;