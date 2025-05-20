import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const { pictureID, pictureURL, pictureAlt } = attributes;

	return (
		pictureID && (
			<p {...useBlockProps.save()}>
				<img src={pictureURL} alt={pictureAlt} />
			</p>
		)
	);
}
