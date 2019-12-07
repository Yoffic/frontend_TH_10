# treehouse_fed_project11
<h1>React Image Gallery</h1>
<p><b>Description:</b></p>
<p>In this project, I needed to build an image gallery using React and the Flickr API. 
After creating the project with create-react-app, I built the gallery components, added to the supplied CSS and set up routing.</p>
<h2>Project Instructions</h2>
<ol>
  <li>
    <p><b>Set up your project with create-react-app</b></p>
  </li>
  <li><b>Build your app components</b>
    <p>
      <ul>
        <li>Most components should be stateless functional components that focus on the UI rather than behavior. 
        Here is some examples of the sorts of components you'll need:
          <ul>
            <li>A Container component that takes in a keyword and api key as props, and fetches the photos and other 
            required information from the API</li>
            <li>A Header component, maybe for storing the nav and search</li>
            <li>A Navigation menu component</li>
            <li>A Form component for the search</li>
            <li>A Gallery component that can be reused to display the sets of images for each category you wish to display. 
            For example, Sunsets, Flowers, and Waterfalls</li>
            <li>And you can even use a components for your list items and/or your individual images</li>
          </ul>
        </li>
      </ul>
    </p>
  </li>
  <li><b>CSS styles</b>
    <p>
      <ul>
        <li>Update the CSS to style the app in a way that resembles the mockups.</li>
      </ul>
    </p>
  </li>
  <li><b>Routes</b>
    <p>
      <ul>
        <li>Install React Router and set up your <b>&#60;Route&#62;</b> and <b>&#60;Link&#62;</b> or 
        <b>&#60;NavLink&#62;</b> components.</li>
        <li>Clicking a nav link should navigate the user to the correct route and load new data.</li>
        <li>URLs should correctly match the Routes.</li>
      </ul>
    </p>
  </li>
  <li><b>Get a Flickr API key</b>
    <p>
      <ul>
        <li>Create yahoo account/use tumblr account to sign in.</li>
        <li>Apply for non-commercial API key.</li>
        <li>You'll need to set up a <b>config.js</b> file in your project that imports your API key into your application 
        so that you and other users can request data from the Flickr API.</li>
        <li>The config.js file should look like this:</br>
          <code>const apiKey = 'YOUR API KEY';</code></br>
          <code>export default apiKey;</code>
        </li>
        <li>Import your API key into your application and save it to a variable like you would any other module, and use 
        the variable where applicable. That way your app's users will only need to enter in an API key once.</li>
      </ul>
    </p>
  </li>
  <li><b>Requesting the data</b>
    <p>
      <ul>
        <li>Fetch the data from the Flickr API.</li>
        <li>Make data fetching and state is managed by a higher-level "container" component.</li>
        <li>It is recommended that you use the following link for help with this part of the project, 
        https://www.flickr.com/services/api/explore/flickr.photos.search
          <ul>
            <li>Enter a tag to search for, such as "sunsets"</li>
            <li>You may also want to limit the number of results using the per_page argument</li>
            <li>Choose JSON as the output, then "Do not sign call"</li>
            <li>Click "Call Method..." at the bottom of the page, and you'll see an example of the API call you'll need to 
            make. You can click on the URL to see what the response will look like.</li>
          </ul>
        </li>
      </ul>
    </p>
  </li>
  <li><b>Displaying the data</b>
    <p>
      <ul>
        <li>Make sure each image gets a unique "key" prop.</li>
        <li>There should be no console warnings regarding unique "key" props.</li>
        <li>The title of each image list should be displayed dynamically via "props".</li>
        <li>The URL should match the route.</li>
      </ul>
    </p>
  </li>
  <li><b>Search</b>
    <p>
      <ul>
        <li>Add search field feature to search for new categoties of images.</li>
        <li>Ideally, the search field should be visible <b>only</b> in the 'Search' route.</li>
      </ul>
    </p>
  </li>
</ol>

<h3>Extra Credit</h3>
<ol>
  <li>
    <p><b>Add a loading indicator that displays each time the app fetches new data.</b></p>
  </li>
  <li>
    <p><b>Include a 404-like error route that displays when a URL path does not match a route.</b></p>
  </li>
  <li>
    <p><b>If no matches are found by the search, include a message to tell the user there are no matches.</b></p>
  </li>
</ol>
<p>Checked for Mozilla Firefox, Google Chrome, Opera, Safari.</p>
