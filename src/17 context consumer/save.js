import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const { content } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<RichText.Content tagName="p" value={content} />
		</div>
	);
}
