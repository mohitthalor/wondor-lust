const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    CLOUD_NAME: process.env.cloud_name,
    API_KEY: process.env.CLOUD_API_KEY,
    API_SECRET: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wondor_lust_DEV',
        allowedFormats: ["png", "jpeg", "jpg"], // Use allowedFormats instead of allowedFormat
    },
});

module.exports = {
    cloudinary,
    storage,
};
