import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit(props) {
	const ALLOWED_BLOCKS = ["capitainewp/item"];

	return (
		<div {...useBlockProps()}>
			<h2>Todo List</h2>
			<ul>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</ul>
		</div>
	);
}
