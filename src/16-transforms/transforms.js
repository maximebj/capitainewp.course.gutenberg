import { createBlock } from "@wordpress/blocks";

const transforms = {
	from: [
		{
			type: "block",
			blocks: ["core/paragraph", "core/heading"],
			transform: ({ content }) => {
				return createBlock("capitainewp/transforms", {
					description: content,
				});
			},
		},
	],
	to: [
		{
			type: "block",
			blocks: ["core/paragraph"],
			transform: ({ description }) => {
				return createBlock("core/paragraph", {
					content: description,
				});
			},
		},
		{
			type: "block",
			blocks: ["core/heading"],
			transform: ({ description }) => {
				return createBlock("core/heading", {
					content: description,
				});
			},
		},
	],
};

export default transforms;
