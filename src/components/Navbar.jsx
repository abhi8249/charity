import React from "react";
import { useState, useEffect } from "react";
import {
  Facebook,
  Youtube,
  Instagram,
  Globe,
  Menu,
  X,
  Heart,
  Play,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import bharatmata from "../../public/bharatmata.png";
import { Box, Fade, IconButton, Modal } from "@mui/material";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm font-medium">Achyutananda Seva Ashram</div>
          <div className="flex space-x-4">
            <Facebook className="w-8 h-10 hover:text-orange-200 cursor-pointer transition-colors" />
            <Youtube className="w-8 h-10 hover:text-orange-200 cursor-pointer transition-colors" />
            <Instagram className="w-8 h-10 hover:text-orange-200 cursor-pointer transition-colors" />
            <Globe className="w-8 h-10 hover:text-orange-200 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ॐ</span>
              </div> */}
              <img
                src="./logo.jpg"
                alt=""
                className="w-12 h-12 rounded-full flex items-center justify-center"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Achyutananda
                </h1>
                <p className="text-sm text-orange-600">Seva Ashram</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="/gallery"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                Gallery
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#donate"
                className="text-orange-700 hover:text-orange-600 font-medium flex transition-colors"
                onClick={() => setOpenModal(true)}
              >
                Donate Now
                <Heart className="w-6 h-6 ml-2" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="py-2">
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  About Us
                </a>
                <a
                  href="/gallery"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  Gallery
                </a>
                <a
                  href="/contact"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  Contact Us
                </a>
                <a
                  href="#donate"
                  className="block px-4 py-2 text-orange-700 hover:bg-orange-50"
                  onClick={() => setOpenModal(true)}
                >
                  Donate Now
                  <Heart className="w-6 h-6 ml-2" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="bharatmata fixed right-10 top-2 bg-transparent border-0 z-50">
        <img
          src={bharatmata}
          alt="Bharat Mata"
          className="w-36 h-auto mx-auto object-contain bg-transparent border-0"
        />
      </div>

      {/* Image Modal */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(6px)",
        }}
      >
        <Fade in={openModal}>
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={() => setOpenModal(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "white",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
              }}
            >
              X
            </IconButton>
            <img
              src="/qrcode.jpeg"
              alt="Enlarged"
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: "12px",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
