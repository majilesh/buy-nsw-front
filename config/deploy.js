module.exports = function(deployTarget) {
  var ENV = {};

  ENV['s3'] = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.S3_APP_BUCKET,
    region: 'ap-southeast-2'
  };

  ENV['s3-index'] = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.S3_INDEX_BUCKET,
    region: 'ap-southeast-2'
  };
  return ENV;
};
