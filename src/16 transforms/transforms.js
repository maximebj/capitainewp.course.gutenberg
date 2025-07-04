import { createBlock } from "@wordpress/blocks";

const transforms = {
	from: [
		{
			type: "block",
			blocks: ["core/paragraph"],
			transform: ({ content }) => {
				return createBlock("capitainewp/transforms", {
					content,
				});
			},
		},
	],
	to: [
		{
			type: "block",
			blocks: ["core/paragraph"],
			transform: ({ content }) => {
				return createBlock("core/paragraph", {
					content,
				});
			},
		},
	],
};

export default transforms;
