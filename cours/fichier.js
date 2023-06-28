// Union de types, on peux l'assigner aux deux
var growlithe = 'un texte';
growlithe = { id: 1, type: 'plante', name: "growlithe" };
// typage générique
var pokemons = [growlithe, { id: 2, type: 'plante', name: "pokemon X" }];
// Une énumération
var PokemonStatus;
(function (PokemonStatus) {
    PokemonStatus[PokemonStatus["STATUS_X"] = 0] = "STATUS_X";
    PokemonStatus[PokemonStatus["STATUS_Y"] = 1] = "STATUS_Y";
})(PokemonStatus || (PokemonStatus = {}));
// Utilisation de l'enum comme type
var unStatus = PokemonStatus.STATUS_Y;
// typage de retour et dans les paramètres
// 'void' si on retourne rien
// '?' parametre optionnel
function startBattle(pka, pkb, roundLimit, opt) {
    if (roundLimit === void 0) { roundLimit = 3; }
    return 0;
}
var Pony = /** @class */ (function () {
    function Pony() {
    }
    Pony.prototype.run = function (kilometers) {
        console.log("j'ai couru ".concat(kilometers, "km"));
    };
    return Pony;
}());
