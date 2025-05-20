<?php
// This file is generated. Do not modify it manually.
return array(
	'1.base' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/base',
		'version' => '1.0',
		'title' => '1. Bloc de base',
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
	'2.supports' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/supports',
		'version' => '1.0',
		'title' => '2. Supports',
		'category' => 'capitainewp',
		'icon' => 'art',
		'description' => 'Ajouter des fonctionnalités supplémentaires à un bloc.',
		'example' => array(
			
		),
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
			'html' => false,
			'anchor' => true,
			'customClassName' => false
		),
		'textdomain' => 'capitainewp',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'3.richtext' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/richtext',
		'version' => '1.0',
		'title' => '3. Richtext',
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
	'4.toolbar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/toolbar',
		'version' => '1.0',
		'title' => '4. Toolbar',
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
	'5.inspector' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/inspector',
		'version' => '1.0',
		'title' => '5. Inspecteur',
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
	'6.components' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'capitainewp/components',
		'version' => '1.0',
		'title' => '6. Composants',
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
	'7.media' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 2,
		'name' => 'capitainewp/media',
		'version' => '1.0',
		'title' => '7. Média',
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
	)
);
