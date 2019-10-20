import * as uiHelpers from './uiHelpers';

export const getPageHeading = (state) => {
	return state.ui.heading.title;
}

export const getHeadingImage = (state) => {
	return state.ui.heading.imgUrl;
}

export const getSideBarWidth = (state) => {
	return state.ui.sideBar.width;
}

export const getMainWidth = (state) => {
	return state.ui.heading.width;
}

export const getSideBarPos = (state) => {
	return state.ui.sideBar.position;
}

export const getMainPos = (state) => {
	return state.ui.heading.position;
}

export const getButtonsActiveStatus = (state) => {
	return state.ui.sideBar.showActionButtons;
}

export const getSearchStatus = (state) => {
	return state.searchStatus;
}

export const getPageN = (state) => {
	return state.ui.content.pageN;
}

export const getGridClass = (state) => {
	return uiHelpers.gridClass(state.ui.content.colNumber);
}

export const getResultsPerPage = (state) => {
	return state.ui.content.colNumber * state.ui.content.rowNumber;
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
	return uiHelpers.selectedBorderStyle(state.ui.thumb.selectedBorderColor);
}

export const getRegularBorderStyle = () => {
	return uiHelpers.regularBorderStyle();
}

export const getNumberOfTextRows = (state) => {
	return uiHelpers.textRowNumber(state.ui.content.rowNumber);
}

export const getThumbHeight = (state) => {
	return uiHelpers.thumbHeightStyle(state.ui.content.rowNumber);
}

export const getTitleSize = (state) => {
	return uiHelpers.titleSize(state.ui.content.rowNumber);
}

export const getImageClass = (state) => {
	return uiHelpers.imageClass(state.ui.content.rowNumber);
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

export const getContent = (state) => {
	return state.content;
}