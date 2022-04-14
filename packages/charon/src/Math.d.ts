export type CharonMath = Math & {
	atan2xy: typeof atan2xy
};

export function atan2xy(x: number, y:number): number;