import apiFetch from "@wordpress/api-fetch";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import Loading from "../shared/loading";
import CatList from "./categories";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { hideEmpty, showCount } = attributes;

	const [categories, setCategories] = useState(null);

	useEffect(() => {
		apiFetch({
			path: `/wp/v2/categories?hide_empty=${hideEmpty}`,
			method: "GET",
		}).then((categories) => {
			setCategories(categories);
			//console.log(categories);
		});
	}, [hideEmpty]);

	return (
		<>
			<div {...useBlockProps()}>
				<Loading
					label={__("Loading categories…", "capitainewp-blocks")}
					show={categories === null}
				/>
				<CatList categories={categories} showCount={showCount} />
			</div>

			<InspectorControls>
				<PanelBody title={__("Settings", "capitainewp-blocks")}>
					<ToggleControl
						label={__("Hide empty categories", "capitainewp-blocks")}
						checked={hideEmpty}
						onChange={(hideEmpty) => setAttributes({ hideEmpty })}
					/>
					<ToggleControl
						label={__("Show count", "capitainewp-blocks")}
						checked={showCount}
						onChange={(showCount) => setAttributes({ showCount })}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
