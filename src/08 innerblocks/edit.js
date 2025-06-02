import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
	// Liste des blocs autorisés
	const ALLOWED_BLOCKS = ["core/image", "core/heading", "core/paragraph"];

	// Template de blocs
	const BASE_TEMPLATE = [
		["core/image", {}],
		[
			"core/heading",
			{ placeholder: __("Your title here", "capitainewp-blocks") },
		],
		[
			"core/paragraph",
			{ placeholder: __("Your content here", "capitainewp-blocks") },
		],
	];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks
			//allowedBlocks={ALLOWED_BLOCKS}
			//template={BASE_TEMPLATE}
			//templateLock="all"
			/>
		</div>
	);
}
