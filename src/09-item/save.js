import { useBlockProps, RichText } from "@wordpress/block-editor";
import CheckIcon from "./CheckIcon";

export default function save(props) {
	const { attributes } = props;
	const { content } = attributes;

	return (
		<li {...useBlockProps.save()}>
			<CheckIcon />
			<RichText.Content tagName="p" value={content} />
		</li>
	);
}
