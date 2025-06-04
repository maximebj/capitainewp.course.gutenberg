import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import CustomIcon from "./custom-icon";

registerBlockType(metadata.name, {
	icon: {
		src: CustomIcon,
		foreground: "#114B5F",
		background: "#E4FDE1",
	},
	edit: Edit,
	save,
});
