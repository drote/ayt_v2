import * as uiHelpers from './uiHelpers';

export const getPageHeading = (state) => {
	return state.heading.title;
}

export const getHeadingImage = (state) => {
	return state.heading.imgUrl;
}

export const getSideBarWidth = (state) => {
	return state.settings.sideBarWidth;
}

export const getMainWidth = (state) => {
	return `${100 - parseInt(state.settings.sideBarWidth, 10)}%`;
}

export const getSideBarPos = (state) => {
	return state.settings.sideBarPosition;
}

export const getMainPos = (state) => {
	return state.settings.sideBarPosition === 'right' ? 'left' : 'right';
}

export const getButtonsActiveStatus = (state) => {
	return state.settings.showActionButtons;
}

export const getSearchStatus = (state) => {
	return state.searchStatus;
}

export const getPageN = (state) => {
	return state.content.pageN;
}

export const getGridClass = (state) => {
	return uiHelpers.gridClass(state.settings.colNumber);
}

export const getResultsPerPage = (state) => {
	return state.settings.colNumber * state.settings.rowNumber;
}

export const getSelectedThumb = (state) => {
	return state.selectedThumb;
}

export const getModalActiveStatus = (state) => {
	return state.modalContent.active;
}

export const getEditedThumbIdx = (state) => {
	return state.modalContent.thumbIdx
}

export const getSelectedBorderStyle = (state) => {
	return uiHelpers.selectedBorderStyle(state.settings.highlightColor);
}

export const getRegularBorderStyle = () => {
	return uiHelpers.regularBorderStyle();
}

export const getNumberOfTextRows = (state) => {
	return uiHelpers.textRowNumber(state.settings.rowNumber);
}

export const getThumbHeight = (state) => {
	return uiHelpers.thumbHeightStyle(state.settings.rowNumber);
}

export const getTitleSize = (state) => {
	return uiHelpers.titleSize(state.settings.rowNumber);
}

export const getImageClass = (state) => {
	return uiHelpers.imageClass(state.settings.rowNumber);
}

export const getSearchErrorStatus = (state) => {
	return state.searchStatus === 'error';
}

export const getImagesForModalThumb = (state) => {
	return state.modalContent.images || '';
}

export const getUrlForModalThumb = (state) => {
	return state.modalContent.url || '';
}

export const getTitleForModalThumb = (state) => {
	return state.modalContent.title || '';
}

export const getSettings = (state) => {
	return state.settings;
}

export const getContent = (state) => {
	return state.content;
}