/* SOUNDCITE VERSION 0.0.7 */

(function(window, document, version, callback) { // http://stackoverflow.com/questions/2170439/how-to-embed-javascript-widget-that-depends-on-jquery-into-an-unknown-environmen
    var j, d;
    var loaded = false;
    if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://code.jquery.com/jquery-1.9.1.min.js";
        script.onload = script.onreadystatechange = function() {
            if (!loaded && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                callback((j = window.jQuery).noConflict(1), loaded = true);
                j(script).remove();
            }
        };
        // document.head not standard before HTML5
        var insertionPoint = document.head || document.getElementsByTagName('head').item(0) || document.documentElement.childNodes[0];
        insertionPoint.appendChild(script);

        var script_mobile = document.createElement("script");
        script_mobile.type = "text/javascript";
        script_mobile.src = "http://code.jquery.com/mobile/1.4.1/jquery.mobile-1.4.1.min.js";
        script_mobile.onload = script_mobile.onreadystatechange = function() {
            if (!loaded && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                callback((j = window.jQuery).noConflict(1), loaded = true);
                j(script).remove();
            }
        };
        // document.head not standard before HTML5
        var insertionPointMobile = document.head || document.getElementsByTagName('head').item(0) || document.documentElement.childNodes[0];
        insertionPointMobile.appendChild(script);
    }
})(window, document, "1.3", function($, jquery_loaded) {
    $(document).ready(function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('body').addClass('soundcite-mobile');
        }

        if( $('.soundcite').width() <= 480 ) {
            $('body').addClass('soundcite-narrow');
        } 

        // global vars
        window.soundcite = {};

        var soundcite_array = $('.soundcite'),
            $body = $('body'),
            $audio = $('<div class="soundcite-audio"></div>'),
            $audioclip,
            popcorn_array = [],
            colors = {},
            pop = null;
            $body.append($audio);

        for (i = 0; i < soundcite_array.length; i++) {
            // give each soundcite object an id

            var buttoncolor = $(soundcite_array[i]).data('buttoncolor');
            // $(soundcite_array[i]).append('<div class="soundcite-button" style="background-color:' + buttoncolor + '">'
            //   + '<span class="ajmint-icon ajmint-icon-spinner"></span>'
            //   + '<span class="ajmint-icon ajmint-icon-play"></span>'
            //   + '<span class="ajmint-icon ajmint-icon-pause"></span>'
              
            //   +'</div>');
            if ($(soundcite_array[i]).data('imageurl'))
            {
                // Image element
                var imageurl = $(soundcite_array[i]).data('imageurl');
                $(soundcite_array[i]).wrap('<div class="soundcite-image-wrapper"></div>').before('<img src="' + imageurl + '" />');
                var $soundcite_caption = $('<div class="soundcite-caption"></div>');
                $soundcite_caption.attr('style', unescape($(soundcite_array[i]).data('imagecss')));
                $(soundcite_array[i]).after($soundcite_caption);
            }
            $(soundcite_array[i]).attr('id', 'soundcite-' + i);
            $(soundcite_array[i]).removeClass('soundcite-pause');
            $(soundcite_array[i]).addClass('soundcite-play');
            var bgcolorrgba = $(soundcite_array[i]).css('background-color');
            colors[i] = bgcolorrgba.match(/\d+/g).slice(0,3);

            // add duration and progress divs
            $(soundcite_array[i]).append('<span class="soundcite-nav"><span class="soundcite-progress"></span></span>');
            $(soundcite_array[i]).append('<span class="soundcite-duration"></span>');
            
            var audioURL = $(soundcite_array[i]).attr('data-url').replace(/.mp3$|.ogg/, "");
            // add audio tags to html with audio url
            $audioclip = $( '<audio id="soundcite-audio-'+i+'">'+
                                '<source src="'+audioURL+'.mp3" />'+
                                '<source src="'+audioURL+'.ogg" />'+
                            '</audio>');
            $audio.append($audioclip);
            popcorn_array.push(null);
        }

        function secondsFormatted(seconds) {
            var minutes = Math.floor(seconds/60).toString();
            var seconds = Math.floor(seconds % 60).toString();
            if (seconds.length == 1) {
                seconds = "0" + seconds;
            }
            return minutes + ":" + seconds;
        }

        function pauseClip() {
            $('.soundcite').removeClass('soundcite-pause');
            $('.soundcite').addClass('soundcite-play');
            pop.pause();
        }

        function stopOtherClips(chosen) {
            $('.soundcite').removeClass('soundcite-pause');
            $('.soundcite').addClass('soundcite-play');
            $.each($('.soundcite'), function(index, value) {
                var soundcite_id = $(value).attr('id').split('-')[1],
                    soundcite_audio_id = '#soundcite-audio-' + soundcite_id,
                    kill;

                kill = popcorn_array[soundcite_id];
                if (kill)
                {
                    kill.pause();
                }
            });
        }

        // if click on soundcite span, start pop
        $('.soundcite').on('click', function() {
            var that = $(this),
                dataStart = parseFloat($(this).attr("data-start")),
                dataEnd = parseFloat($(this).attr("data-end")),
                startTime = dataStart || 0,
                endTime = dataEnd,
                // endTime = $('.soundcite').attr("data-time"),
                soundcite_id = $(this).attr('id').split('-')[1],
                soundcite_audio_id = '#soundcite-audio-' + soundcite_id;

                pop = popcorn_array[soundcite_id];
            if (that.hasClass('soundcite-loading')) {

                return;
            }

            // play or pause clip
            if ($(this).hasClass('soundcite-play')) {
                stopOtherClips();

                if (pop){
                    // We're restarting it for now
                    // Add seek functionality later
                    $(this).parent().find('.soundcite-caption').css('opacity', 0);
                    if (pop.currentTime() == 0)
                    {
                        pop.play(startTime);
                    }
                    else {
                        pop.play();
                    }
                }

                else {

                    pop = popcorn_array[soundcite_id] = Popcorn('#soundcite-audio-' + soundcite_id, {'frameAnimation': true});
                    if (that.hasClass('soundcite-image') && that.data('imagecaptions'))
                    {
                        // Cue the captions
                        // We want to do this before we start playing in case there's one set for 0
                        
                        var captions = that.data('imagecaptions');
                        captions = JSON.parse(unescape(captions));
                        var globalcss = unescape(that.data('imagecss'));
                        
                        var captiontimes = that.data('imagecaptiontimes');
                        var captioncss = that.data('imagecaptionstyles');
                        if (captioncss)
                        {
                            captioncss = JSON.parse(unescape(captioncss));
                        }
                        var captionpositions = that.data("imagecaptionpositions");
                        if (captionpositions)
                        {
                            captionpositions = JSON.parse(unescape(captionpositions));
                        }


                        var cues = {};
                        $.each(captions, function (i, caption){
                            pop.cue(+captiontimes[i], cues[+captiontimes[i]] = function(){
                                that.parent().find('.soundcite-caption').animate({opacity: 0}, {
                                    duration: 400,
                                    complete: function(){
                                        var style = ""; 
                                        if (globalcss) {
                                            style += globalcss + ';';
                                        }
                                        if (captioncss)
                                        {
                                            style += captioncss[i];
                                        }
                                        caption = "<span>" + caption + "</span>";

                                        caption = caption.replace(/\s+/g, " </span><span>");

                                        $(this).attr('style', style).html(caption);
                                        var bgcolor = $(this).css('background-color');
                                        $(this).css('background-color', 'transparent');
                                        $(this).find('span').css('background-color', bgcolor);
                                        if (captionpositions)
                                        {
                                            var pos = captionpositions[i].split(" ");
                                            $(this).css({
                                                top: pos[0],
                                                left: pos[1]
                                            });
                                        }
                                        if ($($(this).parent().find('.soundcite')[0]).data('pos')) {
                                            var pos = $($(this).parent().find('.soundcite')[0]).data('pos').split(" ");
                                            $(this).css({
                                                top: pos[0],
                                                left: pos[1]
                                            });
                                        }

                                        $(this).animate({opacity : 1}, {duration: 400});

                                    }

                                });
                                
                            });

                        });
                    }


                    // set end time
                    if (!endTime) {
                        endTime = pop.duration();
                    }
                }
                function setEventHandlers(){
                    // pause (stop) clip at end Time
                    if (pop.eventsSet) {
                        return;

                    }
                    pop.eventsSet = true;
                    if (!endTime) {
                        endTime = pop.duration();
                    }
                    pop.cue(endTime, function() {
                        pauseClip();
                        this.currentTime(startTime);
                    });

                    // Store background colors to customize progress bar

                    // update progress bar
                    pop.on('timeupdate', function() {
                        var popId = $(this.audio).attr('id').split('-')[2],
                            $soundcite = $('#soundcite-'+popId),
                            currentTime = this.currentTime() - startTime,
                             endTime = dataEnd ? dataEnd : this.duration(),
                            
                            totalTime = endTime - startTime,
                            percentage = currentTime*100 / totalTime;


                        // change the css to customize your player
                        

                        // Gives an rgba or rgb value
                        //
                        var left,right;
                        var playerOffset = $('body').hasClass('soundcite-narrow') ? '40px,' : '25px,';

                        $soundcite.find('.soundcite-progress').css({
                            width: percentage + '%'

                        });


                        if (!$soundcite.hasClass('big')) {
                            left = 'rgba(' + colors[popId].join(',') + ',.35)';
                            right = 'rgba(' + colors[popId].join(',') + ',.15)';
                            $soundcite.css({
                                'background' : '-webkit-linear-gradient(left, ' + left + percentage + '%, ' + right + (percentage + 1) + '%)',
                                'background' : 'linear-gradient(to right,' + left + percentage + '%, ' + right + (percentage + 1) + '%)'
                            });
                        }
                    });

                    // when track ends, reset classes showing play/pause on .soundcite
                    pop.on('ended', function() {
                        var popId = $(this.audio).attr('id').split('-')[2],
                            $soundcite = $('#soundcite-'+popId);
                        this.currentTime(startTime);

                        $soundcite.removeClass('soundcite-pause');
                        $soundcite.addClass('soundcite-play');
                    });

                    // listen to timeupdate and log the videos rounded current time
                    pop.on( "timeupdate", function() {
                        var popId = $(this.audio).attr('id').split('-')[2],
                            $soundcite = $('#soundcite-'+popId),
                            currentTime = this.roundTime() - startTime;

                        if (this.currentTime() < startTime)
                        {
                            this.play(startTime);
                            return;
                        }
                            
                        if (!dataEnd) {
                            endTime = this.duration();
                        }
                        var totalTime = endTime - startTime;

                        if (totalTime) {
                            // Skip if we're getting NaN
                            $soundcite.find('.soundcite-duration').html( " (" + secondsFormatted(currentTime) + ' / ' + secondsFormatted(totalTime) + ")");
                        }
                    });
                    that.find('.soundcite-nav').on('click', function(e){
                        if (that.hasClass('soundcite-loading'))
                        {
                            return;
                        }
                        var $this = $(this),
                            $parent = $this.parent(),
                            soundcite_id = $parent.attr('id').split('-')[1],
                            pop = popcorn_array[+soundcite_id],
                            width = $(this).width();
                            if (typeof e.offsetX == "undefined"){
                                e.offsetX = e.pageX - $this.offset().left;
                            }
                            var newPosition = Math.round((e.offsetX / width) * (endTime - startTime)) + startTime;

                        if ($parent.hasClass('soundcite-play')) {
                            stopOtherClips();
                            $parent.removeClass('soundcite-play').addClass('soundcite-pause');
                        }
                        pop.play(newPosition);
                        if (captiontimes) {
                            var whichcue = -1;
                            for (i = 0; i < captiontimes.length; i++) {
                                
                                if (captiontimes[i] > whichcue && captiontimes[i] < newPosition) {
                                    whichcue  = captiontimes[i];
                                }

                            }
                            if (whichcue > -1) {
                                cues[whichcue].call();

                            }

                        }
                        e.stopPropagation();
                        e.preventDefault();

                    });

                }

                // put in spinner
                $(this).removeClass('soundcite-play');
                $(this).removeClass('soundcite-pause');
                $(this).addClass('soundcite-loading');

                if ($('body').hasClass('soundcite-mobile') && !pop.eventsSet) {
                    // make sure audio is loaded and PLAY!
                    $(soundcite_audio_id).load();
                    
                    $(soundcite_audio_id).on('loadeddata', setEventHandlers);
                    $(soundcite_audio_id).on('loadeddata', function(){
                        // remove spinner
                        
                        that.removeClass('soundcite-loading');
                        that.removeClass('soundcite-play');
                        that.addClass('soundcite-pause');

                        if (pop.currentTime() == 0)
                        {
                            pop.play(startTime);
                        }
                        else {
                            pop.play();
                        }
                    });
                } else {
                    that.removeClass('soundcite-loading');
                    that.addClass('soundcite-pause');
                    if (!pop.eventsSet)
                    {
                        setEventHandlers();
                        pop.play(startTime);
                        
                    }
                    else {
                        pop.play();
                    }
                }
            } else {
                pauseClip();
                // No reason to add more listeners on pause
                return; 
            }


        });
    });
});