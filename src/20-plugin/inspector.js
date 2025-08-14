import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import SearchPlugin from "./search-plugin";

export default function Inspector(props) {
	const { setAttributes } = props;

	return (
		<InspectorControls>
			<PanelBody title={__("Select a plugin", "capitainewp-blocks")}>
				<SearchPlugin
					onChange={(plugin) => setAttributes({ slug: plugin.slug })}
				/>
			</PanelBody>
		</InspectorControls>
	);
}
