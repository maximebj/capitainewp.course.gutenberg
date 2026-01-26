<?php

# Récupérer les attributs du bloc
$block_props = get_block_wrapper_attributes();

# Récupérer le dernier article
$args = [
  'post_type' => 'post',
  'posts_per_page' => 1,
];

$post = get_posts($args)[0] ?? null;

?>
<div <?php echo wp_kses_data($block_props); ?>>
  <?php echo $post->post_title; ?>
</div>