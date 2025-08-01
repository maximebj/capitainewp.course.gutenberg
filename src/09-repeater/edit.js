import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

const ALLOWED_BLOCKS = ["capitainewp/item"];

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<h2>Todo List</h2>
			<ul>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</ul>
		</div>
	);
}
