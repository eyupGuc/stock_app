import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { btnHoverStyle } from "../styles/globalStyle";
import useStockCalls from "../hooks/useStockCalls";
import { CardHeader } from "@mui/material";

export default function FirmCard({ item }) {
  const { deleteFirm } = useStockCalls();

  return (
    <Card elevation={10}
      sx={{
        p: 2,
        maxWidth: "300px",
        maxHeight: "600px",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader title={item?.name} subheader={item?.address} />
      <CardMedia
        component="img"
        alt="green iguana"
        height="325"
        width="250"
        image={item?.image}
        sx={{ p: 1, objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.phone}
        </Typography>
       
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <EditIcon sx={btnHoverStyle} />
        <DeleteOutlineIcon
          sx={btnHoverStyle}
          onClick={() => deleteFirm(item?.id)}
        />
      </CardActions>
    </Card>
  );
}
