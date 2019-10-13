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

}

export const getColN = (state) => {
	return state.ui.colNumber;
}

export const getPageN = (state) => {
	return state.ui.pageN;
}

export const getSelectedThumb = (state) => {
	return state.ui.selectedThumb;
}

export const getThumbHeight = (state) => {
	return uiHelpers.calculateThumbHeight(state.ui.colNumber, state.ui.RowNumber);
}