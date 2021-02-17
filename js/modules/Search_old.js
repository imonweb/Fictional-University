import $ from 'jquery';

class Search {
  // 1. describe and create/initiate our object
  constructor() {
    // this.addSearchHTML();
    this.resultsDiv = $("#search-overlay__results");
    this.openButton =  $(".js-search-trigger");
    this.closeButton = $(".search-overlay__close");
    this.searchOverlay = $(".search-overlay");
    this.searchField = $("#search-term");
    this.events();
    this.isOverlayOpen = false;
    this.isSpinnerVisible = false;
    this.previousValue;
    this.typingTimer;
  }

  // 2. events
  events(){
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    $(document).on("keydown", this.keyPressDispatcher.bind(this));
    this.searchField.on("keyup",this.typingLogic.bind(this));
  }

  // 3. methods (function, action...)
  typingLogic()
  {
    if(this.searchField.val() != this.previousValue)
    {
      clearTimeout(this.typingTimer);
        if(this.searchField.val()) 
        {
          if(!this.isSpinnerVisible)
          {
            this.resultsDiv.html('<div class="spinner-loader"></div>');
            this.isSpinnerVisible = true;
          }
        this.typingTimer = setTimeout(this.getResults.bind(this), 750);
        } else {
          this.resultsDiv.html('');
          this.isSpinnerVisible = false;
        }
        
    }
    
    this.previousValue = this.searchField.val();
  }

  getResults(){
    // this.resultsDiv.html("Imagine real search results here...");
    // this.isSpinnerVisible = false;
    // before testArray.map
    // <li><a href="${posts[0].link}">${posts[0].title.rendered}</a></li>
    // 'http://localhost/wp/Fictional-University/wp-json/wp/v2/posts?search='
  
    
      // alert(posts[0].title.rendered);
      // var testArray = ['red', 'orange', 'yellow'];

      //ASYNCHRONOUS
      $.when(
        // delete this code a bit later on
        $.getJSON(universityData.root_url + '/wp-json/wp/v2/posts?search=' + this.searchField.val()),
        $.getJSON(universityData.root_url + '/wp-json/wp/v2/pages?search=' + this.searchField.val())
        ).then((posts, pages) => {
        var combinedResults = posts[0].concat(pages[0]);
        this.resultsDiv.html(`
        <h2 class="search-overlay__section-title">General Information</h2>
        ${combinedResults.length ? '<ul class="link-list min-list">' : '<p>No general information matches that search'}
          ${combinedResults.map(item => `<li><a href="${item.link}">${item.title.rendered}</a> ${item.type == 'post' ? ` by ${item.authorName}` : ''}</li>`).join('')}
        ${combinedResults.length ? '</ul>' : ''}
      `);
      this.isSpinnerVisible = false;
      }, () => {
        this.resulsDiv.html('<p>Unexpected error; please try again.</p>');
      });

/*    
      $.getJSON(universityData.root_url + '/wp-json/wp/v2/posts?search=' + this.searchField.val(), posts => {
      $.getJSON(universityData.root_url + '/wp-json/wp/v2/pages?search=' + this.searchField.val(),pages => {
        var combinedResults = posts.concat(pages);
        this.resultsDiv.html(`
        <h2 class="search-overlay__section-title">General Information</h2>
        ${combinedResults.length ? '<ul class="link-list min-list">' : '<p>No general information matches that search'}
          ${combinedResults.map(item => `<li><a href="${item.link}">${item.title.rendered}</a></li>`).join('')}
        ${combinedResults.length ? '</ul>' : ''}
      `);
      this.isSpinnerVisible = false;
      });
       // ${testArray.map(item => `<li>${item}</li>`).join('')}
    });
  */
     
  }

  keyPressDispatcher(e) {
    
    // console.log(e.keyCode);
    // S key
    if(e.keyCode == 83 && !this.isOverlayOpen && !$("input", textarea).is(':focus')){
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
    this.searchField.val('');
    setTimeout(()=> this.searchField.focus(), 301);
    console.log("our open method just ran!");
    this.isOverlyOpen = true;
  }
  closeOverlay() {
    this.searchOverlay.removeClass("search-overlay--active");
    $("body").removeClass("body-no-scroll");
    console.log("our close method just ran!");
    this.isOverlayOpen = true;
  }

  addSearchHTML(){
    document.body.innerHTML += `
      <div class="search-overlay">
      <div class="search-overlay__top">
          <div class="container">
            <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>
            <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>
            <input type="text" class="search-term" placeholder="what are you looking for?" id="search-term" autocomplete="off">
          </div>
      </div>
      <div class="container">
        <div id="search-overlay__results">
          </div>
        </div>
      </div>
    `;
  }


} // end Search class

export default Search;