import multer from "multer";
import path from "path";

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
    filename: (req, file, cb) => {
      const filename = `${Date.now()}-${file.originalname}`;

      cb(null, filename);
    },
  }),
};
