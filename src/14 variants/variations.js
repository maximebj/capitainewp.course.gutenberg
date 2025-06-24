const variations = [
	{
		name: "capitainewp/variants-advice",
		title: "Advice",
		description: "Un bloc affichant un conseil.",
		attributes: {
			content: "Advice",
			type: "advice",
		},
		isDefault: true,
		scope: ["block", "inserter", "transform"],
		isActive: ["type"],
		icon: "yes-alt",
		example: {
			attributes: {
				content: "Un conseil",
				type: "advice",
			},
		},
	},
	{
		name: "capitainewp/variants-warning",
		title: "Warning",
		description: "Un bloc affichant un avertissement.",
		attributes: {
			content: "Warning",
			type: "warning",
		},
		scope: ["block", "inserter", "transform"],
		isActive: ["type"],
		icon: "warning",
		example: {
			attributes: {
				content: "Un avertissement",
				type: "warning",
			},
		},
	},
	{
		name: "capitainewp/variants-avoid",
		title: "Avoid",
		description: "Un bloc affichant une mise en garde.",
		attributes: {
			content: "Avoid",
			type: "avoid",
		},
		scope: ["block", "inserter", "transform"],
		isActive: ["type"],
		icon: "dismiss",
		example: {
			attributes: {
				content: "Une mise en garde",
				type: "avoid",
			},
		},
	},
	{
		name: "capitainewp/variants-informations",
		title: "Information",
		description: "Un bloc affichant une information.",
		attributes: {
			content: "Information",
			type: "info",
		},
		scope: ["block", "inserter", "transform"],
		isActive: ["type"],
		icon: "info",
		example: {
			attributes: {
				content: "Une information",
				type: "info",
			},
		},
	},
];

export default variations;
