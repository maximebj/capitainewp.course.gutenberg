import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import v1 from "./v1";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	deprecated: [v1],
});
