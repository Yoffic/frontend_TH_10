import React, { Component } from 'react';
import axios from 'axios';

// API key
import apiKey from '../config';

// Components
import ImageList from './ImageList';

export default class Gallery extends Component {

  state = {
    images: [],
    loading: true
  };

  // After the component was mounted the axios get data from flickr API
  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.keyword}&safe_search=1&content_type=1&per_page=12&format=json&nojsoncallback=1`)
    .then(response => {
      // Add data to the images in state and turn off the loading indicator
      this.setState({
        images: response.data.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    // Create loading indicator before data from Flickr will be received
    if (this.state.loading) {
      return (
        <h2>Loading...</h2>
        );
    }
    // Create gallery with imagelist name from button or search request
    return (
      <div className="photo-container">
        <h2>{this.props.keyword} results</h2>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
