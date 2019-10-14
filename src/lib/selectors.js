import * as uiHelpers from './uiHelpers';

export const getPageHeading = (state) => {
	return state.ui.heading.title;
}

export const getHeadingImage = (state) => {
	return state.ui.heading.imgUrl;
}

export const getHeadingStatus = (state) => {
	return state.ui.heading.status;
}

export const getSideBarWidth = (state) => {
	return state.ui.sideBarWidth;
}

export const getMainWidth = (state) => {
	return state.ui.heading.width;
}

export const getSideBarPos = (state) => {
	return state.ui.sideBarPosition;
}

export const getMainPos = (state) => {
	return state.ui.heading.position;
}

export const getButtonsActiveStatus = (state) => {
	return state.ui.showActionButtons;
}

export const getContent = (state) => {
	return state.content;
}

export const getContentStatus = (state) => {
	return state.ui.content.status;
}

export const getColN = (state) => {
	return state.ui.content.colNumber;
}

export const getRowN = (state) => {
	return state.ui.content.rowNumber;
}

export const getPageN = (state) => {
	return state.ui.content.pageN;
}

export const getResultsPerPage = (state) => {
	return state.ui.content.colNumber * state.ui.content.rowNumber;
}

export const getSelectedThumb = (state) => {
	return state.ui.content.selectedThumb;
}

export const getSelectedBorderColor = (state) => {
	return state.ui.content.selectedBorderColor;
}

export const getThumbHeight = (state) => {
	return uiHelpers.calculateThumbHeight(state.ui.content.rowNumber);
}