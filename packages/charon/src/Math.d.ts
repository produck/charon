export type CharonMath = Math & {
	atan2xy: typeof atan2xy
};

function atan2xy(x: number, y:number): number;