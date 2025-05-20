import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<h2>Todo List</h2>
			<ul>
				<InnerBlocks.Content />
			</ul>
		</div>
	);
}
