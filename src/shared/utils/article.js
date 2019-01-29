export const ARTICLE_SHAPE = {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: String,
    releaseDate: [String, Date],
    id: { type: Number, required: true }
};
