import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<div {...useBlockProps.save()}>
			Ce bloc possède plein d’options nativement !
		</div>
	);
}
