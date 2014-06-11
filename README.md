# Easy Print

A quick tool to allow printing of external pages in JavaScript.

Many web applications may want to offer a print view, differing in a large way from the content of the current page, and thus being unable to use a print stylesheet. Whilst making a new page view is a quick way to achieve this, subsequently allowing a user to print it can be difficult, usually requiring loading a tab, clicking print, waiting for the dialog to complete and then closing it again.

Having used the `window.print()` command to speed this up slightly, then adding a `setTimeout()` function to close the window afterwards I looked to how the process could be further speeded. This technique uses an inserted `iframe` on which the `print` method of the iframe's `window` object is then triggered. It also takes advantage of `setTimeout()` and its pause in activation until the dialog is closed to avoid the document becoming cluttered with print iframes.

This can be further combined with Google Chrome's `--kiosk --kiosk-printing` which will automatically print when the dialog is opened if the system has a default printer set.

## Versions

Both a jQuery and non-jQuery version are available. They are slightly different in function and the non-jQ version requires at least one `div` element is present on the page - someone who knows raw DOM scripting better might be able to fix this. The jQ version is smaller, so is recommended if, as is probably, you're already using jQuery. Both functions have the same name so can be used in the same file safely.

### setTimeout in the non-jQ version

The final `setTimeout()` function was removed from the non-jQ version as it seemed to be causing issues with the iframe loading correctly; alternatively it may be that the print dialog does not delay the function triggering, but that `jQuery` itself waits for the dialog to close.

## License

Free speech & free beer (feel free to add a real license)