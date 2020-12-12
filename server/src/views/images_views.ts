import Image from "../models/Image";

export default {
  render(image: Image){
    return{
      id: image.id,
      url: `http://192.168.0.2:3333/tmp/uploads/${image.path}`,
    };
  }
}