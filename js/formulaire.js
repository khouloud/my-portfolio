'use strict;'
$( "form" ).submit(function( event ) {
    if ( $( '#form-item' ).input.valueOf() == "" ) {
        alert("vide");
        $( "span" ).text( "Validated..." ).show();
        return;
    }

    $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
    event.preventDefault();
});
