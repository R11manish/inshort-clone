import mongoose from 'mongoose';
const Connection = async () => {
    try {
        const URL = `mongodb+srv://inshortUser:hellobuddy@cluster0.itocy.mongodb.net/inshortDB?retryWrites=true&w=majority`;
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Established Connection Successfully. 😀😀');
    } catch (error) {
        console.log('Error 🔥🔥', error);
    }
}

export default Connection;