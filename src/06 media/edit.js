import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { Placeholder, Button } from "@wordpress/components";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes, isSelected } = props;
	const { pictureID, pictureURL, pictureAlt } = attributes;

	// Gestion de la sélection de l'image
	const onSelectImage = (picture) => {
		console.log(picture); // Afficher les informations récupérées de l'image

		setAttributes({
			pictureID: picture.id,
			pictureURL: picture.url,
			pictureAlt: picture.alt,
		});
	};

	// Effacement des données de l'image
	const onRemoveImage = () => {
		setAttributes({
			pictureID: null,
			pictureURL: null,
			pictureAlt: null,
		});
	};

	return (
		<div {...useBlockProps()}>
			{!pictureID ? (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={["image"]}
						value={pictureID}
						render={({ open }) => (
							<Placeholder
								icon="images-alt"
								label={__("Photo", "capitainewp-blocks")}
								instructions={__("Select a picture", "capitainewp-blocks")}
							>
								<Button variant="primary" isLarge onClick={open} icon="upload">
									{__("Import", "capitainewp-blocks")}
								</Button>
							</Placeholder>
						)}
					/>
				</MediaUploadCheck>
			) : (
				<p className="capitaine-image-wrapper">
					<img src={pictureURL} alt={pictureAlt} />

					{isSelected && (
						<Button
							className="capitaine-remove-image"
							onClick={onRemoveImage}
							icon="dismiss"
						>
							{__("Remove picture", "capitainewp-blocks")}
						</Button>
					)}
				</p>
			)}
		</div>
	);
}
