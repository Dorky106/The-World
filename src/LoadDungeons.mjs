export async function Load(gameData) {
    await gameData.addPackage("json/Dungeons/The_Blood_Pact.json");
    await gameData.addPackage("json/Dungeons/Dragonkin_Laboratory.json");
    await gameData.addPackage("json/Dungeons/Mole_Lair.json");
    await gameData.addPackage("json/Dungeons/Royal_Dragon_Lair.json");
    await gameData.addPackage("json/Dungeons/Temple_of_Aminishi.json");
    await gameData.addPackage("json/Dungeons/The_Shadow_Reef.json");
    console.log("Dungeons Loaded!");
}