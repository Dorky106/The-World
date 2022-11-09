export async function Load(gameData) {
    await gameData.addPackage("json/Monsters/Dragonkin_Laboratory/Astellarn.json");
    await gameData.addPackage("json/Monsters/Dragonkin_Laboratory/Black_Stone_Dragon.json");
    await gameData.addPackage("json/Monsters/Dragonkin_Laboratory/Verak_Lith.json");
    await gameData.addPackage("json/Monsters/Mole_Lair/Baby_Mole.json");
    await gameData.addPackage("json/Monsters/Mole_Lair/Giant_Mole.json");
    await gameData.addPackage("json/Monsters/Royal_Dragon_Lair/King_Black_Dragon.json");
    await gameData.addPackage("json/Monsters/Royal_Dragon_Lair/Queen_Black_Dragon.json");
    await gameData.addPackage("json/Monsters/Temple_of_Aminishi/Masuta_the_Ascended.json");
    await gameData.addPackage("json/Monsters/Temple_of_Aminishi/Seiryu_the_Azure_Serpent.json");
    await gameData.addPackage("json/Monsters/Temple_of_Aminishi/The_Sanctum_Guardian.json");
    await gameData.addPackage("json/Monsters/The_Blood_Pact/Caitlin.json");
    await gameData.addPackage("json/Monsters/The_Blood_Pact/Kayle.json");
    await gameData.addPackage("json/Monsters/The_Blood_Pact/Reese.json");
    await gameData.addPackage("json/Monsters/The_Shadow_Reef/Crassian_Leviathan.json");
    await gameData.addPackage("json/Monsters/The_Shadow_Reef/Taraket_the_Necromancer.json");
    await gameData.addPackage("json/Monsters/The_Shadow_Reef/The_Ambassador.json");
    console.log("Monsters Loaded!");
}