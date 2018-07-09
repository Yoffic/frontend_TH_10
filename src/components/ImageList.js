import React from 'react';

// Components
import Image from './Image';
import NoResults from './NoResults';

const ImageList = props => {
  const results = props.images;
  let images;
  if (results.length > 0) {
      // create list of images based on data from Gallery parent state images
      images = results.map(image =>
         <Image
            url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            key={image.id} />
        );
  } else {
      // if no matches from searchfield input create a message about it
      images = <NoResults />;
  }

  return(
    <ul>
      {images}
    </ul>
  );
}

export default ImageList;
