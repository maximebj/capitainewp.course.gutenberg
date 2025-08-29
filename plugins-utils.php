<?php

/**
 * Préparer les données pour le plugin
 */
function capitainewp_prepare_plugins_data($data)
{

  // On force l'obtention d'un objet (parfois on obtient un tableau)
  if (is_array($data)) {
    $data = (object) $data;
  }

  if (is_wp_error($data)) {
    return;
  }

  // On prépare les données
  return (object) [
    'slug' => $data->slug,
    'name' => html_entity_decode($data->name),
    'description' => html_entity_decode($data->short_description),
    'icon' => capitainewp_define_image($data->icons),
    'stars' => capitainewp_set_stars($data->rating),
    'activeInstalls' => capitainewp_format_installs($data->active_installs),
    'downloadLink' => "https://wordpress.org/plugins/" . $data->slug,
    'rating' => $data->rating,
    'numRatings' => $data->num_ratings,
    'author' => strip_tags($data->author),
    'homepage' => $data->homepage,
    'numRatings' => $data->num_ratings,
  ];
}


/**
 * Récupérer l'image la plus appropriée en commençant par la version haute résolution si disponible
 */
function capitainewp_define_image($icons)
{
  if (array_key_exists('2x', $icons)) {
    return $icons['2x'];
  } else if (array_key_exists('1x', $icons)) {
    return $icons['1x'];
  } else {
    return $icons['default'];
  }
}


/**
 * Optimiser le libellé du nombre d'installations actives
 */
function capitainewp_format_installs($installs)
{
  if ($installs >= 1000000) {
    return '1+ Million';
  } else if ($installs < 10) {
    return 'Moins de 10';
  }

  return $installs . '+';
}


/**
 * Transformer la note sur 100 en étoiles
 */
function capitainewp_set_stars($rating)
{
  $rating = intval($rating) / 20;
  $floor = floor($rating);

  $max = 5;
  $last = 0;

  $stars = '';

  for ($i = 0; $i < $floor; $i++) {
    $stars .= capitainewp_get_star_svg('filled');
    $last++;
  }

  if ($floor != $rating) {
    $stars .= capitainewp_get_star_svg('half');
    $last++;
  }

  for ($i = $last; $i < $max; $i++) {
    $stars .= capitainewp_get_star_svg('empty');
  }

  return $stars;
}


/**
 * Étoiles SVG pleines, semi-pleines et vides
 */
function capitainewp_get_star_svg($type)
{
  if ($type == "filled") {
    return "
			<svg width='18px' height='18px'>
				<g fill='#F5BC41'>
					<polygon points='9 0 12 6 18 6.75 13.88 11.37 15 18 9 15 3 18 4.13 11.37 0 6.75 6 6'></polygon>
				</g>
			</svg>
		";
  } else if ($type == "half") {
    return "
			<svg width='18px' height='18px'>
				<g fill='#F5BC41'>
					<path d='M9,0 L6,6 L0,6.75 L4.13,11.37 L3,18 L9,15 L15,18 L13.88,11.37 L18,6.75 L12,6 L9,0 Z M9,2.24 L11.34,6.93 L15.99,7.51 L12.81,11.07 L13.68,16.22 L9,13.88 L9,2.24 Z'></path>
				</g>
			</svg>
		";
  }

  return "
		<svg width='18px' height='18px'>
			<g fill='#F5BC41'>
				<path d='M9,0 L6,6 L0,6.75 L4.13,11.37 L3,18 L9,15 L15,18 L13.88,11.37 L18,6.75 L12,6 L9,0 Z M9,2.24 L11.34,6.93 L15.99,7.51 L12.81,11.07 L13.68,16.22 L9,13.88 L4.32,16.22 L5.19,11.07 L2.01,7.51 L6.66,6.93 L9,2.24 Z'></path>
			</g>
		</svg>
	";
}
