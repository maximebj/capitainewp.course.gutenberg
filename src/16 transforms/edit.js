import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { description } = attributes;

	return (
		<div {...useBlockProps()}>
			<RichText
				tagName="p"
				placeholder={__("Your text here", "capitainewp-blocks")}
				value={description}
				onChange={(description) => setAttributes({ description })}
			/>
		</div>
	);
}
