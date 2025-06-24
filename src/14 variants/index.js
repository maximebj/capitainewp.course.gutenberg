import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import variations from "./variations";

registerBlockType(metadata.name, {
	edit: Edit,
	save,
	variations,
});
