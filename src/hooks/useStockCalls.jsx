import { axiosWithToken } from "../service/axiosInstance";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";


const useStockCalls = () => {
  const dispatch = useDispatch();
 

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

 const getFirms=()=>getStockData("firms")
 const getSales=()=>getStockData("sales")

  return { getFirms,getSales };
};

export default useStockCalls;
