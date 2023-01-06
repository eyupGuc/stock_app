import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import useStockCalls from "../hooks/useStockCalls";

const Firms = () => {
  const { getFirms }= useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  // console.log(firms)

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Firms
      </Typography>{" "}
      <Button variant="contained">New Firm</Button>
      {firms?.length > 0 && (
        <Grid container justifyContent="center" gap={4}>
          {firms?.map((item) => (
            <Grid item key={item.id}>
              <FirmCard item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;
