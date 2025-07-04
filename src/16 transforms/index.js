import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import metadata from "./block.json";
import Edit from "./edit";
import save from "./save";
import transforms from "./transforms";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	transforms,
});
