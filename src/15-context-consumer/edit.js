import { useBlockProps } from "@wordpress/block-editor";
import { Spinner } from "@wordpress/components";

import "./editor.scss";

export default function Edit(props) {
	const { context } = props;
	const post = context["capitainewp/last-post"];

	console.log("From child block", context);

	return <div {...useBlockProps()}>{post?.title.rendered ?? <Spinner />}</div>;
}
