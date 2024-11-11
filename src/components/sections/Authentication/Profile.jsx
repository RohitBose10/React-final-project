import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Drawer,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";
import {
  profile,
  updateProfile,
  logout,
} from "../../redux/slice/authenticationslice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const { profileStatus, profileError } = useSelector((state) => state.auth);

  // State for displaying profile data
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    country: "",
    profileImage: "",
    dob: "",
    mobile: "",
  });

  // State for editing profile data
  const [editableProfileData, setEditableProfileData] = useState(profileData);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Fetch user profile on component mount
  useEffect(() => {
    if (userId) {
      dispatch(profile(userId))
        .then((res) => {
          const userData = res.payload;
          setProfileData({
            userId: userData.id || "",
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            username: userData.username || "",
            email: userData.email || "",
            country: userData.country || "",
            profileImage: userData.profileImage || "",
            dob: userData.dob || "",
            mobile: userData.mobile || "",
          });
          setEditableProfileData(userData);
        })
        .catch((err) => console.error("Error fetching profile:", err));
    }
  }, [dispatch, userId]);

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    Swal.fire({
      title: "Logged Out",
      text: "You have successfully logged out.",
      icon: "success",
      confirmButtonColor: "#ff5252",
    }).then(() => navigate("/login"));
  };

  // Toggle edit drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
    setEditableProfileData(profileData); // Reset to original data when opening the drawer
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Save changes to the profile
  const handleSave = () => {
    const updatedData = {
      userId,
      ...editableProfileData,
      role: profileData.role || "user", // Preserve the role during update
    };

    dispatch(updateProfile(updatedData))
      .then(() => {
        Swal.fire({
          title: "Profile Updated",
          text: "Your profile has been successfully updated.",
          icon: "success",
          confirmButtonColor: "#0096c7",
        });
        setProfileData(editableProfileData);
        setDrawerOpen(false);
      })
      .catch((err) => console.error("Profile update error:", err));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 50%, #0f0f0f 100%)",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="md">
        <Card
          elevation={12}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            borderRadius: 6,
            alignItems: "center",
            overflow: "hidden",
            bgcolor: "rgba(30, 30, 30, 0.85)",
            color: "#fff",
            p: 3,
            minHeight: 380,
            backgroundImage: "linear-gradient(135deg, #333, #111)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <CardMedia
            component="img"
            image={profileData.profileImage || "/assets/default-profile.jpg"}
            alt="Profile Image"
            sx={{
              width: { xs: 120, sm: 220 },
              height: { xs: 120, sm: 220 },
              m: { xs: "auto", sm: 3 },
              borderRadius: "50%",
              border: "5px solid #e50914",
              boxShadow: "0px 0px 20px rgba(229, 9, 20, 0.7)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.1) rotate(5deg)" },
            }}
          />
          <CardContent sx={{ flex: 1, px: 4, textAlign: "left" }}>
            <Typography variant="h4" fontWeight="bold" color="#e50914">
              {`${profileData.firstName} ${profileData.lastName}`}
            </Typography>
            <Typography variant="subtitle1" color="gray" mb={2}>
              @{profileData.username}
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {[
                { label: "UserID", key: "userId" },
                { label: "Country", key: "country" },
                { label: "Email", key: "email" },
                { label: "Mobile", key: "mobile" },
                { label: "Date of Birth", key: "dob" },
              ].map(({ label, key }, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    color="gray"
                    fontWeight="bold"
                    fontSize="18px"
                    sx={{ minWidth: 140 }}
                  >
                    {label}:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#fafafa"
                    fontWeight="bolder"
                    fontSize="20px"
                    sx={{ ml: 1 }}
                  >
                    {profileData[key] || "N/A"}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box mt={4} gap={2} display="flex">
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #0096c7, #005f73)",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "8px",

                  px: 4,
                  "&:hover": {
                    background: "linear-gradient(135deg, #0077b6, #005f73)",
                  },
                }}
                onClick={toggleDrawer(true)}
              >
                Edit Profile
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #d90429, #a0001e)",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  px: 4,
                  "&:hover": {
                    background: "linear-gradient(135deg, #a0001e, #660017)",
                  },
                }}
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* Edit Profile Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 360,
            p: 4,
            bgcolor: "#121212",

            color: "#FFFFFF",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#e50914"
            textAlign="center"
            sx={{
              mb: 3,
              textShadow: "0 0 10px rgba(229, 9, 20, 0.7)",
            }}
          >
            Edit Profile
          </Typography>

          {/* Input Fields Section */}
          <Box sx={{ mb: 4 }}>
            {["firstName", "lastName", "username", "email", "mobile"].map(
              (field) => (
                <TextField
                  key={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={editableProfileData[field] || ""}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  sx={{
                    mt: 2,
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "#1F1F1F",
                      borderRadius: 2,
                      color: "#FFFFFF",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF5733",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#e50914",
                        boxShadow: "0 0 5px rgba(229, 9, 20, 0.5)",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                    },
                    "& .MuiInputBase-input": {
                      color: "#FAFAFA",
                    },
                  }}
                />
              )
            )}
          </Box>

          {/* Profile Image Upload Section */}
          <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
            <Button
              variant="contained"
              component="label"
              sx={{
                mb: 2,
                width: "100%",
                py: 1.5,
                background: "linear-gradient(135deg, #e50914, #b00020)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: 2,
                textTransform: "uppercase",
                "&:hover": {
                  background: "linear-gradient(135deg, #ff1e2d, #b00020)",
                },
              }}
            >
              Upload Profile Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setEditableProfileData((prevData) => ({
                        ...prevData,
                        profileImage: reader.result,
                      }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </Button>

            {/* Profile Image Preview */}
            <Box
              component="img"
              src={
                editableProfileData.profileImage ||
                "/assets/default-profile.jpg"
              }
              alt="Profile Image"
              sx={{
                width: "100%",
                maxHeight: "auto",
                borderRadius: 2,
                border: "1px solid #e50914",
                boxShadow: "0px 0px 15px rgba(229, 9, 20, 0.7)",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Save Changes Button */}
          <Button
            variant="contained"
            fullWidth
            onClick={handleSave}
            sx={{
              py: 1.5,
              fontWeight: "bold",
              borderRadius: 2,
              background: "linear-gradient(135deg, #e50914, #b00020)",
              boxShadow: "0px 4px 15px rgba(229, 9, 20, 0.5)",
              color: "#fff",
              textTransform: "uppercase",
              transition: "transform 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #ff1e2d, #b00020)",
                transform: "scale(1.02)",
              },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Profile;
