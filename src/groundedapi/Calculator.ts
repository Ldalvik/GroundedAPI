import { IArmor, IConsumableData, ICreatures, IMutationData, IWeaponData, IWeapons } from "./types/Interfaces";
import { CandyType, Creature, CreatureType, Mutation, Trinket, Weapon } from "./types/Types";
import WEAPONS from "./data/weapons.json"
import CREATURES from "./data/creatures.json"
import MUTATIONS from "./data/mutations.json"

export default class Calculator {
    baseDamage: number;         // Average weapon damage
    weaponLevel: number;        // Weapon level
    weaponName: Weapon
    weaponInfo: IWeapons
    damagePerHit: number
    critChance: number;         // Critical hit chance from debuffs
    critMulti: number;          // Critical hit multiplier from debuffs
    weaponLevelMulti: number;   // Current weapon level multiplier
    difficultyMulti: number;    // World difficulty multiplier
    attackDamageMulti: number;  // Attack damage multiplier from debuffs
    enemyDefense: number;       // Defense of the creature
    resistanceMulti: number;    // Calculated resistance multiplier

    creature: any
    creatureName: Creature

    constructor(creature: Creature, weaponData: IWeaponData) {
        this.creatureName = creature
        this.damagePerHit = 0
        this.creature = CREATURES[creature] as ICreatures
        this.weaponInfo = WEAPONS[weaponData.name] as unknown as IWeapons // annoying
        this.weaponName = weaponData.name
        this.weaponLevel = weaponData.level || 0
        this.baseDamage = this.weaponInfo["AVG DMG (combo)"];
        this.critChance = 0.0;
        this.critMulti = 1.7;
        this.weaponLevelMulti = this.getWeaponLevelMulti()
        this.difficultyMulti = 1.0;
        this.attackDamageMulti = 1.0;
        this.enemyDefense = CREATURES[creature]["Defense"];
        this.resistanceMulti = this.getResistanceLevelMulti()
    }

    // private getDefault<T, K extends keyof T>(obj: T, key: K, defaultValue: T[K]): T[K] {
    //     const value = obj[key];
    //     return typeof value === typeof defaultValue ? value : defaultValue;
    // }

    getFinalDamage() {

    }

    private getWeaponLevelMulti() {
        if (this.weaponInfo["WPN Type"] === "Bomb, Explosive") return 1.0
        return this.weaponLevel > 5 && this.getBestUpgrade() === CandyType.MIGHTY ?
            (0.1 * (this.weaponLevel - 5)) + 1.25 : // 10% per level if mighty path chosen after level 5
            (0.05 * this.weaponLevel) + 1           // 5% per level if candy path chosen after level 5
    }

    private getResistanceLevelMulti() {
        const damageType1 = this.weaponInfo["DMG Type 1"] ? this.creature[this.weaponInfo["DMG Type 1"]] : 1
        const damageType2 = this.weaponInfo["DMG Type 2"] ? this.creature[this.weaponInfo["DMG Type 2"]] : 1
        const multiplier = this.weaponLevel > 5 && this.getBestUpgrade() !== CandyType.MIGHTY ?
            this.creature[this.getBestUpgrade()] : damageType2     // If a weapon has two damage types, candy upgrades will replace it.
        return damageType1 * multiplier * this.creature["All Resist"]
    }

    getBestUpgrade(): CandyType {
        if (this.weaponLevel < 6) return CandyType.DEFAULT
        if (this.weaponInfo["Mighty Only"]) return CandyType.MIGHTY
        const candyTypes: CandyType[] = [CandyType.SOUR, CandyType.SALTY, CandyType.SPICY, CandyType.FRESH]
        return candyTypes.reduce((a, b) => this.creature[a] > this.creature[b] ? a : b)
    }

    getStaminaToKill() {
        return (this.creature["Health"] / this.getDamagePerHit()) * this.weaponInfo["Stamina"]
    }

    getTimeToKill() {
        return (this.creature["Health"] / this.getDamagePerHit()) * this.weaponInfo["Attack time (s)"]
    }

    getHitsToKill() {
        return this.creature["Health"] / this.getDamagePerHit()
    }

    getDamageToStaminaRatio() {
        return this.getDamagePerSecond() / this.getStaminaToKill()
    }

    getDamagePerSecond() {
        return this.getDamagePerHit() / this.weaponInfo["Attack time (s)"]
    }

    getDamagePerHit() {
        const weaponDamage = this.baseDamage * (1 - this.critChance) + this.baseDamage * this.critChance * this.critMulti
        const multipliers = this.weaponLevelMulti * this.difficultyMulti * this.attackDamageMulti;
        const modifiedBaseDamage = weaponDamage * multipliers
        const fullDamage = (modifiedBaseDamage - this.enemyDefense) * this.resistanceMulti;
        const minDamage = modifiedBaseDamage * 0.25;
        return Math.max(fullDamage, minDamage);
    }

    setMutations(mutations: IMutationData[]) {
        for (const { name, level = 1 } of mutations) {
            const mutationLevel = level - 1;
            const mutationInfo = MUTATIONS[name]
            for (const { restricted_to, type, effects } of mutationInfo.effect_data) {
                if (this.weaponInfo["WPN Type"] !== restricted_to) continue;
                if (type === "resistance_multiplier") this.resistanceMulti *= effects[mutationLevel];
                if (type === "attack_multiplier") this.attackDamageMulti *= effects[mutationLevel];
                if (type === "attack_add") { /* this counts as a seperate attack, handle later */ }
            }
        }
    }

    // Light: Increases stamina cost of attacking by 1.5% per equipped piece.
    // Medium: Increases stamina cost of attacking by 4% per equipped piece.
    // Heavy: Increases stamina cost of attacking by 9% per equipped piece.
    setArmor(armor: IArmor) {
        const { head, chest, legs } = armor


    }

    setConsumables(consumables: IConsumableData[]) {

    }

    setTrinket(trinket: Trinket) {

    }

}
