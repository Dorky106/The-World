export async function setup({loadModule, gameData}){

    const loadItems = await loadModule('src/LoadItems.mjs');
    await loadItems.Load(gameData);

    const loadMonsters = await loadModule('src/LoadMonsters.mjs');
    await loadMonsters.Load(gameData);

    const loadCombatAreas = await loadModule('src/LoadCombatAreas.mjs');
    await loadCombatAreas.Load(gameData);

    const loadSlayerAreas = await loadModule('src/LoadSlayerAreas.mjs');
    await loadSlayerAreas.Load(gameData);

    const loadDungeons = await loadModule('src/LoadDungeons.mjs');
    await loadDungeons.Load(gameData);
}