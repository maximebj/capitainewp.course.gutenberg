import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const { pictureID, pictureURL, pictureAlt } = attributes;

	if (!pictureID) {
		return null; // Si aucune image n'est sélectionnée, ne rien afficher
	}

	return (
		<figure {...useBlockProps.save()}>
			<img
				src={pictureURL}
				alt={pictureAlt}
				className={`wp-image-${pictureID}`}
			/>
		</figure>
	);
}
