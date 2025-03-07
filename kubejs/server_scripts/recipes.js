function changeBasicPokeballRecipe(event, pokeball, apricorn) {
  event.remove({ output: pokeball });

  // 2) Agregar tu receta nueva
  event.shaped(pokeball, [" A ", "X X", " Z "], {
    X: apricorn,
    A: "minecraft:iron_ingot",
    Z: "create:copper_sheet",
  });
}

ServerEvents.recipes((event) => {
  changeBasicPokeballRecipe(
    event,
    "cobblemon:poke_ball",
    "cobblemon:red_apricorn"
  );
  changeBasicPokeballRecipe(
    event,
    "cobblemon:citrine_ball",
    "cobblemon:yellow_apricorn"
  );
  changeBasicPokeballRecipe(
    event,
    "cobblemon:verdant_ball",
    "cobblemon:green_apricorn"
  );
  changeBasicPokeballRecipe(
    event,
    "cobblemon:azure_ball",
    "cobblemon:blue_apricorn"
  );
  changeBasicPokeballRecipe(
    event,
    "cobblemon:roseate_ball",
    "cobblemon:pink_apricorn"
  );
  changeBasicPokeballRecipe(
    event,
    "cobblemon:slate_ball",
    "cobblemon:black_apricorn"
  );
});
