const aws=require('aws-sdk');
const crypto=require('crypto');
const dotenv=require('dotenv');
const {promisify}=require('util');

dotenv.config();

const randomBytes=promisify(crypto.randomBytes);

const region=process.env.AWS_REGION;
const accessKeyId=process.env.AWS_ACCESSKEYID;
const secretAccessKey=process.env.AWS_SECRETACCESSKEY;
const bucketName=process.env.AWS_BUCKETNAME;


const s3=new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion:"v4"
    
})

const generateSignedUrl=async()=>{
    const bytes=await  randomBytes(16);
    const imageName=bytes.toString('hex');

    const params={
        Bucket: bucketName,
        key:imageName,
        expires:60
    }
    const signedUrl=await s3.getSignedUrlPromise('putObject',params);
    return signedUrl;
}


module.exports={
    generateSignedUrl
}

// CREATE BUCKET ON AWS 
// ENABLE CORS CONFIGURATION ON AWS CONSOLE
