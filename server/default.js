import News from './model/news.js';
import { data } from "./constants/data.js";

const DefaultData = async () => {
    try {
        await News.deleteMany({})
        await News.insertMany(data);
        console.log('Data imported successfully');
    } catch (error) {
        console.log('Error 🔥🔥');
    }
}

export default DefaultData;