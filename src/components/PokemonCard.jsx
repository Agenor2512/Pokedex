/* eslint-disable react/prop-types */
export default function PokemonCard({pokemon:{name, imgSrc}}) {
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