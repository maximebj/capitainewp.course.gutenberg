import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const { item } = attributes;

	return (
		<ul {...useBlockProps.save()}>
			<RichText.Content tagName="li" value={item} />
		</ul>
	);
}
