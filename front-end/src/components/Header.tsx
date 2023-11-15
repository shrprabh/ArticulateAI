// ... other imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Logo } from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import { NavigationLink } from "./shared/NavigationLink";

export const Header = () => {
  const auth = useAuth();
  return (
    <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
      <Toolbar className="app-bar">
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink /* add this */
                bg="#00fffc"
                to="/chat"
                text="Go to Chat"
                textColor="black"
              />
              <NavigationLink /* add this */
                bg="#00fffc"
                to="/"
                text="logout"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink /* add this */
                bg="#00fffc"
                to="/login"
                text="login"
                textColor="black"
              />
              <NavigationLink /* add this */
                bg="#00fffc"
                to="/signup"
                text="SignUp"
                textColor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
