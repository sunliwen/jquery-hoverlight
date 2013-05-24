## jQuery Hoverlight (hover and highlight)

jquery-hoverlight.js is a hover highlighting plugin for jQuery.

### Demo

./demo.htm

### Usage

You can use hoverlight like this


    <p>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at massa non erat convallis vulputate molestie nec dui. Donec auctor blandit nibh quis luctus. Donec tincidunt auctor consequat.
    </p>
    
    <script>
    $(function(){
        $('p').hoverlight();
    });
    </script>


jquery-hoverlight.js will wrap words within selected area in spans like e.g.


    <p> 
    ...
    <span class="js-hoverlightable">Lorem</span>
    <span class="js-hoverlightable">ipsum</span>
    <span class="js-hoverlightable">dolor</span>
    ...
    </p>
        
### License


Copyright 2013 Sun Liwen.

Released under the MIT license.
