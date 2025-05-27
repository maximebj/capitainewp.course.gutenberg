import { __ } from "@wordpress/i18n";
import apiFetch from "@wordpress/api-fetch";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";

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
		}).then((categories) => {
			setCategories(categories);
			//console.log(categories);
		});
	}, [hideEmpty]);

	return (
		<>
			<div {...useBlockProps()}>
				<Loading
					label={__("Loading categories…", "capitainewp")}
					show={categories === null}
				/>
				<CatList categories={categories} showCount={showCount} />
			</div>

			<InspectorControls>
				<PanelBody title={__("Settings", "capitainewp")}>
					<ToggleControl
						label={__("Hide empty categories", "capitainewp")}
						checked={hideEmpty}
						onChange={(hideEmpty) => setAttributes({ hideEmpty })}
					/>
					<ToggleControl
						label={__("Show count", "capitainewp")}
						checked={showCount}
						onChange={(showCount) => setAttributes({ showCount })}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
