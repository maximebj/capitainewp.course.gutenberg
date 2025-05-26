import { useBlockProps, RichText } from "@wordpress/block-editor";

const v1 = {
	attributes: {
		content: {
			type: "string",
			source: "html",
			selector: "p",
		},
	},
	migrate(attributes) {
		const { content } = attributes;
		return {
			item: content,
		};
	},
	save(props) {
		const { attributes } = props;
		const { content } = attributes;

		return (
			<div {...useBlockProps.save()}>
				<RichText.Content tagName="p" value={content} />
			</div>
		);
	},
};

export default v1;
