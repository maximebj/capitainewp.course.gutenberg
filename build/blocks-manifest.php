<?php
// This file is generated. Do not modify it manually.
return array(
	'01 first' => array(
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
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'02 supports' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/supports',
		'version' => '1.0',
		'title' => 'Supports',
		'category' => 'capitainewp',
		'icon' => 'art',
		'description' => 'Ajouter des fonctionnalités supplémentaires à un bloc.',
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
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
			'multiple' => false,
			'anchor' => true,
			'customClassName' => false,
			'className' => true,
			'html' => false,
			'reusable' => true
		),
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'03 richtext' => array(
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
				'selector' => 'p'
			)
		),
		'example' => array(
			'content' => '<p>Un bloc Richtext</p>'
		),
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'04 toolbar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/toolbar',
		'version' => '1.0',
		'title' => 'Toolbar',
		'category' => 'capitainewp',
		'icon' => 'warning',
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
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'05 inspector' => array(
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
				'selector' => '.wp-block-capitainewp-inspector__title'
			),
			'description' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-capitainewp-inspector__description'
			),
			'hasTag' => array(
				'type' => 'boolean',
				'default' => true
			),
			'tag' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-capitainewp-inspector__tag',
				'default' => 'New'
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
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'06 components' => array(
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
				'selector' => '.wp-block-capitainewp-components__title'
			),
			'description' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-capitainewp-components__description'
			),
			'hasTag' => array(
				'type' => 'boolean',
				'default' => true
			),
			'tag' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.wp-block-capitainewp-components__tag',
				'default' => 'New'
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
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'07 media' => array(
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
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'08 innerblocks' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/innerblocks',
		'version' => '1.0',
		'title' => 'Innerblocks',
		'category' => 'capitainewp',
		'icon' => 'insert',
		'description' => 'Un bloc dans lequel on peut insérer d\'autres blocs.',
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'09 item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/item',
		'version' => '1.0',
		'title' => 'Enfant du répéteur',
		'category' => 'capitainewp',
		'icon' => 'yes-alt',
		'parent' => array(
			'capitainewp/repeater'
		),
		'description' => 'bloc enfant du répéteur.',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			)
		),
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'09 repeater' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/repeater',
		'version' => '1.0',
		'title' => 'Répéteur',
		'category' => 'capitainewp',
		'icon' => 'list-view',
		'description' => 'Un bloc dans lequel on peut insérer un seul type de bloc plusieurs fois.',
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'10 dynamic' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/dynamic',
		'version' => '1.0',
		'title' => 'Dynamic',
		'category' => 'capitainewp',
		'icon' => 'book',
		'description' => 'Un bloc qui récupère ses données dynamiquement.',
		'attributes' => array(
			'numberOfPosts' => array(
				'type' => 'number',
				'default' => 3
			)
		),
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'11 api' => array(
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
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'12 select' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/select',
		'version' => '1.0',
		'title' => 'Select',
		'category' => 'capitainewp',
		'icon' => 'superhero-alt',
		'description' => 'Un bloc qui récupère des données depuis l’éditeur de blocs.',
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'14 transforms' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/transforms',
		'version' => '1.0',
		'title' => 'Transforms',
		'category' => 'capitainewp',
		'icon' => 'update',
		'description' => 'Un bloc qui se transforme en un autre.',
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			)
		),
		'example' => array(
			'content' => '<p>Je suis un bloc transformable.</p>'
		),
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'15 deprecated' => array(
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
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
