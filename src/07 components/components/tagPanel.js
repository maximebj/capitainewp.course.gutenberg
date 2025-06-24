export default function TagPanel({ hasTag, setAttributes, tagRadius }) {
	return (
		<PanelBody title={__("Tag", "capitainewp-gut-bases")}>
			<ToggleControl
				label={__("Show tag", "capitainewp-gut-bases")}
				checked={hasTag}
				onChange={() => setAttributes({ hasTag: !hasTag })}
			/>

			{hasTag && (
				<RangeControl
					label={__("Radius", "capitainewp-gut-bases")}
					value={tagRadius}
					onChange={(tagRadius) => setAttributes({ tagRadius })}
					min={0}
					max={50}
				/>
			)}
		</PanelBody>
	);
}
