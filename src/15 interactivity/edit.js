import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useEntityRecords } from "@wordpress/core-data";

import "./editor.scss";

export default function Edit() {
	const { records: posts } = useEntityRecords("postType", "post", {
		per_page: -1,
		_embed: true,
	});

	const { records: categories } = useEntityRecords("taxonomy", "category", {
		per_page: -1,
		hide_empty: false,
	});

	return (
		<div {...useBlockProps()}>
			<h2>{__("Filter posts", "capitainewp")}</h2>
			<ul className="wp-block-capitainewp-interactivity__categories">
				{categories?.map((category) => (
					<li key={category.id}>{category.name}</li>
				))}
			</ul>
			<ul className="wp-block-capitainewp-interactivity__posts">
				{posts?.map((post) => (
					<li key={post.id}>{post.title.rendered}</li>
				))}
			</ul>
		</div>
	);
}
