import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { schedule } from "../../../Data/Data";

const Schedule = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "-50px",
      }}
    >
      {schedule.map(({ Icon, title, des, background }) => (
        <Paper
          sx={{
            background: background,
            color: "#fff",
            textWidth: "bold",
            padding: "20px 40px",
            marginRight: "20px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {" "}
            <Box>
              <Icon sx={{ fontSize: "60px", marginRight: "20px" }} />
            </Box>
            <Box>
              <Typography variant="h6">{title}</Typography>
              <Typography variant="body1">{des}</Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};
export default Schedule;