<?php 

add_action('rest_api_init', 'universityRegisterSearch');

function universityRegisterSearch(){
  register_rest_route('university/v1', 'search', array(
    'methods' => WP_REST_SERVER::READABLE,
    'callback' => 'universitySearchResults'
  ));
}

/*  http://localhost/wp/Fictional-University/wp-json/university/v1/search */
function universitySearchResults(){
  return 'Contratulations, you created a route.';
}