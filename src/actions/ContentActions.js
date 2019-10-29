export const move = (targetIdx, vidsPerPage) => {
	console.log(targetIdx);
	return { type: 'MOVE', payload: { targetIdx, vidsPerPage } };
}