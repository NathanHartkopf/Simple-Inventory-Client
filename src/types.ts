export type CardData = {
    key: number
    title: string,
    cost: string,
    icon: string,
    count: number,
    type: ItemType
}

export enum ItemType {
    inventory,
    tool
}