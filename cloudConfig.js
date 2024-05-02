const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    CLOUD_NAME:'dbhhn8i6i',
    API_KEY: '426882378774778',
    API_SECRET: 'k7F87LIKamUXk2ZFSvOypA7KJqM'
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
