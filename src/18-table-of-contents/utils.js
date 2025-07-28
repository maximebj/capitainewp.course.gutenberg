import { cleanForSlug } from "@wordpress/url";

// 1. Extraire les titres du contenu
export function getHeadingsFromContent(blocks) {
	const headings = [];
	blocks.map((block) => {
		if (block.name === "core/heading" && block.attributes?.content.length > 0) {
			const content =
				typeof block.attributes.content === "string"
					? block.attributes.content
					: block.attributes.content.text;

			headings.push({
				clientId: block.clientId,
				level: block.attributes.level,
				content: content,
				slug: cleanForSlug(content),
			});
		}

		// Récursion dans les blocs enfants
		headings.push(...getHeadingsFromContent(block.innerBlocks));
	});
	return headings;
}

// 2. Définir la hiérarchie des titres
export function buildHeadingHierarchy(headings) {
	const hierarchy = [];
	const levelMap = {};

	headings.map((heading) => {
		const { level } = heading;

		// Ajouter le titre au niveau actuel
		levelMap[level] = heading;

		// Si le titre n'est pas au niveau supérieur, trouver son parent
		if (level > 2) {
			const parentLevel = level - 1;

			// Récupérer le dernier titre du niveau parent
			const parent = levelMap[parentLevel];

			if (parent) {
				// Initialiser le tableau des enfants si il n'existe pas
				if (!parent.children) {
					parent.children = [];
				}
				parent.children.push(heading);
			}
		} else {
			// Titre au niveau supérieur, ajouter à la hiérarchie
			hierarchy.push(heading);
		}
	});

	return hierarchy;
}

// 3. Mettre à jour les ancres des blocs de titre avec le slug du titre
export function updateHeadingsAnchors(headings, updateBlockAttributes) {
	headings.map((block) => {
		const { clientId, slug } = block;
		updateBlockAttributes(clientId, {
			anchor: slug,
		});
	});
}
