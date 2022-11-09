export async function Load(gameData) {
    await gameData.addPackage("json/Items/Kayles_Chargebow.json");
    await gameData.addPackage("json/Items/Caitlins_Staff.json");
    await gameData.addPackage("json/Items/Reeses_Sword.json");
    await gameData.addPackage("json/Items/Reeses_Off-Hand_Sword.json");
    console.log("Items Loaded!");
}