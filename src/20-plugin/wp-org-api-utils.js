import { decodeEntities } from "@wordpress/html-entities";

const apiUrl = "https://api.wordpress.org/plugins/info/1.2/";

const fields = [
	"slug",
	"name",
	"short_description",
	"icons",
	"rating",
	"num_ratings",
	"active_installs",
	"author",
	"homepage",
];

function getFields(fields) {
	return fields.map((field) => `request[fields][${field}]=1`).join("&");
}

export async function searchPlugin(search, perPage = 20) {
	const response = await fetch(
		`${apiUrl}?action=query_plugins&request[search]=${encodeURIComponent(
			search,
		)}&request[per_page]=${perPage}&${getFields(fields)}`,
	);

	const data = await response.json();

	return data.plugins.map(formatPluginData);
}

export async function getPlugin(slug) {
	const response = await fetch(
		`${apiUrl}?action=plugin_information&request[slug]=${encodeURIComponent(
			slug,
		)}&${getFields(fields)}`,
	);

	const data = await response.json();

	return formatPluginData(data);
}

function formatPluginData(data) {
	return {
		slug: data.slug,
		name: decodeEntities(data.name),
		description: data.short_description,
		icon:
			data.icons && data.icons["2x"]
				? data.icons["2x"]
				: data.icons && data.icons["1x"]
				? data.icons["1x"]
				: data.icons && data.icons.default
				? data.icons.default
				: "https://s.w.org/style/images/wordpress-logo-32-blue.png",
		rating: data.rating,
		numRatings: data.num_ratings,
		activeInstalls: data.active_installs,
		author: decodeEntities(data.author),
		homepage: data.homepage,
		downloadLink: `https://wordpress.org/plugins/${data.slug}/`,
		stars: formatStars(data.rating),
	};
}

// Helper function to format rating as stars
function formatStars(rating) {
	if (!rating) return "";

	const ratingPercent = parseInt(rating) / 20;
	const fullStars = Math.floor(ratingPercent);
	const hasHalfStar = ratingPercent % 1 >= 0.5;

	let stars = "";
	for (let i = 0; i < fullStars; i++) {
		stars += "★";
	}
	if (hasHalfStar) {
		stars += "☆";
	}
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
	for (let i = 0; i < emptyStars; i++) {
		stars += "○";
	}

	return stars;
}
