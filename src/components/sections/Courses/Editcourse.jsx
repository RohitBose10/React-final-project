import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCourseDetails } from "../../redux/slice/detailslice";
import { updateCourse } from "../../redux/slice/courseslice";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import UploadIcon from "@mui/icons-material/Upload";

const EditCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const course = useSelector((state) => state.courseDetails.course);
  const categories = useSelector((state) => state.categories.categories);

  const [formData, setFormData] = useState({
    title: "",
    category_name: "",
    description: "",
    price: "",
    release_date: "",
    rating: "",
    instructor: "",
    platform: "",
    image: "",
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!course || course.id !== id) {
      dispatch(fetchCourseDetails(id));
    } else {
      setFormData({
        title: course.title,
        category_name: course.category_name,
        description: course.description,
        price: course.price,
        release_date: course.release_date,
        rating: course.rating,
        instructor: course.instructor,
        platform: course.platform,
        image: course.image,
      });
    }
  }, [dispatch, id, course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateCourse({ id, updatedCourseData: formData }));

    navigate(`/courses/${formData.category_name}`);
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/images/addcourse.jpg')", // Adjust background if necessary
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
        px: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: isSmallScreen ? "100%" : 600,
          width: "100%",
          p: 3,
          background: "linear-gradient(135deg, #fef9e4 0%, #b3cde0 100%)",
          color: "#121212",
          borderRadius: 5,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          align="center"
          gutterBottom
          sx={{ color: "#333", fontSize: "1.8rem", fontWeight: "bold", py: 2 }}
        >
          Edit Course
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Course Title"
              fullWidth
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            >
              <InputLabel sx={{ color: "#121212" }}>Category Name</InputLabel>
              <Select
                name="category_name"
                value={formData.category_name}
                onChange={handleChange}
                displayEmpty
                sx={{
                  color: "#121212",
                  "& .MuiSvgIcon-root": { color: "#121212" },
                }}
              >
                {/* Dynamically populate categories */}
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={4}
              required
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Price"
              type="number"
              fullWidth
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Release Date"
              type="date"
              fullWidth
              name="release_date"
              value={formData.release_date}
              onChange={handleChange}
              required
              InputLabelProps={{
                shrink: true,
                style: { color: "#121212" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Rating"
              type="number"
              fullWidth
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Instructor"
              fullWidth
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Platform"
              fullWidth
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: "#121212" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9", // Light background for inputs
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-image"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="upload-image">
              <Button
                component="span"
                variant="contained"
                startIcon={<UploadIcon />}
                fullWidth
                sx={{
                  mt: 1,
                  borderRadius: "8px",
                  padding: "12px",
                  background: "linear-gradient(135deg, #e50914, #b00020)",
                  "&:hover": {
                    bgcolor: "#ff0033",
                    transition: "background-color 0.3s ease-in-out",
                  },
                }}
              >
                Upload Image
              </Button>
            </label>
            {formData.image && (
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <img
                  src={formData.image}
                  alt="Course Preview"
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 5 }}
                />
              </Box>
            )}
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            borderRadius: "8px",
            padding: "12px",
            background: "linear-gradient(135deg, #e50914, #b00020)",
            "&:hover": {
              bgcolor: "#ff0033",
              transition: "background-color 0.3s ease-in-out",
            },
            color: "#FAFAFA",
            fontWeight: "bold",
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default EditCourse;
