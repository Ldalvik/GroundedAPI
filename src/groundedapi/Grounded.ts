import Calculator from './Calculator';
import WEAPONS from "./data/weapons.json"
import { ArmorPiece, Consumable, Creature, HandType, Mutation, RangedType, SortByType, SwimmingType, Trinket } from './types/Types';
import { IArmor, IMutationData, IWeaponData, IWeaponFilter, IWeaponStats, IWeapons } from './types/Interfaces';

export default class Grounded {
    creature: Creature;
    tierLimit: number;
    weaponFilter: IWeaponFilter;
    mutations: IMutationData[];
    armor: IArmor;
    consumables: any[];
    trinket: Trinket;
    weaponList: IWeaponStats[]

    constructor(creature: Creature) {
        this.creature = creature
        this.tierLimit = 1
        this.weaponFilter = {
            level: 0,
            handType: HandType.ALL,
            rangedType: RangedType.ALL,
            swimmingType: SwimmingType.ALL
        }
        this.mutations = []
        this.armor = {
            head: { name: ArmorPiece.NONE },
            chest: { name: ArmorPiece.NONE },
            legs: { name: ArmorPiece.NONE }
        }
        this.consumables = []
        this.trinket = Trinket.NONE
        this.weaponList = []
        this.sort()
    }

    addMutation(mutation: Mutation, level: number) {
        if (this.mutations.length === 5) {
            throw Error("Maximum active mutations cannot be greater than 5")
        } else {
            this.mutations.push({ name: mutation, level: level })
        }
        return this
    }

    setArmor(armor: IArmor) {
        this.armor = armor
        return this
    }

    setTrinket(trinket: Trinket) {
        this.trinket = trinket
        return this
    }

    addConsumable(consumable: Consumable) {
        this.consumables.push(consumable)
        return this
    }

    sort(sortType?: SortByType) {
       const weaponList = Object.keys(WEAPONS).map((weapon) => {
            const calc = new Calculator(this.creature, {
                name: weapon, level:
                    this.weaponFilter.level
            } as IWeaponData)

            calc.setMutations(this.mutations)
            calc.setConsumables(this.consumables)
            calc.setArmor(this.armor)
            calc.setTrinket(this.trinket)

            return {
                name: weapon,
                bestUpgrade: calc.getBestUpgrade(),
                damagePerSecond: calc.getDamagePerSecond(),
                resMulti: calc.resistanceMulti,
                timeToKill: calc.getTimeToKill(),
                staminaToKill: calc.getStaminaToKill(),
                hitsToKill: calc.getHitsToKill(),
                damageToStaminaRatio: calc.getDamageToStaminaRatio(),
            }
        })

        switch (sortType) {
            case SortByType.HIGHEST_DAMAGE_TO_STAMINA_RATIO:
                this.weaponList = weaponList
                    .filter((value) => typeof value.damagePerSecond === 'number' && !isNaN(value.damagePerSecond) && value.damagePerSecond !== Infinity &&
                        typeof value.staminaToKill === 'number' && !isNaN(value.staminaToKill) && value.staminaToKill !== Infinity)
                    .sort((a, b) => (b.damagePerSecond / b.staminaToKill) - (a.damagePerSecond / a.staminaToKill))
                break
            case SortByType.LOWEST_STAMINA_TO_KILL:
                this.weaponList = weaponList
                    .filter((value) => typeof value.staminaToKill === 'number' && !isNaN(value.staminaToKill) && value.staminaToKill !== Infinity)
                    .sort((a, b) => a.staminaToKill - b.staminaToKill)
                break
            case SortByType.HIGHEST_DPS:
            default:
                this.weaponList = weaponList
                    .filter((value) => typeof value.damagePerSecond === 'number' && !isNaN(value.damagePerSecond) && value.damagePerSecond !== Infinity)
                    .sort((a, b) => b.damagePerSecond - a.damagePerSecond)
                break
        }
        return this
    }

    getWeaponList() {
        const blackList = [
            "Hot Cha Charm",
            "Shiny Salt Crystal",
            "Suspicious Ice Cap",
            "Explosive Bur Trap",
            "Wondrous Wormhole",
            "Truffle Tussle"
        ]
        return this.weaponList.filter(item => !blackList.includes(item.name))
    }

    setWeaponFilter(filter: IWeaponFilter) {
        this.weaponFilter = { ...this.weaponFilter, ...filter }
        return this
    }

    // setLilFistStackCap(stackingCap: number)  ?
}