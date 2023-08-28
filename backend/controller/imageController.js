const {generateSignedUrl}=require('../s3')
const getSignedUrl=async(req,res)=>{

    try{
        const url=await generateSignedUrl();
        res.status(200).json({url})

    }catch(error){
        res.status(500).json(error);
    }

}

module.exports= {getSignedUrl}
