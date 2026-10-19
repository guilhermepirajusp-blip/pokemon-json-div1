async function buscarPokemon() {
    const nome = document.getElementById("pokemon").value;
    const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`
    );
    const pokemon = await resposta.json();
    console.log(pokemon);
    document.getElementById("nome").textContent = pokemon.name;
    document.getElementById("nome").textContent = pokemon.name;
    document.getElementById("imagem").src =pokemon.sprites.front_default;
    const alturaM = pokemon.height / 10;
    const pesoKg = pokemon.weight / 10;
    
    const tipos = pokemon.types.map(t => t.type.name).join(', ');

    let habilidadeNormal = "-";
    let habilidadeOculta = "-";
    
    pokemon.abilities.forEach(item => {
        if (item.is_hidden) {
            habilidadeOculta = item.ability.name;
        } else {
            habilidadeNormal = item.ability.name;
        }
    });

    let statusTexto = "";
    pokemon.stats.forEach(s => {
        statusTexto += `${s.stat.name.toUpperCase()}: ${s.base_stat} | `;
    });

}

/*
if (buscarPokemon() === true) {
       

         <div class="container text-center">
         <div class="row">
         <div class="col">
            Coluna
         </div>
        <div class="col">
            Coluna
        </div>
        <div class="col">
            Coluna
        </div>
    </div>
</div>
}

*/

  