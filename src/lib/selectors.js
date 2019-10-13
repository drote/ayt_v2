import * as uiHelpers from './uiHelpers';

export const getPageHeading = (state) => {
	return state.ui.pageHeading;
}

export const getHeadingImage = (state) => {
	return state.ui.pageHeadingImg;
}

export const getSideBarWidth = (state) => {
	return state.ui.sideBarWidth;
}

export const getMainWidth = (state) => {
	return state.ui.mainWidth;
}

export const getSideBarPos = (state) => {
	return state.ui.sideBarPosition;
}

export const getMainPos = (state) => {
	return state.ui.mainPosition;
}

export const getButtonsActiveStatus = (state) => {
	return state.ui.showActionButtons;
}

export const getContent = (state) => {
	return state.content;
}

export const getColN = (state) => {
	return state.ui.colNumber;
}

export const getPageN = (state) => {
	return state.ui.pageN;
}

export const getResultsPerPage = (state) => {
	return state.ui.colNumber * state.ui.rowNumber;
}

export const getSelectedThumb = (state) => {
	return state.ui.selectedThumb;
}

export const getSelectedBorderColor = (state) => {
	return state.ui.selectedBorderColor;
}

export const getThumbHeight = (state) => {
	return uiHelpers.calculateThumbHeight(state.ui.rowNumber);
}