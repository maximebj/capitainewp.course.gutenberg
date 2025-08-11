<?php
// This file is generated. Do not modify it manually.
return array(
	'01-first' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/base',
		'version' => '1.0',
		'title' => 'First',
		'category' => 'capitainewp',
		'icon' => 'smiley',
		'description' => 'Bloc de base fourni avec le package Create Block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'02-supports' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/supports',
		'version' => '1.0',
		'title' => 'Supports',
		'category' => 'capitainewp',
		'icon' => 'art',
		'description' => 'Ajouter des fonctionnalités supplémentaires à un bloc.',
		'supports' => array(
			'align' => true,
			'color' => array(
				'background' => true,
				'text' => true,
				'link' => true,
				'button' => true,
				'heading' => true,
				'gradients' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true,
				'blockGap' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'textAlign' => true
			),
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true
			),
			'dimensions' => array(
				'minHeight' => true
			),
			'position' => array(
				'sticky' => true
			),
			'shadow' => true,
			'anchor' => true,
			'customClassName' => true,
			'className' => true,
			'html' => false,
			'multiple' => true,
			'renaming' => true,
			'reusable' => false
		),
		'example' => array(
			
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'03-richtext' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/richtext',
		'version' => '1.0',
		'title' => 'Richtext',
		'category' => 'capitainewp',
		'icon' => 'edit',
		'description' => 'Un bloc administrable grâce au composant RichText.',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p',
				'default' => '<p>Hello world!</p>',
				'role' => 'content'
			)
		),
		'example' => array(
			'attributes' => array(
				'content' => '<p>Un bloc Richtext</p>'
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'04-toolbar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/toolbar',
		'version' => '1.0',
		'title' => 'Toolbar',
		'category' => 'capitainewp',
		'icon' => 'bell',
		'description' => 'Un bloc d’alerte avec plusieurs styles.',
		'keywords' => array(
			'attention',
			'alerte',
			'conseil',
			'éviter',
			'succès'
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			),
			'type' => array(
				'type' => 'string',
				'default' => 'advice'
			)
		),
		'example' => array(
			'attributes' => array(
				'content' => '<p>Un bloc d’alerte avec plusieurs styles.</p>',
				'type' => 'advice'
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'05-inspector' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/inspector',
		'version' => '1.0',
		'title' => 'Inspector',
		'category' => 'capitainewp',
		'icon' => 'analytics',
		'description' => 'Un bloc avec des options dans l’inspecteur.',
		'attributes' => array(
			'emoji' => array(
				'type' => 'string',
				'default' => '😃'
			),
			'title' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-capitainewp-inspector__title',
				'role' => 'content'
			),
			'description' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-capitainewp-inspector__description',
				'role' => 'content'
			),
			'hasTag' => array(
				'type' => 'boolean',
				'default' => true
			),
			'tag' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-capitainewp-inspector__tag',
				'default' => 'New',
				'role' => 'content'
			),
			'tagColor' => array(
				'type' => 'string',
				'default' => 'var(--wp--preset--color--accent-2)'
			),
			'tagTextColor' => array(
				'type' => 'string',
				'default' => 'var(--wp--preset--color--accent-3)'
			),
			'tagRadius' => array(
				'type' => 'number',
				'default' => 5
			)
		),
		'supports' => array(
			'color' => array(
				'text' => true,
				'background' => true
			)
		),
		'example' => array(
			'attributes' => array(
				'emoji' => '😃',
				'title' => 'Le titre du bloc.',
				'description' => 'Une description digne de ce nom.',
				'hasTag' => true,
				'tag' => 'Nouveau',
				'tagColor' => 'var(--wp--preset--color--accent-2)',
				'tagTextColor' => 'var(--wp--preset--color--accent-3)',
				'tagRadius' => 5
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'06-media' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'capitainewp/media',
		'version' => '1.0',
		'title' => 'Media',
		'icon' => 'camera',
		'category' => 'capitainewp',
		'description' => 'Un bloc avec le composant Media',
		'attributes' => array(
			'pictureID' => array(
				'type' => 'number',
				'default' => null
			),
			'pictureURL' => array(
				'type' => 'string',
				'source' => 'attribute',
				'attribute' => 'src',
				'selector' => 'img'
			),
			'pictureAlt' => array(
				'type' => 'string',
				'source' => 'attribute',
				'attribute' => 'alt',
				'selector' => 'img'
			)
		),
		'example' => array(
			'attributes' => array(
				'pictureID' => 73,
				'pictureURL' => 'http://gutenberg.local/wp-content/uploads/2018/04/photo-1450696714834-bb5b4aee70d3.jpeg',
				'pictureAlt' => 'Une feuille avec des gouttes d’eau'
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'07-components' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/components',
		'version' => '1.0',
		'title' => 'Components',
		'category' => 'capitainewp',
		'icon' => 'screenoptions',
		'description' => 'Le bloc inspecteur mais avec des composants pour un code plus lisible.',
		'attributes' => array(
			'emoji' => array(
				'type' => 'string',
				'default' => '😃'
			),
			'title' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-capitainewp-components__title',
				'role' => 'content'
			),
			'description' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-capitainewp-components__description',
				'role' => 'content'
			),
			'hasTag' => array(
				'type' => 'boolean',
				'default' => true
			),
			'tag' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-capitainewp-components__tag',
				'default' => 'New',
				'role' => 'content'
			),
			'tagColor' => array(
				'type' => 'string',
				'default' => 'var(--wp--preset--color--accent-2)'
			),
			'tagTextColor' => array(
				'type' => 'string',
				'default' => 'var(--wp--preset--color--accent-3)'
			),
			'tagRadius' => array(
				'type' => 'number',
				'default' => 5
			)
		),
		'supports' => array(
			'color' => array(
				'background' => true
			)
		),
		'example' => array(
			'attributes' => array(
				'emoji' => '♥️',
				'title' => 'Le titre du bloc.',
				'description' => 'Une description digne de ce nom.',
				'hasTag' => true,
				'tag' => 'Nouveau',
				'tagColor' => 'var(--wp--preset--color--accent-3)',
				'tagTextColor' => 'var(--wp--preset--color--accent-2)',
				'tagRadius' => 10
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'08-innerblocks' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/innerblocks',
		'version' => '1.0',
		'title' => 'Innerblocks',
		'category' => 'capitainewp',
		'icon' => 'insert',
		'description' => 'Un bloc dans lequel on peut insérer d\'autres blocs.',
		'example' => array(
			'innerBlocks' => array(
				array(
					'name' => 'core/image',
					'attributes' => array(
						
					)
				),
				array(
					'name' => 'core/heading',
					'attributes' => array(
						'content' => 'Un titre'
					)
				),
				array(
					'name' => 'core/paragraph',
					'attributes' => array(
						'content' => 'Un bloc dans lequel on peut insérer d\'autres blocs.'
					)
				)
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'09-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/item',
		'version' => '1.0',
		'title' => 'Enfant du répéteur',
		'icon' => 'yes-alt',
		'category' => 'capitainewp',
		'parent' => array(
			'capitainewp/repeater'
		),
		'description' => 'bloc enfant du répéteur.',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p',
				'role' => 'content'
			)
		),
		'example' => array(
			'attributes' => array(
				'content' => 'Un élément de la liste'
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'09-repeater' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/repeater',
		'version' => '1.0',
		'title' => 'Répéteur',
		'category' => 'capitainewp',
		'icon' => 'list-view',
		'description' => 'Un bloc dans lequel on peut insérer un seul type de bloc plusieurs fois.',
		'example' => array(
			'innerBlocks' => array(
				array(
					'name' => 'capitainewp/item',
					'attributes' => array(
						'content' => 'Un élément de la liste'
					)
				),
				array(
					'name' => 'capitainewp/item',
					'attributes' => array(
						'content' => 'Un élément de la liste'
					)
				),
				array(
					'name' => 'capitainewp/item',
					'attributes' => array(
						'content' => 'Un élément de la liste'
					)
				)
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'10-select' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/select',
		'version' => '1.0',
		'title' => 'Select',
		'category' => 'capitainewp',
		'icon' => 'superhero-alt',
		'description' => 'Un bloc qui récupère des données depuis l’éditeur de blocs.',
		'example' => array(
			
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'11-entityrecords' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/entityrecords',
		'version' => '1.0',
		'title' => 'Entity Records',
		'category' => 'capitainewp',
		'icon' => 'clipboard',
		'description' => 'Un bloc qui récupère ses données dynamiquement.',
		'attributes' => array(
			'numberOfPosts' => array(
				'type' => 'number',
				'default' => 3
			)
		),
		'example' => array(
			'attributes' => array(
				'numberOfPosts' => 3
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'12-api' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/api',
		'version' => '1.0',
		'title' => 'API Fetch',
		'category' => 'capitainewp',
		'icon' => 'category',
		'description' => 'Un bloc qui récupère ses données via l’API REST de WordPress.',
		'attributes' => array(
			'hideEmpty' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showCount' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'example' => array(
			'attributes' => array(
				'hideEmpty' => false,
				'showCount' => true
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'13-interactivity' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/interactivity',
		'version' => '1.0',
		'title' => 'Interactivity',
		'category' => 'capitainewp',
		'icon' => 'book',
		'description' => 'Un bloc qui utilise l’inteactivity API.',
		'supports' => array(
			'interactivity' => true
		),
		'example' => array(
			
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScriptModule' => 'file:./view.js'
	),
	'14-variants' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/variants',
		'version' => '1.0',
		'title' => 'Variants',
		'category' => 'capitainewp',
		'icon' => 'bell',
		'description' => 'Un bloc d’alerte avec plusieurs variantes.',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p',
				'role' => 'content'
			),
			'type' => array(
				'type' => 'string',
				'default' => 'advice'
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'15-context-consumer' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/context-consumer',
		'version' => '1.0',
		'title' => 'Context Consumer',
		'description' => 'Un bloc enfant qui consomme le contexte du parent.',
		'category' => 'capitainewp',
		'icon' => 'star-empty',
		'parent' => array(
			'capitainewp/context-provider'
		),
		'usesContext' => array(
			'capitainewp/last-post'
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'15-context-provider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/context-provider',
		'version' => '1.0',
		'title' => 'Context',
		'category' => 'capitainewp',
		'icon' => 'star-filled',
		'description' => 'Un bloc parent qui fournit un contexte à ses enfants.',
		'attributes' => array(
			'post' => array(
				'type' => 'object',
				'role' => 'local'
			)
		),
		'providesContext' => array(
			'capitainewp/last-post' => 'post'
		),
		'example' => array(
			'attributes' => array(
				'title' => 'Titre de l\'article'
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'16-transforms' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/transforms',
		'version' => '1.0',
		'title' => 'Transforms',
		'category' => 'capitainewp',
		'icon' => 'update',
		'description' => 'Un bloc qui se transforme en un autre.',
		'attributes' => array(
			'description' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			)
		),
		'example' => array(
			'attributes' => array(
				'description' => '<p>Je suis un bloc transformable.</p>'
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'17-deprecated' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/deprecated',
		'version' => '1.0',
		'title' => 'Deprecated',
		'category' => 'capitainewp',
		'icon' => 'migrate',
		'description' => 'Un bloc qui a évolué avec le temps.',
		'attributes' => array(
			'item' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'li'
			)
		),
		'example' => array(
			'attributes' => array(
				'item' => 'Un bloc qui gère sa dépréciation.'
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'18-table-of-contents' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'capitainewp/table-of-contents',
		'version' => '1.0',
		'title' => 'Sommaire',
		'category' => 'capitainewp',
		'icon' => 'list-view',
		'description' => 'Un sommaire généré automatiquement à partir des titres.',
		'keywords' => array(
			'table des matières',
			'sommaire'
		),
		'supports' => array(
			'html' => false,
			'align' => true
		),
		'attributes' => array(
			'title' => array(
				'source' => 'text',
				'type' => 'string',
				'selector' => '.wp-block-capitainewp-table-of-contents__title',
				'default' => 'Sommaire du cours'
			),
			'headings' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'ordered' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'textdomain' => 'capitainewp-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
