import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import aiarticulate from "../../assets/openai.png";

export const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Link to={"/"}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={aiarticulate}
            alt="aiarticulate"
            width={"30px"}
            height={"30px"}
            className="image-inverted"
          />
          <Typography
            sx={{
              display: { md: "block", sm: "block", xs: "block" },
              mr: "auto",
              forntWeight: "800",
              textShadow: "2px 2px 20px #000",
            }}
          >
            <span style={{ fontSize: "20px" }}>AI</span>-Articulate
          </Typography>
        </div>
      </Link>
    </div>
  );
};
