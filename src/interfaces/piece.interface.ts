import type { Coordinate } from '@/interfaces/coordinate.interface';
import type { Movement } from '@/interfaces/movement.interface';

export interface Piece {
    id: number;
    name: string;
    icon: string;
    team: string;
    selected: boolean;
    alive: boolean;
    jump: boolean;
    initialCoordinate: Coordinate;
    currentCoordinate: Coordinate;
    previousCoordinate: Coordinate;
    move: Movement;
}
