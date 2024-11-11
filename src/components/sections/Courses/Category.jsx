import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchCategories,
  selectFilteredCategories,
  setSearchQuery,
} from "../../redux/slice/categoryslice";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectFilteredCategories);
  const searchQuery = useSelector((state) => state.categories.searchQuery);
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    navigate(`/courses/${category}`);
  };

  return (
    <Box
      sx={{
        py: { xs: "60px", md: "100px" },
        px: { xs: "20px", md: "120px" },
        backgroundImage:
          "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 50%, #0f0f0f 100%)",
        backgroundSize: "cover",

        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        color="#FAFAFA"
        sx={{
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          fontWeight: "bold",
          letterSpacing: "1px",
          textTransform: "uppercase",
          textShadow: "2px 2px 4px rgba(255, 255, 255, 0.1)",
          mb: { xs: 3, md: 4 },
        }}
      >
        Browse Categories
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        color="#e50914"
        sx={{
          fontSize: { xs: "1rem", md: "1.2rem" },
          fontStyle: "italic",
          fontWeight: "normal",
          letterSpacing: "0.5px",
          mb: { xs: 2, md: 4 },
        }}
      >
        "Discover a diverse selection of categories tailored to help you achieve
        your goals in various fields and industries!"
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: { xs: "30px", md: "50px" },
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search Categories"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          sx={{
            width: { xs: "100%", sm: "70%", md: "50%" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              backgroundColor: "#333333",
              "& fieldset": {
                borderRadius: "50px",
                borderColor: "#555555",
                borderWidth: "2px",
              },
              "&:hover fieldset": {
                borderColor: "#777777",
                borderWidth: "2px",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e50914",
                borderWidth: "2px",
              },
            },
            input: {
              color: "#FAFAFA",
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3, 1fr)",
          },
          gap: "20px",
        }}
      >
        {categories.map((category) => (
          <Card
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            sx={{
              cursor: "pointer",
              height: "340px",
              position: "relative",
              borderRadius: 4,

              overflow: "hidden",
              backgroundColor: "#1E1E1E",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.02)" },
              "&:hover .overlay": {
                transform: "translateY(0)",
                transition: "transform 0.5s ease-in-out",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={category.image}
              alt={category.name}
              sx={{ filter: "brightness(0.85)" }}
            />
            <CardContent
              sx={{ textAlign: "center", backgroundColor: "#1E1E1E" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: "700",
                  color: "#FFFFFF",
                  letterSpacing: "0.5px",
                  mb: 1,
                  textTransform: "uppercase",
                }}
              >
                {category.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFD700",
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
                  fontStyle: "italic",
                }}
              >
                {category.enrollment_stats}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#AAAAAA",
                  fontSize: { xs: "0.75rem", md: "0.85rem" },
                  mt: 1,
                }}
              >
                {category.category_highlights.join(" • ")}
              </Typography>
            </CardContent>
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "150px",
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "translateY(100%)",
                p: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: "500",
                  color: "#f1f1f1",
                }}
              >
                What you'll get? <br /> {category.description}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>

      {userRole === "admin" && (
        <Link to="/addcourse" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              backgroundColor: "#e50914",
              color: "#fff",
              padding: "10px 20px",
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: "bold",
              borderRadius: "30px",
              boxShadow: "0px 4px 12px rgba(229, 9, 20, 0.5)",
              "&:hover": {
                backgroundColor: "#b00610",
                boxShadow: "0px 6px 15px rgba(229, 9, 20, 0.7)",
              },
            }}
          >
            Add Course
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default CategoryPage;
