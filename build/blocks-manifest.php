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
	)
);
