import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { content } = attributes;

	return (
		<div {...useBlockProps()}>
			<RichText
				tagName="p"
				placeholder={__("Your text here", "capitainewp-blocks")}
				value={content}
				onChange={(content) => setAttributes({ content })}
				allowedFormats={["core/bold", "core/italic"]}
			/>
		</div>
	);
}
