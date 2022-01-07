import {NavLink} from 'react-router-dom';

function PokemonBlock({name}) {
    return (
        <div>
            <NavLink to={`/details/${name}`}>{name}</NavLink>
        </div>
    )
}

export default PokemonBlock