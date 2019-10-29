import MAXIMUM_ALLOWED_VIDEOS from '../constants/video';

export const moves = (direction, idx, rowLength) => {
	return {
		ArrowLeft(idx) {
			if (idx === MAXIMUM_ALLOWED_VIDEOS) return idx;

			return idx + 1;
		},

		ArrowRight(idx) {
			if (idx === 0) return idx;

			return idx - 1;
		},
		ArrowDown(idx, rowLength) {
			const res = idx + rowLength;
			
			if (res > MAXIMUM_ALLOWED_VIDEOS) return idx;

			return res;
		},
		ArrowUp(idx, rowLength) {
			const res = idx - rowLength;

			if (res < 0) return idx;

			return res;
		}
	}[direction](idx, rowLength)
}


