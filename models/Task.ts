export default interface task {
    id: number,
    vehicleid: number,
    date: number,
    type: string,
    comment?: string[],
    make: string,
    model: string,
    color: string,
    license: string,
    mva: string,
    age: number,
    assigned: boolean,
    market: string,
    status: boolean
}