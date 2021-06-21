import axios from '@/api/axios';

const getArticle = slug => {
    return axios.get(`/articles/${slug}`).then(resp => resp.data.article);
}
const deleteArticle = slug => {
    return axios.delete(`/articles/${slug}`);
}

const createArticle = articleInput => {
    return axios.post('/articles', {article: articleInput}).then(resp => resp.data.article);
}

export default {
    getArticle,
    deleteArticle,
    createArticle
}