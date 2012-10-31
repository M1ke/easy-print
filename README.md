# Easy Print

A quick tool to allow printing of external pages in JavaScript.

Many web applications may want to offer a print view, differing in a large way from the content of the current page, and thus being unable to use a print stylesheet. Whilst making a new page view is a quick way to achieve this, subsequently allowing a user to print it can be difficult, usually requiring loading a tab, clicking print, waiting for the dialog to complete and then closing it again.

Having used the `window.print()` command to speed this up slightly, then adding a `setTimeout()` function to close the window afterwards I looked to how the process could be further speeded. This technique uses an inserted `iframe` on which the `print` method of the iframe's `window` object is then triggered. It also takes advantage of `setTimeout()` and its pause in activation until the dialog is closed to avoid the document becoming cluttered with print iframes.

This can be further combined with Google Chrome's `--kiosk --kiosk-printing` which will automatically print when the dialog is opened if the system has a default printer set.

## License

Free speech & free beer (feel free to add a real license)
