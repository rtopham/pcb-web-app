import mongoose from 'mongoose'
const ImageSchema = new mongoose.Schema({

  filename: {type: String},


  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'}

})

ImageSchema.virtual('uniqueId')
    .get(function() {
        return this.filename.replace(path.extname(this.filename), '');
    });


export default mongoose.model('Image', ImageSchema)
