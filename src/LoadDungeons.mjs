export async function Load(gameData) {
    await gameData.addPackage("json/Dungeons/Dragonkin_Laboratory.json");
    console.log("Dungeons Loaded!");
}