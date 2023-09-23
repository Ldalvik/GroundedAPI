import { ArmorPiece, BuffToSelf, CandyType, CreatureType, DamageType, HandType, HeadArmorPiece, LegArmorPiece, Mutation, RangedType, SwimmingType, ChestArmorPiece, Weapon, WeaponStatusHazard, WeaponType, Consumable, SmoothieBase } from "./Types"

export interface IWeaponData {
    name: Weapon
    level?: number
    upgradeType?: CandyType
}

export interface IWeaponStats {
    name: string
    bestUpgrade: CandyType
    damagePerSecond: number
    resMulti: number
    timeToKill: number
    staminaToKill: number
    hitsToKill: number
    damageToStaminaRatio: number
}

export interface IArmorData<T> {
    name: T
    isSleek?: boolean,
}

export interface IArmor {
    head?: IArmorData<HeadArmorPiece>
    chest?: IArmorData<ChestArmorPiece>
    legs?: IArmorData<LegArmorPiece>
}

export interface IMutationData {
    name: Mutation
    level?: number
}

export interface IConsumableData {
    name: Consumable,
    base?: SmoothieBase
}

export interface IWeaponFilter {
    tierLimit?: number
    level?: number
    handType?: HandType
    rangedType?: RangedType
    swimmingType?: SwimmingType
}

export interface ICreatures {
    "Tier": number
    "# Spawn": number
    "Health": number
    "Defense": number
    "All Resist": number
    "General": number
    "Smashing": number
    "Chopping": number
    "Stabbing": number
    "Slashing": number
    "Spicy": number
    "Salty": number
    "Fresh": number
    "Sour": number
    "Explosive": number
    "Poison": number
    "Gas": number
    "Bleed": number
    "Venom": number
    "Type": CreatureType
}

export interface IWeapons {
    "Tier": number,
    "DMG Type 1": DamageType
    "DMG Type 2": DamageType
    "WPN Type": WeaponType
    "DMG 1": number
    "DMG 2": number
    "DMG 3": number
    "AVG DMG (combo)": number
    "Attack time (s)": number
    "DPS": number
    "Stun": number
    "Charge DMG": number
    "Ch Stun": number
    "Ch Time": number
    "Stamina": number
    "Range": number
    "Durability": number
    "Status/Hazard 1": WeaponStatusHazard
    "Buff to Self": BuffToSelf
    "Code Name": string
    "": string
    "1 Handed": boolean
    "Ranged Type": RangedType
    "Swimming": boolean
    "Display": boolean
    "__1": string
    "__2": string
    "DPS Manual (dynamic)": string
    "ResMulti Manual": string
    "Mighty Only": boolean
    "Mighty": number,
    "Spicy": number,
    "Salty": number,
    "Fresh": number,
    "Sour": number,
    "Best Candy Multi": number,
    "Best Candy Upgrade": CandyType
    "Mighty Hit DMG": number
    "Candy Hit DMG": number
    "Mighty DPS": number
    "Candy DPS": number
    "Best Path?": CandyType
    "Best DPS": number
    "Best Res Multi": number
    "Crit Chance": number
    "Crit Damage": string
    "AttackMulti": number
    "Resmulti": number
    "Flat Damage": number
    "DOTs": number
    "Atk Spd Multi": number
    "Candy Trinket": number
    "Assassin DPS": number
    "Mantis Bleed DPS": number
    "Chopper": number
    "Barbarian": number
    "Whittle Wizard (spicy dot)": number
    "Bow Mastery Burn DOT": number
    "Apex Predator (Brood DOT)": number
    "Apex Predator (Scythe)": number
    "Marksman's Cap": number
    "Antlion Set": number
    "Brood Set": number
    "Works with shield?": boolean
    "Fire Ant Piece + Fire Ant Shield": number
    "Fire Ant Set": number
    "Moth Piece": number
    "Dots added by hand": string
    "Flat Added by hand": string
    "Wizard Hat": number
    "Brood Piece Poison": number
    "Brood Sleek Venom": number
    "Volatile Fang": number
    "Bardic Inspiration (+Crit)": number
    "Bardic Inspiration (+attack)": number
    "Apex Bard (sting stab)": number
    "Apex Bard (poison DPS)": number
    "Apex Bard Wasp (bleed)": number
    "Wasp Piece": number
    "Wasp SLeek": string
    "Tudor DR": number
    "Tudor Bleed": number
    "Wittle Widowling (Venom)": number
    "Wittle Widowling (bites)": number
    "Shocking Dismissal": number
    "Mantsterious Stranger": number
    "Mom Genes": number
    "Widow Sleek": number
    "IBM Sleek": number
    "IBM Set": number
    "Spore Lord Attack": number
    "Spore Lord (Simplified Hits TK)": number
    "Spore Lord (for non weapon procs)": number
    "Brood Trinket Poison": number
    "Summons combined attack speed (in seconds)": string
    "IBM Trinket": number
    "Charge Ratio": number
    "AVG DMG": number
    "Atk time (s)": number
    "Mighty Phase 1": string
    "Mighty Phase 2": string
    "Mighty Phase 3": string
    "Mighty Phase 4": string
    "Mighty Phase 5": string
    "Mighty Phase DMG": string
    "Spicy Phase 1": string
    "Spicy Phase 2": string
    "Spicy Phase 3": string
    "Spicy Phase 4": string
    "Spicy Phase 5": string
    "Salty Phase 1": string
    "Salty Phase 2": string
    "Salty Phase 3": string
    "Salty Phase 4": string
    "Salty Phase 5": string
    "Fresh Phase 1": string
    "Fresh Phase 2": string
    "Fresh Phase 3": string
    "Fresh Phase 4": string
    "Fresh Phase 5": string
    "Sour Phase 1": string
    "Sour Phase 2": string
    "Sour Phase 3": string
    "Sour Phase 4": string
    "Sour Phase 5": string
    "Spicy Phase DMG": string
    "Salty Phase DMG": string
    "Fresh Phase DMG": string
    "Sour Phase DMG": string
    "Phase Best Candy DMG": string
    "Phase Best Candy": CandyType
    "Phase Best Candy Multi": string
    "Ch Time Game File Stat": string
    "Phase Best Candy Multi__1": string
    "Ch Time Game File Stat__1": number
}