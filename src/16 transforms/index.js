import { registerBlockType, createBlock } from "@wordpress/blocks";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	transforms: {
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
	},
});
