import PropTypes from "prop-types";

/* eslint-disable react/prop-types */
function PokemonCard({pokemon:{name, imgSrc}}) {
    return (
        <figure>
            {
                // eslint-disable-next-line react/prop-types
                imgSrc ? 
                <img src={imgSrc}
                alt="Bulbasaur" 
                />
                : <p>???</p>
            }
            <figcaption>{name}</figcaption>
        </figure>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default PokemonCard