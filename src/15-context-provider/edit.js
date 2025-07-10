import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { useEntityRecords } from "@wordpress/core-data";
import { useEffect } from "@wordpress/element";

import "./editor.scss";

export default function Edit(props) {
	const { setAttributes } = props;

	const ALLOWED_BLOCKS = ["capitainewp/context-consumer"];
	const TEMPLATE = [["capitainewp/context-consumer"]];

	const { hasResolved, records } = useEntityRecords("postType", "post", {
		per_page: 1,
	});

	useEffect(() => {
		if (hasResolved) {
			setAttributes({ post: records[0] });
		}
	}, [hasResolved, records]);

	return (
		<div {...useBlockProps()}>
			<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
		</div>
	);
}
