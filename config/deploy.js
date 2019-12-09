module.exports = function(deployTarget) {
  var ENV = {};

  ENV['s3'] = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.S3_APP_BUCKET,
    region: 'ap-southeast-2',
    filePattern: "*"
  };

  ENV['s3-index'] = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.S3_APP_BUCKET,
    region: 'ap-southeast-2',
    allowOverwrite: true,
    revisionKey: 'latest',
  };

  ENV['cloudfront'] = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    objectPaths: ['/index.html', '/', '/ict', '/ict/*'],
    distribution: process.env.CLOUDFRONT_DIST_ID,
  };

  return ENV;
};
