# APEX Tracker
A StreamElements' custom widget to display your current rank on APEX Legends.

## Retrieve Tracker Network
1. Login and find your profile on [tracker.gg/](https://apex.tracker.gg/)
2. Create an app on [Tracker Network Developers' Dashboard](https://tracker.gg/developers/docs/getting-started) to have your `API Key`.

## Setting up the custom widget
1. Create an overlay from StreamElements' [Dashboard](https://streamelements.com/dashboard/overlays). (Optional: custom size 300px x 300px)

2. Add a `STATIC/CUSTOM > Custom widget`.

3. From the Settings panel, click on the `Open Editor` button.

4. Delete the content of the HTML tab.

5. Copy/Paste the content of `HTML.html` into the HTML tab.

6. Repeat the process for the `CSS.css` file into the CSS tab.

7. Repeat the process for the `JS.js` file into the JS tab.

8. Repeat the process for the `FIELDS.json` file into the FIELDS tab.

9. Click on the "Done" button at the bottom right.

10. Copy the `API Key` from the previous part to the `Spotify & StreamElements` panel on the left.

11. Customize the widget using the other panels on the left side.

## Display in OBS Studio
1. After saving your changes, copy the link from the upper right corner on StreamElements.
2. Create a browser source and paste the link.