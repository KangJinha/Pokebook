import React from "react";

const Card = ({ pokeData, loading }) => {
    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                pokeData.map((poke) => {
                    const renderTypes = () => {
                        return poke.types.map((type) => (
                            <p className={`${type.type.name} type`}>
                                {type.type.name}
                            </p>
                        ));
                    };
                    return (
                        <>
                            <div className="pokemon">
                                <p className="pokemon-id-back">#{poke.id}</p>
                                <div className="pokemon-image">
                                    <img
                                        src={
                                            poke.sprites.other[
                                                "official-artwork"
                                            ].front_default
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="pokemon-info">
                                    <div className="name-contenedor">
                                        <p className="pokemon-id">#{poke.id}</p>
                                        <h2 className="pokemon-name">
                                            {poke.korean_name}
                                        </h2>
                                    </div>
                                    <div className="pokemon-types">
                                        {renderTypes()}
                                    </div>
                                    <div className="pokemon-stats">
                                        <p className="stat">{poke.height}M</p>
                                        <p className="stat">{poke.weight}KG</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })
            )}
        </>
    );
};

export default Card;
