import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

//* ------Get Calls-------
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

  //!---------------DELETE CALLS-----
  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} can not be  deleted`);
      getStockData(url);
    } catch (e) {
      toastErrorNotify(`${url} `);
    }
  };
  const deleteFirm = (id) => deleteStockData("firms", id);
  return { getFirms, getSales, deleteFirm };
};

export default useStockCalls;
