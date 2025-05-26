import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useEntityRecord } from "@wordpress/core-data";
import { Spinner } from "@wordpress/components";

import "./editor.scss";

export default function Edit(props) {
	const { context } = props;

	const { hasResolved, record } = useEntityRecord(
		"postType",
		"post",
		context["capitainewp/lastPostId"],
	);

	return (
		<div {...useBlockProps()}>
			{hasResolved ? record.title.raw : <Spinner />}
		</div>
	);
}
