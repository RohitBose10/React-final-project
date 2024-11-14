import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCourseToCart } from "../../redux/slice/cartSlice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const course = useSelector((state) =>
    state.courses.courses.find((course) => course.id === id)
  );
  const isCourseInCart = useSelector((state) =>
    state.cart.cart.some((item) => item.id === id)
  );

  if (!course) {
    return <Typography variant="h5">Course not found</Typography>;
  }
  const userRole = localStorage.getItem("userRole");
  const handleAddToCart = () => {
    dispatch(addCourseToCart(course));
  };
  const handleNavigateBack = () => {
    navigate(`/courses/${course.category_name}`);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 5, md: 15 },
        backgroundImage:
          "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 50%, #0f0f0f 100%)",
        backgroundSize: "cover",
        color: "#FAFAFA",
        minHeight: "100vh",
        px: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
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
          }}
        >
          Back to Courses
        </Button>
      </Box>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#e50914",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        {course.title}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#999", mt: 1 }}>
        {course.category_name} | {course.release_date}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Card
          sx={{
            width: { xs: "100%", sm: "80%", md: "1000px" },
            height: { xs: "auto", md: "400px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: 4,
            backgroundColor: "#1E1E1E",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden",
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <Box
            component="img"
            src={course.image}
            alt={course.title}
            sx={{
              width: { xs: "100%", md: "50%" },
              objectFit: "cover",
              filter: "brightness(0.9)",
            }}
          />
          <CardContent
            sx={{
              width: { xs: "100%", md: "50%" },
              backgroundColor: "#1E1E1E",
              color: "#FAFAFA",
              p: 3,
              textAlign: "left",
              position: "relative",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#FFFFFF", fontWeight: "bold" }}
            >
              {course.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 3, color: "#CCCCCC" }}>
              {course.description}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 3, color: "#AAAAAA", fontSize: "16px" }}
            >
              <strong>Instructor:</strong> {course.instructor}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#AAAAAA", fontSize: "16px" }}
            >
              <strong>Platform:</strong> {course.platform}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#AAAAAA", fontSize: "16px" }}
            >
              <strong>Rating:</strong> {course.rating} / 5
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#4caf50", fontWeight: "bold", mt: 2 }}
            >
              Price: ${course.price}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 5,
                flexDirection: { xs: "row", sm: "row" },
              }}
            >
              {userRole === "admin" && (
                <Link to={`/editcourse/${course.id}`}>
                  <Button
                    variant="contained"
                    sx={{
                      background: "linear-gradient(135deg, #e50914, #b00020)",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#b00610" },
                    }}
                  >
                    Edit
                  </Button>
                </Link>
              )}
              {isCourseInCart ? (
                <Link to="/addtocart">
                  <Button
                    variant="contained"
                    sx={{
                      background: "linear-gradient(135deg, #0096c7, #005f73)",
                    }}
                  >
                    Go to Cart
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  sx={{ color: "#fff" }}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          mt: 4,
          px: { xs: 2, sm: 6, md: 12 },
          color: "#CCCCCC",
          textAlign: "center",
          fontSize: { xs: "0.9rem", md: "1rem" },
        }}
      >
        <Typography variant="body2" sx={{ fontStyle: "italic", paddingTop: 8 }}>
          Note: You have 3 days to return the course after purchase for a full
          refund, subject to our refund policy.
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailPage;
