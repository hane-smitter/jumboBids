import request from "../request";

export const fetchBiddableProducts = (query) => request.get(`${url}/products/bids${query}`);
export const fetchProductCategories = () => request.get(`${url}/categories`);
export const createProduct = (body) => request.post(`${url}/products`, body, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
});
export const makeBid = body => request.post(`${url}/bids`, body);
export const fetchTopBidder = (body) => request.get(`${url}/bids/amount/high?productId=${body.productId}`);
export const fetchLastBidder = (body) => request.get(`${url}/bids/last?productId=${body.productId}`);
export const fetchCurrentBidder = (body) => request.get(`${url}/bids/current-bidders?productId=${body.productId}`);

export const createUser = (body) => request.post(`${url}/users/create`, body);
export const signIn = (body) => request.post(`${url}/users/login`, body);
export const sendOtp = (body) => request.post(`${url}/users/generate-otp`, body);