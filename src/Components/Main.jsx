import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const allPokemonData = [];
        for (let i = 1; i <= 151; i++) {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${i}`
            );
            const speciesResponse = await axios.get(
                `https://pokeapi.co/api/v2/pokemon-species/${i}`
            ); //한국어이름가져오기위해 일단 species데이터를 가져온다
            const koreanName = speciesResponse.data.names.find(
                (name) => name.language.name === "ko"
            ); //위에서 가져온 한국어데이터로 language.name이 ko인 데이터를 찾아온다
            allPokemonData.push({
                ...response.data,
                korean_name: koreanName.name,
            });
        }
        setPokeData(allPokemonData);
    };

    useEffect(() => {
        fetchData();
        setLoading(false);
    }, []);

    return (
        <>
            <header>
                <nav className="nav">
                    <img src="PokeDex.png" alt="Logo Pokédex" />
                    <ul className="nav-list">
                        <li className="nav-item">
                            <button className="btn btn-header" id="all">
                                all
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-header normal"
                                id="normal"
                            >
                                normal
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-header fire" id="fire">
                                fire
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-header water" id="water">
                                water
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-header grass" id="grass">
                                grass
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-header electric"
                                id="electric"
                            >
                                electric
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-header ice" id="ice">
                                ice
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-header fighting"
                                id="fighting"
                            >
                                Fighting
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-header poison"
                                id="poison"
                            >
                                poison
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-header ground"
                                id="ground"
                            >
                                ground
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-header flying"
                                id="flying"
                            >
                                flying
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-header psychic"
                                id="psychic"
                            >
                                Psychic
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-header bug" id="bug">
                                Bug
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-header rock" id="rock">
                                rock
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-header ghost" id="ghost">
                                ghost
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-header dark" id="dark">
                                dark
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-header dragon"
                                id="dragon"
                            >
                                dragon
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-header steel" id="steel">
                                steel
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-header fairy" id="fairy">
                                fairy
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div id="all">
                    <div className="pokemon-all" id="readyPokemon">
                        <Card pokeData={pokeData} loading={loading} />
                    </div>
                </div>
                {/* <div className="btn-group">
                    <button>Previous</button>
                    <button>Next</button>
                </div> */}
            </main>
        </>
    );
};

export default Main;
