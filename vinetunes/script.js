//global variables
var top10Music = [];

//function to compare author of vines to each other, if the same, then remove duplicates
//parameter: an array
function noDupVines(arr) {
    var output = {};
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        //if not null then enter
        if (arr[i] !== null) {
            //set store key in output object, if same key then replace existing one
            output[arr[i].author_url] = arr[i];
        }
    }
    return output;
}

// /function to dynamically creates rows with song information
function append_songs(song, i) {
    if (i % 2 == 0) {
        var spanTextGenre = 'Genre: ' + song.genre;
        var spanTextRelease = "Released: " + song.released;

        var songDiv = $('<div>', {
            class: 'row'
        });
        var songArt = $('<img>', {
            class: 'evenImg cover',
            src: song.albumArt
        });
        var songInfo = $('<p>', {
            class: 'boxText',
            text: song.name + ' - ' + song.song
        });

        var songInfoBox = $('<span>', {
            class: 'evenInfoSpan',
            text: spanTextGenre
        });
        var songInfoBox2 = $('<span>', {
            class: 'evenInfoSpan',
            text: spanTextRelease
        });

    }
    else {
        var spanTextGenre = 'Genre: ' + song.genre;
        var spanTextRelease = "Released: " + song.released;
        var songDiv = $('<div>', {
            class: 'row'
        });
        var songArt = $('<img>', {
            class: 'oddImg cover',
            src: song.albumArt,
        });
        var songInfo = $('<p>', {
            class: 'boxText',
            text: song.name + ' - ' + song.song
        });

        var songInfoBox = $('<span>', {
            class: 'oddInfoSpan',
            text: spanTextGenre
        });
        var songInfoBox2 = $('<span>', {
            class: 'oddInfoSpan',
            text: spanTextRelease
        });
    }
    $('.main-content').append(songDiv);
    $(songDiv).append(songArt).append(songInfo).append(songInfoBox2).append(songInfoBox);
    $(songDiv).on('click', function () {
        //console.log(song.name + song.song);
        //hide all the rows
        $(".row").hide();
        //creates a cube, passes photo to put on cube
        cubePhoto(song.albumArt);
        //display the cube
        $(".cubePage").show();
        //ajax call that gets passed the artist name and song name to search for
        getVines(song.name, song.song);
        setTimeout(function () {
            $('.cubePage').hide();
            //dynamic button to return to home layout
            var button = $("<button>", {
                class: "returnToMain backButton col-xs-3 col-md-2",
                text: "Go Back",
                style: "position:fixed"
            });
            $('.main-content').prepend(button);
            //removes cube and brings rows back
            $('.returnToMain').on("click", function () {
                console.log("returnToMain");
                $('.vineDiv').remove();
                $('.cubediv').children().remove();
                $(".returnToMain").remove();
                $('.row').show();
            });

        }, 4000);
    });
}

function artist_only_vines(name){
    $.ajax({
        dataType: 'json',
        url: 'http://s-apis.learningfuze.com/hackathon/vine/index.php',
        data: {search_term: name},
        cache: false,
        success: function (response) {
            console.log(response);
            var test = noDupVines(response.vines);
            console.log("This is the clean list: ", test);
            //var vineContainer = $("<div>",{
            //    class:'vineContainer'
            //});
            //$('.main-content').append(vineContainer);

            for (var k in test) {
                //if (test.hasOwnProperty(k)) {
                var vineDiv = $("<div>",{
                    class:"vineDiv col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3"
                });
                vineDiv.append(test[k].html, {
                    class: "col-xs-12"
                });
                $('.main-content').append(vineDiv);
                //setTimeout(function(){
                //
                //},1000);
                //}
            }
        }
    })
}

//function with ajax call to search name + song and return related vines
function getVines(name,song) {
    //var data = {
    //    search_term: name + " " + song
    //};
    $.ajax({
        dataType: 'json',
        url: 'http://s-apis.learningfuze.com/hackathon/vine/index.php',
        data: {search_term: name + " " + song},
        cache: false,
        success: function (response) {
            var response2 = null;
            console.log("success", response);
            //output = response;
            if (response.vines.length === 0){
                console.log('no vines');
                artist_only_vines(name);
                return;
            }
            var test = noDupVines(response.vines);
            console.log("This is the clean list: ", test);
            //var vineContainer = $("<div>",{
            //    class:'vineContainer'
            //});
            //$('.main-content').append(vineContainer);

            for (var k in test) {
                //if (test.hasOwnProperty(k)) {
                    var vineDiv = $("<div>",{
                        class:"vineDiv col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3"
                    });
                    vineDiv.append(test[k].html, {
                        class: "col-xs-12"
                    });
                    $('.main-content').append(vineDiv);
                    //setTimeout(function(){
                    //
                    //},1000);
                //}
            }
        },
        error: function (response) {
            console.log("error message");
        }

    })
}

function cubePhoto(songImage) {
    for (var i = 0; i < 6; i++) {
        var songart = $('<img>', {
            src: songImage,
            class: 'imgDiv'
        });
        var songdiv = $('<div>', {
            class: 'cubediv' + i
        });
        $('.cubediv').eq(i).append(songdiv);

        var cube = $(".cubediv" + i);
        $(cube).append(songart);
    }
}

$(document).ready(function () {
    //initial animation
    $("body").addClass('curtain');

    $.ajax({
        dataType: 'json',
        cache: false,
        url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topsongs/limit=10/json',
        success: function (response) {
            console.log('AJAX Success function called, with the following result:', response);
            //loops through every song in top 10 for info and adds it to an array of objects
            for (var i = 0; i < response.feed.entry.length; i++) {
                var artist = {};
                var ajaxObj = response.feed.entry[i];
                //console logs the artist and song name of the top 10 itune songs
                artist.name = (ajaxObj['im:artist'].label);
                artist.song = (ajaxObj['im:name'].label);
                artist.albumArt = (ajaxObj['im:image'][2].label);
                artist.genre = (ajaxObj.category.attributes.label);
                artist.released = (ajaxObj['im:releaseDate'].attributes.label);
                top10Music.push(artist);
                append_songs(top10Music[i], i);
            }
        },
        error: function (response) {
            console.log("error message");
        }
    });
});
