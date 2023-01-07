import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyle";
import { TextField } from "@mui/material";

export default function FirmModal({ open, setOpen }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <TextField
            label="Firn name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
          ></TextField>
        </Box>
      </Modal>
    </div>
  );
}
