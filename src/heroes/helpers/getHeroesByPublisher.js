import { heroes } from "../data/heroes";

export const getHeroesByPubliser = (publisher) =>{

    const validPublisers = ['DC Comics', 'Marvel Comics' ]
    if(!validPublisers.includes(publisher) ) {
        throw new Error(`${publisher} is not a valida publisher`)
    }
        return heroes.filter(heroe => heroe.publisher === publisher)
    }

