<?php 

  get_header();

  while(have_posts()){
    the_post(); 
    pageBanner();
 
  ?>
  
    <div class="generic-content">
       Custom code will go here
    </div>
 
    
  <?php }

  get_footer();


?>
