import { cleanForSlug } from "@wordpress/url";

// 1. Extraire les titres du contenu
export function getHeadingsFromContent(blocks) {
	const headings = [];
	blocks.map((block) => {
		if (block.name === "core/heading" && block.attributes?.content.length > 0) {
			headings.push(cleanBlock(block));
		}

		// Récursion dans les blocs enfants
		headings.push(...getHeadingsFromContent(block.innerBlocks));
	});
	return headings;
}

// 2. Mettre à jour les ancres des blocs de titre avec le slug du titre
export function updateHeadingsAnchors(headings, updateBlockAttributes) {
	headings.map((block) => {
		updateBlockAttributes(block.clientId, {
			anchor: block.slug,
		});
	});
}

// 3. Définir la hiérarchie des titres
export function buildHeadingHierarchy(headings) {
	const hierarchy = [];
	const levelMap = {};

	headings.forEach((heading) => {
		const { clientId, ...headingWithoutClientId } = heading;
		const { level } = heading;

		// Ajouter le titre au niveau actuel
		levelMap[level] = headingWithoutClientId;

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
				parent.children.push(headingWithoutClientId);
			}
		} else {
			// Titre au niveau supérieur, ajouter à la hiérarchie
			hierarchy.push(headingWithoutClientId);
		}
	});

	return hierarchy;
}

// Nettoyer le bloc pour ne garder que les données utiles
export function cleanBlock(block) {
	return {
		clientId: block.clientId,
		level: block.attributes.level,
		content:
			typeof block.attributes.content === "string"
				? block.attributes.content
				: block.attributes.content.text,
		slug: cleanForSlug(block.attributes.content),
	};
}
