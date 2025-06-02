import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";

import Loading from "../shared/loading";
import PostList from "./posts";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { numberOfPosts } = attributes;

	const { hasResolved, records } = useEntityRecords("postType", "post", {
		per_page: numberOfPosts,
		_embed: true,
	});

	//console.log(hasResolved, records);

	return (
		<>
			<div {...useBlockProps()}>
				<Loading
					label={__("Loading posts…", "capitainewp-blocks")}
					show={!hasResolved}
				/>
				<PostList posts={records} />
			</div>

			<InspectorControls>
				<PanelBody title={__("Settings", "capitainewp-blocks")}>
					<RangeControl
						label={__("Number of posts", "capitainewp-blocks")}
						value={numberOfPosts}
						onChange={(numberOfPosts) => setAttributes({ numberOfPosts })}
						min={1}
						max={10}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
