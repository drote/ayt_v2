export const contentForPage = (content, pageN, cPP) => {
	const str = pageN * cPP;
	const end = str + cPP;

	return content.slice(str, end);
}
