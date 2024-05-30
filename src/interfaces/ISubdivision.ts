import { IPosition } from "./IPosition";

export interface ISubdivision {
    id: string,
    code: string,
    name: string,
    listOfPositions: IPosition[]
}