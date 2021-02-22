import $ from 'jquery';

class MyNotes {
  constructor() {
     this.events();
  }

  // update and delete function for note on the fly
  events(){
    $("#my-notes").on("click", ".delete-note", this.deleteNote);
    $("#my-notes").on("click", ".edit-note",this.editNote.bind(this));
    $("#my-notes").on("click", ".update-note",this.updateNote.bind(this));
    $(".submit-note").on("click", this.createNote.bind(this));
  }

  /* // unable to edit and delete newly created note
  events(){
    $(".delete-note").on("click", this.deleteNote);
    $(".edit-note").on("click", this.editNote.bind(this));
    $(".update-note").on("click", this.updateNote.bind(this));
    $(".submit-note").on("click", this.createNote.bind(this));
  }
  */

  // Methods will go here
  editNote(e){
    var thisNote = $(e.target).parents("li");
    if(thisNote.data("state") == "editable"){
      this.makeNoteReadOnly(thisNote);
    } else {
      this.makeNoteEditable(thisNote);

    }
  } // edit Note

  makeNoteEditable(thisNote){
    thisNote.find(".edit-note").html('<i class="fa fa-times" aria-hidden="true"></i> Cancel');
    thisNote.find(".note-title-field, .note-body-field").removeAttr("readonly").addClass("note-active-field");
    thisNote.find(".update-note").addClass("update-note--visible");
    thisNote.data("state","editable");
  }

  makeNoteReadOnly(thisNote){
    thisNote.find(".edit-note").html('<i class="fa fa-pencil" aria-hidden="true"></i> Edit');
    thisNote.find(".note-title-field, .note-body-field").attr("readonly","readonly").removeClass("note-active-field");
    thisNote.find(".update-note").removeClass("update-note--visible");
    thisNote.data("state","cancel");
  }

  /*  Delete Note */
  deleteNote(e){
    var thisNote = $(e.target).parents("li");

    $.ajax({
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-WP-Nonce', universityData.nonce);
      },
      url: universityData.root_url + '/wp-json/wp/v2/note/' + thisNote.data('id'),
      type: 'DELETE',
      success: (response) => {
        thisNote.slideUp();
        console.log("Congrats");
        console.log(response);
        // note 
        if(response.userNoteCount < 5){
          $(".note-limit-message").removeClass("active");
        }
      },
      error: (response) => {

        console.log("Sorry");
        console.log(response);
      }
    });
  } // delete Note

  updateNote(e){
    var thisNote = $(e.target).parents("li");

    var ourUpdatedPost = {
      'title': thisNote.find(".note-title-field").val(),
      'content': thisNote.find(".note-body-field").val()
    }

    $.ajax({
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-WP-Nonce', universityData.nonce);
      },
      url: universityData.root_url + '/wp-json/wp/v2/note/' + thisNote.data('id'),
      type: 'POST',
      data: ourUpdatedPost,
      success: (response) => {
        this.makeNoteReadOnly(thisNote);
        console.log("Congrats");
        console.log(response);
      },
      error: (response) => {

        console.log("Sorry");
        console.log(response);
      }
    });
  } // update note

  createNote(e){
    var ourNewPost = {
      'title': $(".new-note-title").val(),
      'content': $(".new-note-body").val(),
      'status': 'publish'
      // make the post private temp
      //'status': 'private'
    }

    $.ajax({
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-WP-Nonce', universityData.nonce);
      },
      url: universityData.root_url + '/wp-json/wp/v2/note/',
      type: 'POST',
      data: ourNewPost,
      success: (response) => {
        $(".new-note-title, .new-note-body").val('');
        $(`
        <li data-id="${response.id}">
          <input readonly class="note-title-field" value="${response.title.raw}" type="text">
          <span class="edit-note"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</span>
          <span class="delete-note"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</span>
          <textarea readonly class="note-body-field" name="" id="" cols="30" rows="10">${response.content.raw}</textarea>
          <span class="update-note btn btn--blue btn--small"><i class="fa fa-arrow-right" aria-hidden="true"></i> Save</span>
        </li>
        `).prependTo("#my-notes").hide().slideDown();

        console.log("Congrats");
        console.log(response);
      },
      error: (response) => {
        if(response.responseText == "You have reached your note limit."){
          $(".note-limit-message").addClass("active");
        }
        console.log("Sorry");
        console.log(response);
      }
    });
  } // create note

  /*  Delete Function single id test */
  /*
  deleteNote(){
    $.ajax({
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-WP-Nonce', universityData.nonce);
      },
  
      url: universityData.root_url + '/wp-json/wp/v2/note/109',
      type: 'DELETE',
      success: (response) => {
        console.log("Congrats");
        console.log(response);
      },
      error: (response) => {

        console.log("Sorry");
        console.log(response);
      }
    });
  }
  */
 } // end MyNotes class

 export default MyNotes;