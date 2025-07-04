import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const { description } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<RichText.Content tagName="p" value={description} />
		</div>
	);
}
