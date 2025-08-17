export interface Direction {
  angle: number;
  image: string;
  forward?: string;
  interact?: string;
}

export interface Position {
  name: string;
  directions: Direction[];
}

export interface Floor {
  name: string;
  positions: Record<string, Position>;
}

export interface FloorData {
  [floorId: string]: Floor;
}