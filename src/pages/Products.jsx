import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import useStockCalls from "../hooks/useStockCalls";
import { useState } from "react";
import ProductModal from "../components/modals/ProductModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { arrowStyle, btnHoverStyle, flexCenter } from "../styles/globalStyle";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import useSortColumn from "../hooks/useSortColumn";

const Products = () => {
  const { getFirms, getBrands, getCategories, getProducts } = useStockCalls();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  const columnObj = {
    brand: 1,
    name: 1,
    stock: 1,
  };

  const { sortedData, handleSort, columns } = useSortColumn(
    products,
    columnObj
  );

  useEffect(() => {
    getBrands();
    getCategories();
    getProducts();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Products
      </Typography>{" "}
      <Button variant="contained" onClick={() => setOpen(true)} sx={{ mb: 2 }}>
        New Product
      </Button>
      <ProductModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />
      {products?.length > 0 && (
        <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">
                  <Box sx={arrowStyle} onClick={handleSort("brand", "text")}>
                    <div>Brand</div> {columns.brand === 1 && <UpgradeIcon />}{" "}
                    {columns.brand !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>

                <TableCell align="center">
                  <Box sx={arrowStyle}>
                    <div>Name</div> {columns.name === 1 && <UpgradeIcon />}{" "}
                    {columns.name !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box sx={arrowStyle} onClick={() => handleSort("stock")}>
                    <div>Stock</div> {columns.stock === 1 && <UpgradeIcon />}{" "}
                    {columns.stock !== 1 && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow
                  key={product.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{product.category}</TableCell>
                  <TableCell align="center">{product.brand}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.stock}</TableCell>
                  <TableCell align="center">
                    <DeleteOutlineIcon sx={btnHoverStyle} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Products;
