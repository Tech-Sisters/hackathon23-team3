const S3 = require("../config/aws.config");
require("dotenv").config();
const BucketName = process.env.BucketName;
const { v4: uuid } = require("uuid");

//CRUD methods
const mutateS3 = {
  post: async (media) => {
    if (!media) {
      console.log("Upload media!");
    }
    let result;
    const params = {
      Bucket: BucketName,
      Key: uuid() + ".id." + media.name,
      Body: media.data,
      ContentType: media.mimetype,
    };
    await S3.upload(params)
      .promise()
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        result = err;
      });
    return result;
  },
  get: (key) => {
    const params = {
      Bucket: BucketName,
      Key: key,
    };

    const signedUrl = S3.getSignedUrl("getObject", params);
    const url = signedUrl.slice(0, signedUrl.indexOf("?AWSAccessKeyId"));
    return url;
  },
  put: async (key, media) => {
    if (!media || !key) {
      console.log("Upload media or Key!");
    }
    let result;
    const params = {
      Bucket: BucketName,
      Key: key,
      Body: media.data,
      ContentType: media.mimetype,
    };
    await S3.upload(params)
      .promise()
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        result = err;
      });
    return result;
  },
  delete: async (key) => {
    if (!key) {
      console.log("Key is missing");
    }

    let result;
    const params = {
      Bucket: BucketName,
      Key: key,
    };

    await S3.deleteObject(params)
      .promise()
      .then((data) => {
        result = "Deleted";
      })
      .catch((err) => {
        result = "Error";
      });

    return result;
  },
};

module.exports = mutateS3;
