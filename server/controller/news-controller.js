import News from '../model/news.js';


export const getNews = async (req, res) => {
    try {
        const size = Number(req.query.size);
        const skip = Number(req.query.page);

        let data = await News.find({}).limit(size).skip(size * skip);  //count= 5  skip 0
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

