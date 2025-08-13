import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { Placeholder } from "@wordpress/components";

import Block from "./block";
import Inspector from "./inspector";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { postID } = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<Inspector {...{ attributes, setAttributes }} />

			<div {...blockProps}>
				{postID ? (
					<Block {...attributes} />
				) : (
					<Placeholder
						icon="search"
						label={__("Select a post", "capitainewp-gut-bases")}
						instructions={__(
							"Search for a post in the inspector",
							"capitainewp-gut-bases",
						)}
					/>
				)}
			</div>
		</>
	);
}
