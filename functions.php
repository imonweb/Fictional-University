<?php 

function pageBanner($args = NULL){
  if(!$args['title']) {
    $args['title'] = get_the_title();
  }

  if(!$args['subtitle']) {
    $args['subtitle'] = get_field('page_banner_subtitle');
  }

  // if(!$args['photo']) {
  //   if(get_field('page_banner_background_image')){
  //     $args['photo'] = get_field('page_banner_background_image')['sizes']['pageBanner'];
  //   } else {
  //     $args['photo'] = get_theme_file_uri('/images/ocean.jpg');
  //   }
  // }

  if (!$args['photo']) {
    if (get_field('page_banner_background_image') AND !is_archive() AND !is_home() ) {
      $args['photo'] = get_field('page_banner_background_image')['sizes']['pageBanner'];
    } else {
      $args['photo'] = get_theme_file_uri('/images/ocean.jpg');
    }
  }
  ?>
<div class="page-banner">
  <div class="page-banner__bg-image" style="background-image: url(<?php echo $args['photo']; // $pageBannerImage = get_field('page_banner_background_image'); echo $pageBannerImage['sizes']['pageBanner']; // echo get_theme_file_uri('/images/ocean.jpg') ?> );"></div>
  <div class="page-banner__content container container--narrow">
  <?php // print_r($pageBannerImage); ?>
    <h1 class="page-banner__title"><?php echo $args['title']; // the_title(); ?></h1>
    <div class="page-banner__intro">
      <p><?php echo $args['subtitle']; // the_field('page_banner_subtitle'); ?></p>
    </div>
    </div>  
  </div>
<?php }
 
function university_files() {
  // wp_enqueue_script('main-university-js', get_theme_file_uri('/js/scripts-bundled.js'), NULL, '1.0', true);
  wp_enqueue_style('custom-google-fonts','//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_enqueue_style('font-awesome','//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  // wp_enqueue_style('university_main_styles', get_stylesheet_uri(), NULL, microtime());

  wp_enqueue_script('googleMap', '//maps.googleapis.com/maps/api/js?key=AIzaSyDj_c4Lkw8m0nFO9wiDEu8GEbNFwm0IyDw', NULL, '1.0', true);

  if (strstr($_SERVER['SERVER_NAME'], 'localhost' )) {
    wp_enqueue_script('main-university-js', 'http://localhost:3000/bundled.js', NULL, '1.0', true);
  } else {
    wp_enqueue_script('our-vendors-js', get_theme_file_uri('/bundled-assets/vendor.js'), NULL, '1.0', true);
    wp_enqueue_script('main-university-js', get_theme_file_uri('/bundled-assets/scripts.78955a7f663b41c51880.js'), NULL, '1.0', true);
    wp_enqueue_style('our-main-styles', get_theme_file_uri('/bundled-assets/styles.78955a7f663b41c51880.css'));
  }
  
}
add_action('wp_enqueue_scripts', 'university_files');

function university_features() {
  // register_nav_menu('headerMenuLocation', 'Header Menu Location');
  // register_nav_menu('footerLocationOne', 'Footer Location One');
  // register_nav_menu('footerLocationTwo', 'Footer Location Two');
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_image_size('professorLandscape', 400, 260, true);
  add_image_size('professorPortrait', 480, 650, true);
  add_image_size('pageBanner', 1500, 350, true);
}
add_action('after_setup_theme','university_features');

/*
function university_post_types() {
  register_post_type('event', array(
    'public' => true,
    'labels' => array(
      'name' => 'Events'
    ),
    'menu_icon' => 'dashicons-calendar'
  ));
}
add_action('init','university_post_types');
*/

function university_adjust_queries($query){
  if(!is_admin() AND is_post_type_archive('campus') AND is_main_query()){
    $query->set('posts_per_page',-1);
  }

  if(!is_admin() AND is_post_type_archive('program') AND is_main_query()){
    $query->set('orderby','title');
    $query->set('order','ASC');
    $query->set('posts_per_page',-1);
  }

  if(!is_admin() AND is_post_type_archive('event') AND $query->is_main_query()){
    // $query->set('posts_per_page', '1');
    $today = date('Ymd');
    $query->set('meta_key','event_date');
    $query->set('orderby','meta_value_num');
    $query->set('order','ASC');
    $query->set('meta_query', array(
      array(
        'key' => 'event_date',
        'compare' => '>=',
        'value' => $today,
        'type' => 'numeric'
      )
      ));
  }
}
add_action('pre_get_posts', 'university_adjust_queries');

function universityMapKey($api) {
  $api['key'] = 'AIzaSyDj_c4Lkw8m0nFO9wiDEu8GEbNFwm0IyDw';
  return $api;
}
add_filter('acf/fields/google_map/api','universityMapKey');