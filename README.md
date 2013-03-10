# Not-A-Modal
Kinda, sorta, not really modals.

When a modal won't due but you need to show lots of content over existing content... Not-A-Modal.

## How It Works
You can use links or buttons to toggle not-a-modals. Just add the `.modal` class and a `data-target` that matches the ID of element you'd like to toggle. Modal content should be wrapped in a `<div>` with the `.modal-menu` class.

    <a class="modal" data-target="#modal1" href="#">Launch Modal 1</a>

    <div class="modal-menu" id="modal1">
        <div class="container">
            <h2>Some Title <a class="close modal-close" href="#">×</a></h2>
            <p>Some content...</p>
            <button class="modal-close">Close</button>
        </div>
    </div>

See `example.html` for more info. Style as needed.

### Requires jQuery
Not-A-Modal requires [jQuery](http://jquery.com/).

### Don't forget the fallbacks
Because Not-A-Modal is powered by JavaScript, it should only be used for non-essential content (if there is such a thing), or content that can be accessed in an alternate way.

When active, the default link behavior is turned off. You should probably include an `href` value as a fallback for when JavaScript is not enabled. See this in action at [PAWS New England](htt://www.pawsnewengland.com/our-dogs/).

## Changelog
* 3/9/2013
  * Initial release.

## License
Not-A-Modal is licensed under [WTFPL](http://www.wtfpl.net/).
