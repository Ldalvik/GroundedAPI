// Sorting methods
export type SortByType = typeof SortByType[keyof typeof SortByType];
export const SortByType = {
    HIGHEST_DPS: "Highest DPS",
    HIGHEST_DAMAGE_TO_STAMINA_RATIO: "Highest Damage-to-Stamina Ratio",
    LOWEST_STAMINA_TO_KILL: "Lowest Stamina to Kill"
} as const

// All mutations
export type Mutation = typeof Mutation[keyof typeof Mutation];
export const Mutation = {
    LIL_FISTS: "Lil Fist",
    CHOPPER: "Chopper",
    //COUP_DE_GRASS = "COUP_DE_GRASS"
} as const

// Type of creature, really only useful for determining ant-nihilator compatibility
export type CreatureType = typeof CreatureType[keyof typeof CreatureType];
export const CreatureType = {
    NONE: "None",
    PHASED: "Phased",
    ANT: "Ant"
} as const

// Candy upgrade types
export type CandyType = typeof CandyType[keyof typeof CandyType];
export const CandyType = {
    DEFAULT: "Default",
    ANY_CANDY: "Any Candy",
    MIGHTY: "Mighty",
    SOUR: "Sour",
    SALTY: "Salty",
    SPICY: "Spicy",
    FRESH: "Fresh"
} as const

// Buffs granted from the weapons
export type BuffToSelf = typeof BuffToSelf[keyof typeof BuffToSelf];
export const BuffToSelf = {
    LIFE_STEAL_SMALL: "LifeStealSmall",
    CRITICAL_HIT_SUPER_TINY_SHORT: "CriticalHitSuperTinyShort",
    APPLY_CRIT_EFFECT_ENEMY_DAZE: "ApplyCritEffectEnemyDaze",
    CRITICAL_HIT_DAMAGE_SCYTHE: "CriticalHitDamageScythe"
} as const

// Hazards/effects granted from weapons
export type WeaponStatusHazard = typeof WeaponStatusHazard[keyof typeof WeaponStatusHazard];
export const WeaponStatusHazard = {
    LIFE_STEAL_SMALL: "LifeStealSmall",
    TINY_POISON_DOT: "TinyPoisonDoT",
    SMALL_BLEED_DOT: "SmallBleedDoT",
    STUN_FLYING_CREATURE: "StunFlyingCreature",
    POLLEN_SLOW: "PollenSlow",
    LARGE_DOT: "LargeDoT",
    HAZARD_GAS_ARROW: "Hazard_GasArrow",
    HAZARD_LURE_ARROW: "Hazard_LureArrow",
    SMALL_POISON_DOT_ARROW: "SmallPoisonDoTArrow",
    SMALL_POISON_DOT: "SmallPoisonDoT",
    GAS_ARROW_SUPER: "GasArrow_Super",
    MEDIUM_POISON_ARROW_DOT: "MediumPoisonArrowDoT",
    HAZARD_GAS_ARROW_SUPER: "Hazard_GasArrow_Super",
    STUN_ORC: "StunORC",
    DAMAGE_ORC: "DamageORC",
    UNIQUE_TAZT_ARM_TRIGGER: "UniqueTaztArmTrigger",
    UNIQUE_TASER_TRIGGER: "UniqueTaserTrigger",
    INFECTION_DAMAGE_DEBUFF_SHORT: "InfectionDamageDebuffShort",
    MEDIUM_POISON_DOT: "MediumPoisonDoT",
} as const

// Weapon engagement type
export type RangedType = typeof RangedType[keyof typeof RangedType];
export const RangedType = {
    ALL: "All",
    MELEE: "Melee",
    RANGED: "Ranged"
} as const

// Land/Water type weapon filter
export type SwimmingType = typeof SwimmingType[keyof typeof SwimmingType];
export const SwimmingType = {
    ALL: "All",
    LAND: "Land",
    WATER: "Water"
} as const

// Trinkets
export type Trinket = typeof Trinket[keyof typeof Trinket]
export const Trinket = {
    NONE: "None",
    BROODMOTHER_TRINKET: "Broodmother Trinket"
} as const

// Weapon holding type filter
export type HandType = typeof HandType[keyof typeof HandType];
export const HandType = {
    ALL: "All",
    ONE_HAND: "1 Hand",
    TWO_HAND: "2 Hand"
} as const

// Smoothies
export type Smoothie = typeof Smoothie[keyof typeof Smoothie]
export const Smoothie = {
    STICKY_SLOP: "Sticky Slop"
} as const

// All consumables
export type Consumable = typeof Consumable[keyof typeof Consumable]
export const Consumable = {
    ...Smoothie,

} as const

// Smoothie bases 
export type SmoothieBase = typeof SmoothieBase[keyof typeof SmoothieBase]
export const SmoothieBase = {
    BASIC: "Basic",
    BEEFY: "Beefy",
    STICKY: "Sticky"
} as const

// Creature and weapon damage types
export type DamageType = typeof DamageType[keyof typeof DamageType]
export const DamageType = {
    GENERAL: "General",
    DIGGING: "Digging",
    EXPLOSIVE: "Explosive",
    SLASHING: "Slashing",
    CHOPPING: "Chopping",
    SMASHING: "Smashing",
    STABBING: "Stabbing",
    REPAIR: "Repair",
    TRUE_DAMAGE: "TrueDamage",
    FRESH: "Fresh",
    SALTY: "Salty",
    SPICY: "Spicy",
    SOUR: "Sour",
    RANGED: "Ranged"
} as const

// Full armor sets (armor with head, torso, and leg versions)
export const ArmorPiece = {
    NONE: "None",
    CLOVER: "Clover",
    ACORN: "Acorn",
} as const

// Head only armor pieces
export type HeadArmorPiece = typeof HeadArmorPiece[keyof typeof HeadArmorPiece];
export const HeadArmorPiece = {
    ...ArmorPiece,
    GAS_MASK: "Gas Mask",
} as const

// Torso only armor pieces
export type ChestArmorPiece = typeof ChestArmorPiece[keyof typeof ChestArmorPiece];
export const ChestArmorPiece = {
    ...ArmorPiece,
} as const

// Leg only armor pieces
export type LegArmorPiece = typeof LegArmorPiece[keyof typeof LegArmorPiece];
export const LegArmorPiece = {
    ...ArmorPiece,
    APHID_SLIPPERS: "Aphid Slippers",
} as const

// Weapon type categories
export type WeaponType = typeof WeaponType[keyof typeof WeaponType];
export const WeaponType = {
    NONE: "None",
    SHOVEL: "Shovel",
    BOMB_EXPLOSIVE: "Bomb, Explosive",
    SWORD: "Sword",
    AXE: "Axe",
    DAGGER: "Dagger",
    HAMMER: "Hammer",
    SPEAR: "Spear",
    REPAIR: "Repair",
    SWORD_ROTTEN: "Sword, Rotten",
    CLUB: "Club",
    BOW: "Bow",
    BOW_BOMB_EXPLOSIVE: "Bow, Bomb, Explosive",
    UNARMED: "Unarmed",
    BOW_CROSSBOW: "Bow, Crossbow",
    BOW_CROSSBOW_BOMB_EXPLOSIVE: "Bow, Crossbow, Bomb, Explosive",
    CLUB_ROTTEN: "Club, Rotten",
    SPEAR_ROTTEN: "Spear, Rotten",
    CLUB_BOSS: "Club, Boss",
    BURR_TRAP: "BurrTrap",
    STAFF: "Staff",
    EMP: "EMP",
    DAGGER_BOSS: "Dagger, Boss",
    STAFF_SPICY: "Staff.Spicy",
    TURRET: "Turret",
    BOMB_EXPLOSIVE_BOSS: "Bomb, Explosive, Boss",
  } as const;  

  export type Weapon = typeof Weapon[keyof typeof Weapon];
  export const Weapon = {
    STONE_PEBBLE: "Stone Pebble",
    ACORN_SHOVEL: "Acorn Shovel",
    ACORN_SHOVEL_SWIMMING: "Acorn Shovel (Swimming)",
    BRATBURST: "Bratburst",
    CANTEEN: "Canteen",
    LARVA_BLADE: "Larva Blade",
    PEBBLET_AXE: "Pebblet Axe",
    PEBBLET_DAGGER_LAND: "Pebblet Dagger (land)",
    PEBBLET_DAGGER_SWIMMING: "Pebblet Dagger (Swimming)",
    PEBBLET_HAMMER: "Pebblet Hammer",
    PEBBLET_SPEAR: "Pebblet Spear",
    PEBBLET_SPEAR_SWIMMING: "Pebblet Spear (Swimming)",
    REPAIR_TOOL: "Repair Tool",
    ROTTEN_LARVA_BLADE: "Rotten Larva Blade",
    SPIKY_SPRIG: "Spiky Sprig",
    SPRIG_BOW_ARROW: "Sprig Bow + Arrow",
    SPRIG_BOW_BOMB_ARROW: "Sprig Bow + Bomb Arrow",
    SPRING_BOW_POLLEN: "Spring Bow + Pollen",
    TORCH: "Torch",
    UNARMED_FIST: "Unarmed Fist",
    BLACK_ANT_SHOVEL: "Black Ant Shovel",
    BLACK_ANT_SWORD: "Black Ant Sword",
    BONE_DAGGER_LAND: "Bone Dagger (land)",
    BONE_TRIDENT: "Bone Trident",
    CROSSBOW_ARROW: "Crossbow + Arrow",
    CROSSBOW_BOMB_ARROW: "Crossbow + Bomb Arrow",
    CROSSBOW_FEATHER: "Crossbow + Feather",
    CROSSBOW_GAS: "Crossbow + Gas",
    CROSSBOW_LURE: "Crossbow + Lure",
    CROSSBOW_MINT: "Crossbow + Mint",
    CROSSBOW_POLLEN: "Crossbow + Pollen",
    CROSSBOW_SALT: "Crossbow + Salt",
    CROSSBOW_SPICY: "Crossbow + Spicy",
    CROSSBOW_VENOM: "Crossbow + Venom",
    HOT_CHA_CHARM: "Hot Cha Charm",
    INSECT_AXE: "Insect Axe",
    INSECT_BOW_ARROW: "Insect Bow + Arrow",
    INSECT_BOW_BOMB_ARROW: "Insect Bow + Bomb Arrow",
    INSECT_BOW_FEATHER: "Insect Bow + Feather",
    INSECT_BOW_GAS: "Insect Bow + Gas",
    INSECT_BOW_LURE: "Insect Bow + Lure",
    INSECT_BOW_MINT: "Insect Bow + Mint",
    INSECT_BOW_POLLEN: "Insect Bow + Pollen",
    INSECT_BOW_SALT: "Insect Bow + Salt",
    INSECT_BOW_SPICY: "Insect Bow + Spicy",
    INSECT_BOW_VENOM: "Insect Bow + Venom",
    INSECT_HAMMER: "Insect Hammer",
    MOSQUITO_NEEDLE: "Mosquito Needle",
    RED_ANT_CLUB: "Red Ant Club",
    ROTTEN_RED_ANT_CLUB: "Rotten Red Ant Club",
    ROTTEN_STINGER_SPEAR: "Rotten Stinger Spear",
    SHINY_SALT_CRYSTAL: "Shiny Salt Crystal",
    SPIDER_FANG_DAGGER: "Spider Fang Dagger",
    SPLATBURST: "Splatburst",
    SPRIG_BOW_FEATHER: "Sprig Bow + Feather",
    SPRIG_BOW_GAS: "Sprig Bow + Gas",
    SPRIG_BOW_LURE: "Sprig Bow + Lure",
    SPRIG_BOW_MINT: "Sprig Bow + Mint",
    SPRIG_BOW_SALT: "Sprig Bow + Salt",
    SPRIG_BOW_SPICY: "Sprig Bow + Spicy",
    SPRIG_BOW_VENOM: "Sprig Bow + Venom",
    STINGER_SPEAR: "Stinger Spear",
    SUSPICIOUS_ICE_CAP: "Suspicious Ice Cap",
    SWIMMING_DAGGER: "Swimming Dagger (T2 and T3)",
    SWIMMING_SPEAR: "Swimming Spear (T2 and T3)",
    ANTLION_GREATSWORD: "Antlion Greatsword",
    BARD_BOW_ARROW: "Bard Bow + Arrow",
    BARD_BOW_BOMB_ARROW: "Bard Bow + Bomb Arrow",
    BARD_BOW_FEATHER: "Bard Bow + Feather",
    BARD_BOW_GAS: "Bard Bow + Gas",
    BARD_BOW_LURE: "Bard Bow + Lure",
    BARD_BOW_MINT: "Bard Bow + Mint",
    BARD_BOW_POLLEN: "Bard Bow + Pollen",
    BARD_BOW_SALT: "Bard Bow + Salt",
    BARD_BOW_SOUR: "Bard Bow + Sour",
    BARD_BOW_SPICY: "Bard Bow + Spicy",
    BARD_BOW_SPLINTER: "Bard Bow + Splinter",
    BARD_BOW_SUPER_GAS: "Bard Bow + Super Gas",
    BARD_BOW_SUPER_VENOM: "Bard Bow + Super Venom",
    BARD_BOW_VENOM: "Bard Bow + Venom",
    BLACK_OX_HAMMER: "Black Ox Hammer",
    CLUB_OF_THE_MOTHER_DEMON: "Club of the Mother Demon",
    CROSSBOW_SOUR: "Crossbow + Sour",
    CROSSBOW_SPLINTER: "Crossbow + Splinter",
    CROSSBOW_SUPER_GAS: "Crossbow + Super Gas",
    CROSSBOW_SUPER_VENOM: "Crossbow + Super Venom",
    EXPLOSIVE_BUR_TRAP: "Explosive Bur Trap",
    FIRE_ANT_CLUB: "Fire Ant Club",
    INSECT_BOW_SOUR: "Insect Bow + Sour",
    INSECT_BOW_SPLINTER: "Insect Bow + Splinter",
    INSECT_BOW_SUPER_GAS: "Insect Bow + Super Gas",
    INSECT_BOW_SUPER_VENOM: "Insect Bow + Super Venom",
    MINT_MACE: "Mint Mace",
    MINT_STAFF: "Mint Staff",
    ORC_DISRUPTION_BOMB: "O.R.C. Disruption Bomb",
    OX_CROSSBOW_ARROW: "Ox Crossbow + Arrow",
    OX_CROSSBOW_BOMB_ARROW: "Ox Crossbow + Bomb Arrow",
    OX_CROSSBOW_FEATHER: "Ox Crossbow + Feather",
    OX_CROSSBOW_GAS: "Ox Crossbow + Gas",
    OX_CROSSBOW_LURE: "Ox Crossbow + Lure",
    OX_CROSSBOW_MINT: "Ox Crossbow + Mint",
    OX_CROSSBOW_POLLEN: "Ox Crossbow + Pollen",
    OX_CROSSBOW_SALT: "Ox Crossbow + Salt",
    OX_CROSSBOW_SOUR: "Ox Crossbow + Sour",
    OX_CROSSBOW_SPICY: "Ox Crossbow + Spicy",
    OX_CROSSBOW_SPLINTER: "Ox Crossbow + Splinter",
    OX_CROSSBOW_SUPER_GAS: "Ox Crossbow + Super Gas",
    OX_CROSSBOW_SUPER_VENOM: "Ox Crossbow + Super Venom",
    OX_CROSSBOW_VENOM: "Ox Crossbow + Venom",
    PINCH_WHACKER: "Pinch Whacker",
    PROD_SMACKER: "Prod Smacker",
    RUSTY_SPEAR: "Rusty Spear",
    SALT_MORNING_STAR: "Salt Morning Star",
    SCYTHE_OF_BLOSSOMS: "Scythe of Blossoms",
    SOUR_BATTLE_AXE: "Sour Battle-axe",
    SOUR_STAFF: "Sour Staff",
    SPICY_COALTANA: "Spicy Coaltana",
    SPICY_STAFF: "Spicy Staff",
    SPRIG_BOW_SOUR: "Sprig Bow + Sour",
    SPRIG_BOW_SPLINTER: "Sprig Bow + Splinter",
    SPRIG_BOW_SUPER_GAS: "Sprig Bow + Super Gas",
    SPRIG_BOW_SUPER_VENOM: "Sprig Bow + Super Venom",
    TERMITE_AXE: "Termite Axe",
    TICK_MACUAHUITL: "Tick Macuahuitl",
    TIGER_MOSQUITO_RAPIER: "Tiger Mosquito Rapier",
    TOENAIL_SCIMITAR: "Toenail Scimitar",
    WIDOW_DAGGER: "Widow Dagger",
    WONDROUS_WORMHOLE: "Wondrous Wormhole",
    PEBLET_TURRET: "Peblet Turret",
    POLLEN_TURRET: "Pollen Turret",
    BOMB_GLOVE_BLASTER: "Blaster (Bomb Glove)",
    TRUFFLE_TUSSLE: "Truffle Tussle",
  } as const;
  
  export type Creature = typeof Creature[keyof typeof Creature];
  export const Creature = {
    APHID: "Aphid",
    GNAT: "Gnat",
    GRUB: "Grub",
    MEATY_GNAT: "Meaty Gnat",
    NONE: "None",
    TADPOLE: "Tadpole",
    WATER_BOATMAN: "Water Boatman",
    WEEVIL: "Weevil",
    LARVA: "Larva",
    LAWN_MITE: "Lawn Mite",
    ORB_WEAVER_JR: "Orb Weaver Jr.",
    RED_ANT_SOLDIER: "Red Ant Soldier",
    RED_ANT_WORKER: "Red Ant Worker",
    RUZ_T: "Ruz.T",
    SPIDERLING: "Spiderling",
    WATER_FLEA: "Water Flea",
    ARC_R: "Arc.R",
    BEE: "Bee",
    BLACK_ANT_SOLDIER: "Black Ant Soldier",
    BLACK_ANT_WORKER: "Black Ant Worker",
    BOMBARDIER_BEETLE: "Bombardier Beetle",
    DIVING_BELL_SPIDER: "Diving Bell Spider",
    FIREFLY: "Firefly",
    INFECTED_GNAT: "Infected Gnat",
    INFECTED_LADYBUG: "Infected Ladybug",
    INFECTED_LARVA: "Infected larva",
    INFECTED_MITE: "Infected Mite",
    INFECTED_WEEVIL: "Infected Weevil",
    LADYBUG: "Ladybug",
    MOSQUITO: "Mosquito",
    ORB_WEAVER: "Orb Weaver",
    STINKBUG: "Stinkbug",
    TAZ_T: "Taz.T",
    WOLF_SPIDER: "Wolf Spider",
    ANTLION: "Antlion",
    ANTLION_PIT: "Antlion Pit",
    BLACK_OX_BEETLE: "Black Ox Beetle",
    BLACK_WIDOW: "Black Widow",
    BLACK_WIDOWLING: "Black Widowling",
    DUST_MITE: "Dust Mite",
    FIRE_ANT_SOLDIER: "Fire Ant Soldier",
    FIRE_ANT_WORKER: "Fire Ant Worker",
    GREEN_SHIELD_BUG: "Green Shield Bug",
    INFECTED_WOLF_SPIDER: "Infected Wolf Spider",
    LADYBIRD: "Ladybird",
    LADYBIRD_LARVA: "Ladybird Larva",
    MOTH: "Moth",
    ROLY_POLY: "Roly Poly",
    SCARAB: "Scarab",
    SICKLY_ROLY_POLY: "Sickly Roly Poly",
    SPINY_WATER_FLEA: "Spiny Water Flea",
    TERMITE_KING: "Termite King",
    TERMITE_SOLDIER: "Termite Soldier",
    TERMITE_WORKER: "Termite Worker",
    TICK: "Tick",
    TIGER_MOSQUITO: "Tiger Mosquito",
    WASP: "Wasp",
    WASP_DRONE: "Wasp Drone",
    ASSISTANT_MANAGER: "Assistant Manager",
    BROODMOTHER: "Broodmother",
    DIRECTOR_SCHMECTOR: "Director Schmector",
    MANT: "Mant",
    MANTIS: "Mantis",
    WASP_QUEEN: "Wasp Queen",
    INFECTED_BROODMOTHER: "Infected Broodmother",
} as const;

export type CodeName = typeof CodeName[keyof typeof CodeName];
export const CodeName = {
    HELD_ITEM: "Held Item",
    SHOVEL: "Shovel",
    SHOVEL_SWIMMING: "Shovel (Swimming)",
    BOMB: "Bomb",
    CANTEEN: "Canteen",
    SWORD_LARVA: "Sword Larva",
    AXE: "Axe",
    KNIFE1: "Knife1",
    SWIMMING_KNIFE: "Swimming Knife",
    HAMMER: "Hammer",
    SPEAR: "Spear",
    SWIMMING_SPEAR: "Swimming Spear",
    REPAIR_HAMMER: "Repair Hammer",
    SWORD_LARVA_ROTTEN: "Sword Larva Rotten",
    SPIKY_SPRIG1: "Spiky Sprig1",
    BOW_ARROW: "Bow Arrow",
    BOW_BOMB: "Bow Bomb",
    BOW_ARROW_POLLEN: "Bow Arrow Pollen",
    TORCH: "Torch",
    PLAYER: "Player",
    SHOVEL_ANT_BLACK: "Shovel Ant Black",
    SWORD_ANT_BLACK: "Sword Ant Black",
    KNIFE_BONE1: "Knife Bone1",
    SPEAR_T2_BONE: "Spear Tier2 Bone",
    CROSSBOW: "Crossbow",
    CROSSBOW_BOMB: "Crossbow Bomb",
    CROSSBOW_ARROW_CROW: "Crossbow Arrow Crow",
    CROSSBOW_ARROW_GAS: "Crossbow Arrow Gas",
    CROSSBOW_ARROW_LURE: "Crossbow Arrow Lure",
    CROSSBOW_ARROW_MINT: "Crossbow Arrow Mint",
    CROSSBOW_POLLEN: "Crossbow Pollen",
    CROSSBOW_ARROW_SALT: "Crossbow Arrow Salt",
    CROSSBOW_ARROW_SPICY: "Crossbow Arrow Spicy",
    CROSSBOW_ARROW_POISON: "Crossbow Arrow Poison",
    TRINKET_SPICY: "Trinket Spicy",
    AXE_T2: "Axe Tier2",
    BOW_T2_ARROW: "Bow Tier2 Arrow",
    BOW_T2_BOMB: "Bow Tier2 Bomb",
    BOW_T2_ARROW_CROW: "Bow Tier2 Arrow Crow",
    BOW_ARROW_T2_GAS: "Bow Arrow T2 Gas",
    BOW_ARROW_T2_LURE: "Bow Arrow T2 Lure",
    BOW_T2_ARROW_MINT: "Bow Tier2 Arrow Mint",
    BOW_T2_ARROW_POLLEN: "Bow Tier2 Arrow Pollen",
    BOW_T2_ARROW_SALT: "Bow Tier2 Arrow Salt",
    BOW_T2_ARROW_SPICY: "Bow Tier2 Arrow Spicy",
    BOW_ARROW_T2_POISON: "Bow Arrow T2 Poison",
    HAMMER_T2: "Hammer Tier2",
    RAPIER_MOS: "Rapier Mos",
    ANT_CLUB: "Ant Club",
    ANT_CLUB_ROTTEN: "Ant Club Rotten",
    SPEAR_T2_ROTTEN: "Spear Tier2 Rotten",
    TRINKET_SALTY: "Trinket Salty",
    DAGGER_SPIDER: "Dagger Spider",
    BOMB_STICKY: "Bomb Sticky",
    BOW_ARROW_CROW: "Bow Arrow Crow",
    BOW_ARROW_GAS: "Bow Arrow Gas",
    BOW_ARROW_LURE: "Bow Arrow Lure",
    BOW_ARROW_MINT: "Bow Arrow Mint",
    BOW_ARROW_SALT: "Bow Arrow Salt",
    BOW_ARROW_SPICY: "Bow Arrow Spicy",
    BOW_ARROW_POISON: "Bow Arrow Poison",
    SPEAR_T2: "Spear Tier2",
    TRINKET_FRESH: "Trinket Fresh",
    SWIMMING_KNIFE_BONE: "Swimming Knife Bone",
    SWIMMING_SPEAR_T2: "Swimming Spear Tier2",
    GREATSWORD_ANTLION: "Greatsword Antlion",
    BOW_T3_ARROW: "Bow Tier3 Arrow",
    BOW_T3_BOMB: "Bow Tier3 Bomb",
    BOW_T3_ARROW_CROW: "Bow Tier3 Arrow Crow",
    BOW_ARROW_T3_GAS: "Bow Arrow T3 Gas",
    BOW_ARROW_T3_LURE: "Bow Arrow T3 Lure",
    BOW_T3_ARROW_MINT: "Bow Tier3 Arrow Mint",
    BOW_T3_ARROW_POLLEN: "Bow Tier3 Arrow Pollen",
    BOW_T3_ARROW_SALT: "Bow Tier3 Arrow Salt",
    BOW_T3_ARROW_SOUR: "Bow Tier3 Arrow Sour",
    BOW_T3_ARROW_SPICY: "Bow Tier3 Arrow Spicy",
    BOW_T3_ARROW_SPLINTER: "Bow Tier3 Arrow Splinter",
    BOW_T3_ARROW_SPLINTER_GAS: "Bow Tier3 Arrow Splinter Gas",
    BOW_T3_ARROW_SPLINTER_VENOM: "Bow Tier3 Arrow Splinter Venom",
    BOW_ARROW_T3_POISON: "Bow Arrow T3 Poison",
    HAMMER_T3: "Hammer Tier3",
    CLUB_BROODMOTHER: "Club Broodmother",
    CROSSBOW_ARROW_SOUR: "Crossbow Arrow Sour",
    CROSSBOW_SPLINTER: "Crossbow Splinter",
    CROSSBOW_SPLINTER_GAS: "Crossbow Splinter Gas",
    CROSSBOW_SPLINTER_VENOM: "Crossbow Splinter Venom",
    TRAP_BOMB: "Trap Bomb",
    ANT_CLUB_FIRE: "Ant Club Fire",
    BOW_T2_ARROW_SOUR: "Bow Tier2 Arrow Sour",
    BOW_T2_ARROW_SPLINTER: "Bow Tier2 Arrow Splinter",
    BOW_T2_ARROW_SPLINTER_GAS: "Bow Tier2 Arrow Splinter Gas",
    BOW_T2_ARROW_SPLINTER_VENOM: "Bow Tier2 Arrow Splinter Venom",
    MINT_MALLET: "Mint Mallet",
    STAFF_MINT: "Staff Mint",
    TRAP_EMP: "Trap EMP",
    CROSSBOW_T3: "Crossbow Tier3",
    CROSSBOW_T3_BOMB: "Crossbow Tier3 Bomb",
    CROSSBOW_T3_ARROW_CROW: "Crossbow Tier3 Arrow Crow",
    CROSSBOW_T3_ARROW_GAS: "Crossbow Tier3 Arrow Gas",
    CROSSBOW_T3_ARROW_LURE: "Crossbow Tier3 Arrow Lure",
    CROSSBOW_T3_ARROW_MINT: "Crossbow Tier3 Arrow Mint",
    CROSSBOW_T3_POLLEN: "Crossbow Tier3 Pollen",
    CROSSBOW_T3_ARROW_SALT: "Crossbow Tier3 Arrow Salt",
    CROSSBOW_T3_ARROW_SOUR: "Crossbow Tier3 Arrow Sour",
    CROSSBOW_T3_ARROW_SPICY: "Crossbow Tier3 Arrow Spicy",
    CROSSBOW_T3_SPLINTER: "Crossbow Tier3 Splinter",
    CROSSBOW_T3_SPLINTER_GAS: "Crossbow Tier3 Splinter Gas",
    CROSSBOW_T3_SPLINTER_VENOM: "Crossbow Tier3 Splinter Venom",
    CROSSBOW_T3_ARROW_POISON: "Crossbow Tier3 Arrow Poison",
    UNIQUE_TAZT_ARM: "Unique TazT Arm",
    UNIQUE_TASER: "Unique Taser",
    SPEAR_T3: "Spear Tier3",
    MORNINGSTAR_SALT: "Morningstar Salt",
    SCYTHE_MANTIS1: "Scythe Mantis1",
    BATTLEAXE_SOUR: "Battleaxe Sour",
    STAFF_SOUR: "Staff Sour",
    KATANA_SPICY: "Katana Spicy",
    STAFF_SPICY: "Staff Spicy",
    BOW_ARROW_SOUR: "Bow Arrow Sour",
    BOW_ARROW_SPLINTER: "Bow Arrow Splinter",
    BOW_ARROW_SPLINTER_GAS: "Bow Arrow Splinter Gas",
    BOW_ARROW_SPLINTER_VENOM: "Bow Arrow Splinter Venom",
    AXE_T3: "Axe Tier3",
    SWORD_TICK: "Sword Tick",
    RAPIER_MOS_TIGER: "Rapier Mos Tiger",
    SWORD_TOENAIL: "Sword Toenail",
    DAGGER_SPIDER_WIDOW: "Dagger Spider Widow",
    TRINKET_SOUR: "Trinket Sour",
    TURRET_PEBBLE: "Turret Pebble",
    TURRET_POLLEN: "Turret Pollen",
    BOSS_IBM_BOMBGLOVE: "Boss IBM BombGlove",
    UNARMED_EXPLOSION: "Unarmed Explosion",
  } as const