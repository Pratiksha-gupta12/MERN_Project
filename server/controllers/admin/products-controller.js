const { imageUploadUtil } = require("../../helpers/cloudinary");


const handleImageUpload = async(req,res)=>{
    try{

        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const url = "data:" + req.file.mimetype + ";base64,"+ b64;

        const result = await imageUploadUtil(url);

        if(result && result.url){
        res.json({
            success: true,
            result,
          });
        }else{
            throw new Error("Image upload failed: No URL returned.");
        }

    } catch(error){
        console.log(error);
        res.json({
            success: false,
            message: "Error Occured",
        });
    }
};

module.exports = {handleImageUpload}