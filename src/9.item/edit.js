import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import CheckIcon from "./CheckIcon";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { content } = attributes;

	return (
		<li {...useBlockProps()}>
			<CheckIcon />
			<RichText
				tagName="p"
				placeholder={__("Your text here", "capitainewp")}
				value={content}
				onChange={(content) => setAttributes({ content })}
			/>
		</li>
	);
}
