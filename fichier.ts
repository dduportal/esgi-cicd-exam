

// Déclaration d'une interface
// Peux être déclaré plusieurs fois et les déclarations sont fusionnées
// Peux être implémenté dans une classe
interface IPokemon {
    id : number,
    name : string
    type : string,
}

// Déclaration de type
type Pokemon = {
    id : number,
    name : string,
    type : string
}

// Union de types, on peux l'assigner aux deux
let growlithe : Pokemon | string = 'un texte';
growlithe = { id:1, type: 'plante', name:"growlithe"}

// typage générique
let pokemons : Array<Pokemon> = [growlithe, { id:2, type:'plante', name:"pokemon X"}]

// Une énumération
enum PokemonStatus {
    STATUS_X,
    STATUS_Y
}

// Utilisation de l'enum comme type
let unStatus : PokemonStatus = PokemonStatus.STATUS_Y

// typage de retour et dans les paramètres
// 'void' si on retourne rien
// '?' parametre optionnel
function startBattle(pka: Pokemon, pkb: Pokemon, roundLimit = 3, opt?: string) : number {
    return 0;
}

interface CanRun {
    run(kilometers : number): void;
}

class Pony implements CanRun {
    run(kilometers: number): void {
        console.log(`j'ai couru ${kilometers}km`)
    }
}