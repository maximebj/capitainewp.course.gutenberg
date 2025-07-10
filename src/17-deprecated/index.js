import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import metadata from "./block.json";
import Edit from "./edit";
import save from "./save";
import v1 from "./v1";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	deprecated: [v1],
});
