import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
	return (
		<div {...useBlockProps()}>Ce bloc possède plein d’options nativement !</div>
	);
}
