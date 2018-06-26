import { ApiExtractor } from './ApiExtractor';
import { Picture } from './models';

let apiExtractor = new ApiExtractor();

apiExtractor.getPictures(5).then(photos => {
  let doc: Document = document;
  photos.forEach((photo: Picture) => {
    let element = photo.title;
    document.write(`<p>${element}</p>`);
  });
});
