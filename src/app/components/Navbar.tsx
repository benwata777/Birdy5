import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      className="bg-[url('/navbg.png')] bg-black bg-opacity-70 bg-cover bg-center px-4"
    >
      <Toolbar>
        <Link href="/" passHref>
          <Image
            src="/logo.png"
            alt="Birdy5 Logo"
            width={80}
            height={40}
            className="bg-white bg-opacity-80 rounded-[8px] px-4 py-2 hover:bg-gray-200"
          />
        </Link>
        <div className="flex-grow" />

        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {["/", "/status", "/shop", "/aboutus"].map((path, index) => (
                <MenuItem
                  key={index}
                  onClick={handleMenuClose}
                  className="bg-white bg-opacity-80 rounded-full mb-2"
                >
                  <Link href={path} passHref>
                    <span className="flex justify-center w-full p-2 hover:bg-gray-200 rounded-full">
                      {
                        ["หน้าหลัก", "สถานะเลน", "ร้านค้า", "เกี่ยวกับเรา"][
                          index
                        ]
                      }
                    </span>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <div className="flex space-x-4">
            {["หน้าหลัก", "สถานะเลน", "ร้านค้า", "เกี่ยวกับเรา"].map(
              (label, index) => (
                <Link
                  key={index}
                  href={["/", "/status", "/shop", "/aboutus"][index]}
                  className="bg-white bg-opacity-30 rounded-[8px] px-4 py-2 hover:bg-gray-200"
                >
                  {label}
                </Link>
              )
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
