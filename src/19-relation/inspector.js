import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/blockEditor";
import { PanelBody, ToggleControl } from "@wordpress/components";

import SearchPost from "../shared/search-post";

export default function Inspector(props) {
	const { attributes, setAttributes } = props;
	const { postID, showImage, showAuthor, showCategory } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__("Choose a post", "capitainewp-blocks")}>
				<SearchPost
					onChange={(postID) => setAttributes({ postID })}
					postType="posts"
					resultsNumber={20}
					placeholder={__("Search post", "capitainewp-blocks")}
				/>
			</PanelBody>

			{postID && (
				<PanelBody title={__("Customize", "capitainewp-blocks")}>
					<ToggleControl
						label={__("Show Image?", "capitainewp-blocks")}
						checked={showImage}
						onChange={() => setAttributes({ showImage: !showImage })}
					/>

					<ToggleControl
						label={__("Show Author?", "capitainewp-blocks")}
						checked={showAuthor}
						onChange={() => setAttributes({ showAuthor: !showAuthor })}
					/>

					<ToggleControl
						label={__("Show Category?", "capitainewp-blocks")}
						checked={showCategory}
						onChange={() => setAttributes({ showCategory: !showCategory })}
					/>
				</PanelBody>
			)}
		</InspectorControls>
	);
}
