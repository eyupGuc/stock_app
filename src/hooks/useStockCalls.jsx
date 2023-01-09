import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

//!---------------GET CALLS-----
const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);

      dispatch(getSuccess({ data, url }));
    } catch (e) {
      console.log(e);
      dispatch(fetchFail());
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");
  const getCategories = () => getStockData("categories");
  const getBrands = () => getStockData("brands");
  const getProducts = () => getStockData("products");

  //!---------------DELETE CALLS-----
  const deleteStockData = async (url, id) => {
   
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfully deleted`);
      getStockData(url);
    } catch (e) {
      toastErrorNotify(`${url}  can not be  deleted`);
    }
  };
  const deleteFirm = (id) => deleteStockData("firms", id);
  const deleteBrand = (id)=> deleteStockData("brands",id);

  //!---------------POST CALLS-----
  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfully added`);
      getStockData(url);
    } catch (e) {
      toastErrorNotify(`${url} can not be added `);
    }
  };
  const postFirm = (info) => postStockData(info, "firms");
  const postBrand =(info) => postStockData(info,"brands")

  //!---------------PUT CALLS-----

  const putStockData = async (info, url) => {
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfully updated`);
      getStockData(url);
    } catch (e) {
      toastErrorNotify(`${url} can not be updated `);
    }
  };

  const putFirm = (info) => putStockData(info, "firms");
  const putBrand = (info) => putStockData(info,"brands");

  return {
    getFirms,
    getSales,
    getCategories,
    getBrands,
    getProducts,
    deleteFirm,
    postFirm,
    postStockData,
    putFirm,
    putBrand,
    postBrand,
    deleteBrand,
  };
};

export default useStockCalls;
