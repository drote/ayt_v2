export const move = (targetIdx) => {
	console.log(targetIdx);
	return { type: 'MOVE', payload: targetIdx };
}