import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, BlockVariationPicker } from "@wordpress/components";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { content, type } = attributes;

	const blockProps = useBlockProps({ className: `is-type-${type}` });

	return (
		<div {...blockProps}>
			<RichText
				tagName="p"
				value={content}
				onChange={(content) => setAttributes({ content })}
				placeholder={__("Your text here", "capitainewp")}
			/>
		</div>
	);
}
