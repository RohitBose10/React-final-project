import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchCoursesByCategory,
  setCourseSearchQuery,
  selectFilteredCourses,
  deleteCourse,
} from "../../redux/slice/courseslice";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const CoursesPage = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector(selectFilteredCourses);
  const searchQuery = useSelector((state) => state.courses.searchQuery);
  const userRole = localStorage.getItem("userRole");

  const [sortOrder, setSortOrder] = useState("A-Z");

  useEffect(() => {
    dispatch(fetchCoursesByCategory(categoryName));
  }, [dispatch, categoryName]);

  const handleCourseClick = (id) => {
    navigate(`/details/${id}`);
  };

  const handleNavigateBack = () => {
    navigate("/categories");
  };

  const handleDeleteCourse = (id) => {
    dispatch(deleteCourse(id));
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
  };

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortOrder === "A-Z") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: { xs: 3, md: 4 },
        }}
      >
        <Button
          variant="contained"
          onClick={handleNavigateBack}
          startIcon={<ChevronLeftIcon />}
          sx={{
            background: "linear-gradient(135deg, #e50914, #b00020)",
            color: "#FFFFFF",
            borderRadius: "25px",
            padding: "12px 20px",
            fontSize: { xs: "0.5rem", md: "0.8rem" },
            fontWeight: "bold",
            textTransform: "uppercase",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            "& .MuiButton-startIcon": {
              marginRight: "4px",
            },
          }}
        >
          Back to Categories
        </Button>

        <FormControl sx={{ minWidth: 100, width: { xs: "100%", sm: "auto" } }}>
          <InputLabel
            sx={{
              color: "#FFFFFF",
              "&.Mui-focused": {
                color: "#e50914",
              },
            }}
          >
            Sort By
          </InputLabel>
          <Select
            value={sortOrder}
            onChange={handleSortChange}
            label="Sort By"
            displayEmpty
            sx={{
              borderRadius: "25px",
              backgroundColor: "#333333",
              color: "#FAFAFA",
              width: { xs: "100%", sm: "200px" },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#555555",
                borderRadius: "25px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e50914",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e50914",
              },
              "& .MuiSvgIcon-root": {
                color: "#FAFAFA",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "#1E1E1E",
                  color: "#FAFAFA",
                  "& .MuiMenuItem-root:hover": {
                    color: "#FFFFFF",
                  },
                },
              },
            }}
          >
            <MenuItem value="A-Z">a-z</MenuItem>
            <MenuItem value="Z-A">z-a</MenuItem>
          </Select>
        </FormControl>
      </Box>

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
        {categoryName} Courses
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: { xs: "30px", md: "60px" },
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search Courses"
          value={searchQuery}
          onChange={(e) => dispatch(setCourseSearchQuery(e.target.value))}
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
        {sortedCourses.length > 0 ? (
          sortedCourses.map((course) => (
            <Card
              key={course.id}
              onClick={() => handleCourseClick(course.id)}
              sx={{
                cursor: "pointer",
                height: userRole === "admin" ? "400px" : "340px",
                position: "relative",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#1E1E1E",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={course.image}
                alt={course.title}
                sx={{
                  filter: "brightness(0.85)",
                }}
              />
              <CardContent
                sx={{
                  backgroundColor: "#1E1E1E",
                  color: "#fff",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      fontWeight: "bold",
                      color: "#FFFFFF",
                      mb: 1,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#CCCCCC",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      mb: 1,
                    }}
                  >
                    {course.instructor} • {course.release_date}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#F1F1F1",
                      fontWeight: "500",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                    }}
                  >
                    Rating: {course.rating} ⭐
                  </Typography>
                </Box>

                {userRole === "admin" && (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteCourse(course.id);
                    }}
                    sx={{
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      background: "linear-gradient(135deg, #e50914, #b00020)",
                      mt: 2,
                      padding: "10px 100px",
                      alignSelf: "center",
                    }}
                  >
                    Delete
                  </Button>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary" align="center">
            No courses found in this category.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CoursesPage;
