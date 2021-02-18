<?php 

  get_header();

  while(have_posts()){
    the_post(); 
    pageBanner();
    // pageBanner(array(
    //   'title' => 'hello there this is the title',
    //   'subtitle' => 'Hi, this is the subtitle',
    //   'photo' => 'https://source.unsplash.com/random/1500x1000'
    // ));
  ?>

  <div class="container container--narrow page-section">

    <?php 
      // echo get_the_ID();
      // echo wp_get_post_parent_id(get_the_ID());
      $theParent = wp_get_post_parent_id(get_the_ID());
      if($theParent){ ?>
         <div class="metabox metabox--position-up metabox--with-home-link">
          <p><a class="metabox__blog-home-link" href="<?php echo get_permalink($theParent); ?>"><i class="fa fa-home" aria-hidden="true"></i> Back to <?php echo get_the_title($theParent); ?></a> <span class="metabox__main"><?php the_title() ?></span></p>
         </div>
      <?php }
    ?>

    <?php 
      $testArray = get_pages(array(
        'child_of' => get_the_ID()
      ));
    
    if($theParent or $testArray) { ?>
    <div class="page-links">
      <h2 class="page-links__title"><a href="<?php echo get_permalink($theParent); ?>"><?php echo get_the_title($theParent); ?></a></h2>
      <ul class="min-list">
         <?php 

            if($theParent) {
              $findChildrenOf = $theParent;
            } else {
              $findChildrenOf = get_the_ID();
            }
            wp_list_pages(array(

              'title_li' => NULL,
              'child_of' => $findChildrenOf,
              'sort_column' => 'menu_order'
            ));
         ?>
      </ul>
    </div>
          <?php } ?>
  

    <div class="generic-content">
       <!-- <form class="search-form" method="get" action="<?php // echo esc_url(site_url('/')); ?>">
       <label class="headline headline--medium" for="s">Perform a New Search.</label>
       <div class="search-form-row">
          <input class="s" id="s" placeholder="What are you looking for?" type="search" name="s">
          <input class="search-submit" type="submit" value="Search">
       </div>
         
       </form> -->

       <!-- Replace with code added in searchform.php -->
       <?php get_search_form(); ?>
    </div>

  </div>
    
    
  <?php }

  get_footer();


?>
