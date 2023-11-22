import { Typography } from "@mui/material";
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
            width={"60px"} // Increased size
            height={"60px"} // Increased size
            className="image-inverted"
          />
          <Typography
            sx={{
              display: { md: "block", sm: "block", xs: "block" },
              mr: "auto",
              fontWeight: "800",
              textShadow: "2px 2px 20px #000",
              fontSize: "1.5rem", // Increased font size
            }}
          >
            <span style={{ fontSize: "20px" }}>AI</span>-Articulate
          </Typography>
        </div>
      </Link>
    </div>
  );
};
