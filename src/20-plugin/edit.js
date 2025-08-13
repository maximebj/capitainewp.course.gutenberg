import { useBlockProps } from "@wordpress/block-editor";
import { Placeholder } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import Inspector from "./inspector";
import Block from "./block";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { slug } = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<Inspector {...{ setAttributes }} />

			<div {...blockProps}>
				{slug ? (
					<Block slug={slug} />
				) : (
					<Placeholder
						icon="search"
						label={__("Select a plugin", "capitainewp-blocks")}
						instructions={__(
							"Search for a plugin in the inspector",
							"capitainewp-blocks",
						)}
					/>
				)}
			</div>
		</>
	);
}
