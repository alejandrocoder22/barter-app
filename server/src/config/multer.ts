import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, './uploads')
  },
  filename: function (_req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname
    cb(null, uniqueSuffix)
  }

})

export const upload = multer({ storage })
