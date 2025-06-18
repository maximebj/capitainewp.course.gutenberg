import {
	BlockControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { content, type } = attributes;

	const options = [
		{
			slug: "advice",
			label: __("Advice", "capitainewp-blocks"),
			icon: "yes-alt",
		},
		{
			slug: "warning",
			label: __("Warning", "capitainewp-blocks"),
			icon: "warning",
		},
		{
			slug: "avoid",
			label: __("Avoid", "capitainewp-blocks"),
			icon: "dismiss",
		},
		{
			slug: "info",
			label: __("Information", "capitainewp-blocks"),
			icon: "info",
		},
	];

	const blockProps = useBlockProps({ className: `is-type-${type}` });

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{options.map((option) => (
						<ToolbarButton
							key={option.slug}
							icon={option.icon}
							label={option.label}
							// className={`capitainewp-toolbar-${option.slug}`}
							onClick={() => props.setAttributes({ type: option.slug })}
							isPressed={type === option.slug}
						/>
					))}
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<RichText
					tagName="p"
					placeholder={__("Your alert here", "capitainewp-blocks")}
					value={content}
					onChange={(content) => setAttributes({ content })}
				/>
			</div>
		</>
	);
}
