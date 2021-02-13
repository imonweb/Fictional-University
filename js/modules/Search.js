import $ from 'jquery';

class Search {
  // 1. describe and create/initiate our object
  constructor() {
    this.openButton =  $(".js-search-trigger");
    this.closeButton = $(".search-overlay__close");
    this.searchOverlay = $(".search-overlay");
    this.events();
    this.isOverlayOpen = false;
  }

  // 2. events
  events(){
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    $(document).on("keyup", this.keyPressDispatcher.bind(this));
  }

  // 3. methods (function, action...)
  keyPressDispatcher(e) {
    
    // console.log(e.keyCode);
    // S key
    if(e.keyCode == 83 && !this.isOverlayOpen){
      this.openOverlay();
    }
    // Esc key
    if(e.keyCode == 27 && !this.isOverlayOpen){
      this.closeOverlay();
    }
  }

  openOverlay() {
    this.searchOverlay.addClass("search-overlay--active");
    $("body").addClass("body-no-scroll");
    console.log("our open method just ran!");
    this.isOverlyOpen = true;
  }
  closeOverlay() {
    this.searchOverlay.removeClass("search-overlay--active");
    $("body").removeClass("body-no-scroll");
    console.log("our close method just ran!");
    this.isOverlayOpen = true;
  }
}

export default Search;