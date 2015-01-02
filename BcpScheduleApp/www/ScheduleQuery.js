

$(document).ready(function(){
    $('#classes').hide();
    $('#classentry').hide();
});

$(document).ready(function(){
    $('#tab').click(function(){
        $('#classes').slideDown();
        $('#tab').fadeOut();
    });
});

$(document).ready(function(){
    $('#confirm').click(function(){
        $('#classes').slideUp();
        $('#tab').fadeIn();
    });
});

$(document).ready(function(){
    $('#change').click(function(){
        $('#index').fadeOut();
        $('#classes').fadeOut();
        $('#classentry').fadeIn();
    });
});

$(document).ready(function(){
    $('#changed').click(function(){
        $('#classentry').fadeOut();
        $('#index').fadeIn();
        $('#classes').fadeIn();
    });
});