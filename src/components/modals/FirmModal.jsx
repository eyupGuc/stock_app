import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";

export default function FirmModal({ open, setOpen, info, setInfo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
          <TextField
            label="Firm name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info?.name}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            submit firm
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
