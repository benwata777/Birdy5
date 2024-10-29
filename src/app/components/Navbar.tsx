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
      className="bg-[url('/navbg.jpg')] bg-cover bg-center px-4  bg-opacity-70"
    >
      <Toolbar>
        <Link
          className="bg-white bg-opacity-30 rounded-[8px] px-4 py-2 hover:bg-gray-200"
          href="/"
          passHref
        >
          <Image
            src="/logo.png"
            alt="GolfDrive Logo"
            width={59}
            height={25}
            className="cursor-pointer"
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
              <MenuItem
                onClick={handleMenuClose}
                className="bg-white bg-opacity-80 rounded-full mb-2"
              >
                <Link href="/" passHref>
                  <span className=" flex justify-center w-full p-2 hover:bg-gray-200 rounded-full">
                    หน้าหลัก
                  </span>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                className="bg-white bg-opacity-80 rounded-full mb-2"
              >
                <Link href="/status" passHref>
                  <span className="flex justify-center w-full p-2 hover:bg-gray-200 rounded-full">
                    สถานะเลน
                  </span>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                className="bg-white bg-opacity-80 rounded-full mb-2"
              >
                <Link href="/shop" passHref>
                  <span className="flex justify-center w-full p-2 hover:bg-gray-200 rounded-full">
                    ร้านค้า
                  </span>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                className="bg-white bg-opacity-80 rounded-full mb-2"
              >
                <Link href="/aboutus" passHref>
                  <span className="flex justify-center w-full p-2 hover:bg-gray-200 rounded-full">
                    เกี่ยวกับเรา
                  </span>
                </Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div className="flex space-x-4">
            <Link
              href="/"
              className="bg-white bg-opacity-30 rounded-[8px] px-4 py-2 hover:bg-gray-200"
            >
              หน้าหลัก
            </Link>
            <Link
              href="/status"
              className="bg-white bg-opacity-30 rounded-[8px] px-4 py-2 hover:bg-gray-200"
            >
              สถานะเลน
            </Link>
            <Link
              href="/shop"
              className="bg-white bg-opacity-30 rounded-[8px] px-4 py-2 hover:bg-gray-200"
            >
              ร้านค้า
            </Link>
            <Link
              href="/aboutus"
              className="bg-white bg-opacity-30 rounded-[8px] px-4 py-2 hover:bg-gray-200"
            >
              เกี่ยวกับเรา
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
