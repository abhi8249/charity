import { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Modal,
  Typography,
  Grid,
  IconButton,
  Fade,
} from "@mui/material";
import image1 from "../../public/image1.jpeg";
import image2 from "../../public/image2.jpeg";
import image3 from "../../public/image3.jpeg";
import image5 from "../../public/image5.jpeg";
import image6 from "../../public/image6.jpg";

const photos = [
  {
    id: 1,
    src: image1,
    alt: "Blood donation camp",
  },
  {
    id: 2,
    src: image2,
    alt: "Peaceful Nature",
  },
  {
    id: 3,
    src: image3,
    alt: "Food Distribution",
  },
  {
    id: 4,
    src: image5,
    alt: "plantation drive",
  },
  {
    id: 5,
    src: image6,
    alt: "cow shed",
  },

];

const videos = [
  { id: 1, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, url: "https://www.youtube.com/embed/ysz5S6PUM-U" },
];

export default function Gallery() {
  const [tabValue, setTabValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTabChange = (event, newValue) => setTabValue(newValue);

  const openImageModal = (src) => {
    setSelectedImage(src);
    setOpenModal(true);
  };

  return (
    <Box sx={{ mx: "auto", p: 3}}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
        📸 Gallery
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        sx={{
          "& .MuiTab-root": { fontWeight: "bold" },
          "& .Mui-selected": { color: "#ff5722 !important" },
          "& .MuiTabs-indicator": { backgroundColor: "#ff5722" },
        }}
      >
        <Tab label="Photos" />
        <Tab label="Videos" />
      </Tabs>

      {/* Photos Tab */}
      {tabValue === 0 && (
        <Grid container spacing={3} sx={{ mt: 2 , justifyContent:"space-around"}}>
          {photos.map((photo) => (
            <Grid item xs={12} sm={6} md={4} key={photo.id}>
              <Box
                sx={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.25)",
                  },
                }}
                onClick={() => openImageModal(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    p: 2,
                    fontWeight: "bold",
                    textAlign: "center",
                    background: "#fff",
                  }}
                >
                  {photo.alt}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Videos Tab */}
      {tabValue === 1 && (
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} key={video.id}>
              <Box
                sx={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <iframe
                  width="100%"
                  height="250"
                  src={video.url}
                  title="YouTube video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

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
              src={selectedImage}
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
    </Box>
  );
}
