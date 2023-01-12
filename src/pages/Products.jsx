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

const Products = () => {
  const { getFirms, getBrands, getCategories, getProducts } = useStockCalls();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});

  // console.log(firms)
  // console.log(products);

  const [toggle, setToggle] = useState({
    brand: 1,
    name: 1,
    stock: 1,
  });

  useEffect(() => {
    getBrands();
    getCategories();
    getProducts();
  }, []);
  // console.log(info);

  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSort = (arg, type) => {
    setToggle({ ...toggle, [arg]: toggle[arg] * -1 });
    setSortedProducts(
      sortedProducts
        ?.map((item) => item)
        .sort((a, b) => {
          if (type === "date") {
            return toggle[arg] * new Date(a[arg]);
          } else if (type === "number") {
            return toggle[arg] * (a[arg] - b[arg]);
          } else if (toggle[arg] === 1) {
            return b[arg] > a[arg] ? 1 : b[arg] < a[arg] ? -1 : 0;
          } else {
            return a[arg] > b[arg] ? 1 : a[arg] < b[arg] ? -1 : 0;
          }
        })
    );
  };
  //! product state'i her güncellendiğinde local state'i de güncelle.
  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  console.log(toggle);
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
                  <Box
                    sx={arrowStyle}
                    onClick={handleSortNumber("brand", "text")}
                  >
                    <div>Brand</div> {true && <UpgradeIcon />}{" "}
                    {false && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>

                <TableCell align="center">
                  <Box sx={arrowStyle}>
                    <div>Name</div> {true && <UpgradeIcon />}{" "}
                    {false && <VerticalAlignBottomIcon />}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={arrowStyle}
                    onClick={() => handleSortNumber("stock")}
                  >
                    <div>Stock</div> {toggle.stock === 1 && <UpgradeIcon />}{" "}
                    {toggle.stock !== 1 && <VerticalAlignBottomIcon />}
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
