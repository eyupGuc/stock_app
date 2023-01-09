import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import useStockCalls from "../hooks/useStockCalls";
import { useState } from "react";
import {ProductModal} from "../components/modals/ProductModal";

const Products = () => {
  const { getFirms,getBrands ,getCategories,getProducts} = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  // console.log(firms)

  useEffect(() => {
  getBrands();
  getCategories();
  getProducts();
  }, []);
console.log(info)
  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>{" "}
      <Button variant="contained" onClick={() => setOpen(true)} sx={{mb:2}}>
        New Product
      </Button>
      {/* <ProductModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} /> */}
      {firms?.length > 0 && (
        <Grid container justifyContent="center" gap={4}>
          {firms?.map((item) => (
            <Grid item key={item.id}>
              <FirmCard item={item} setInfo={setInfo} setOpen={setOpen}/>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Products;
