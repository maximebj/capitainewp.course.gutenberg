import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { item } = attributes;

	return (
		<ul {...useBlockProps()}>
			<RichText
				tagName="li"
				placeholder={__("Your text here", "capitainewp")}
				value={item}
				onChange={(item) => setAttributes({ item })}
			/>
		</ul>
	);
}
