import {
  CREATE,
  READPROD,
  READCAT,
  ERROR,
  LOADING,
  STATUS,
  FETCHTB,
  FETCHLB,
  FETCHCB,
  READ_PROD_DET_SUCCESS,
  READ_PROD_DET_REQUEST,
  READ_PROD_DET_FAIL,
} from "../constants";

export const app = (
  app = {
    products: [],
    status: {},
    categories: [],
    bidder: {
      topBidder: {},
    },
    lastBidder: {},
    currentBidders: [],
    loading: false,
    err: [],
  },
  action
) => {
  switch (action.type) {
    /* case READPROD:
            return action.payload.products; */
    case READPROD:
      return {
        ...app,
        products: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case CREATE:
      return {
        ...app,
        products: [...app.products, action.payload.product],
      };
    case READCAT:
      return {
        ...app,
        categories: action.payload.categories,
      };
    case FETCHTB:
      return {
        ...app,
        bidder: { ...app.bidder, topBidder: action.payload.bidder },
      };
    case FETCHLB:
      return {
        ...app,
        lastBidder: action.payload.bidder,
      };
    case FETCHCB:
      return {
        ...app,
        currentBidders: action.payload.bidder,
      };
    case STATUS:
      return {
        ...app,
        status: action.payload.status,
      };
    case ERROR:
      return {
        ...app,
        err: [...action.payload.err],
      };
    case LOADING:
      return {
        ...app,
        loading: Boolean(action.payload.status),
      };
    default:
      return app;
  }
};

export const selectedProductDetails = (
  state = {
    details: null,
    loading: true,
    err: null,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case READ_PROD_DET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case READ_PROD_DET_SUCCESS:
      return {
        ...state,
        loading: false,
        details: payload,
        err: null,
      };
    case READ_PROD_DET_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    default:
      return state;
  }
};
