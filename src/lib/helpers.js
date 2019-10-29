import queryString from 'query-string';

export const pageRange = (pageN, resultsPerPage) => {
	return [(pageN * resultsPerPage), (pageN * resultsPerPage + resultsPerPage)];
}

// export const contentForPage = (content, pageN, cPP) => {
// 	const str = pageN * cPP;
// 	const end = str + cPP;

// 	return content.slice(str, end);
// }

export const editingEnabled = (location) => {
	return !!(queryString.parse(location.search).edit === 'true'
    && location.pathname.match('/home'));
}

export const searchPage = (location) => {
	return !!location.pathname.match('/search') || location.pathname === '/';
}