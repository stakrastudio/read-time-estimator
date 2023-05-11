# Estimate Read Time for Webflow

Estimate Read Time is a JavaScript script that calculates the estimated read time of a web page based on the word count. It provides a simple way to display the estimated read time in your website content.

## Usage

### Using with Webflow

1. In the Webflow Designer, locate the element containing the text you wish to esitmate read time, such as the Rich Text Block, for example.
2. Add the `estimate-read-time="true"` attribute to the element of which contains the main body of text.
3. Add the `data-read-time-placeholder` attribute to another text element. This attribute will serve as a placeholder for displaying the read time.
4. Include the JavaScript file estimate-read-time.js in your Webflow project using the Custom Code feature by:
* Go to your Webflow project settings.
* In the Custom Code tab, locate the Footer Code section.
* Add the following script tag:
```html
<script src="https://cdn.jsdelivr.net/gh/stakrastudio/read-time-estimator@master/read-time-estimator.js"></script>
```
Alteratively, copy the javascript from the file directly and paste it custom footer code area as described in step 4. Make sure encapsulate the code in ```<script>...</script>``` tags.

Ensure to publish the site and test on a live URL.
