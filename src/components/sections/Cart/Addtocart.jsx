import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Divider,
  Grid,
  Stack,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { clearCart, removeFromCart } from "../../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [removedItemIndex, setRemovedItemIndex] = useState(null);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.Totalprice);

  // Clear Cart Handler
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Remove Item Handler
  const handleRemoveItem = (courseId) => {
    setRemovedItemIndex(courseId);
    setTimeout(() => {
      dispatch(removeFromCart(courseId));
      setRemovedItemIndex(null);
    }, 300);
  };

  // Place Order Handler
  const handlePlaceOrder = () => {
    setIsOrderPlaced(true); // Open the modal
  };

  // Close Modal Handler
  const handleCloseModal = () => {
    setIsOrderPlaced(false);
    dispatch(clearCart()); // Clear the cart after closing modal
    navigate("/categories");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#FAFAFA",
        minHeight: "100vh",
        py: { xs: 5, md: 10 },
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#e50914",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          fontSize: { xs: "2.5rem", md: "3rem" },
        }}
      >
        Your Cart
      </Typography>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="h5" sx={{ color: "#999", mb: 2 }}>
            Your cart is empty. Please select courses to add to your cart.
          </Typography>
          <Link to="/categories">
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #e50914, #b00020)",
                color: "#FAFAFA",
                textTransform: "uppercase",
              }}
            >
              Continue Shopping
            </Button>
          </Link>
        </Box>
      ) : (
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            {/* Cart List */}
            <Grid item xs={12} md={8}>
              <List>
                {cart.map((item, index) => (
                  <Fade
                    in={removedItemIndex !== index}
                    timeout={300}
                    key={item.id}
                    unmountOnExit
                  >
                    <ListItem
                      sx={{
                        backgroundColor: "#1E1E1E",
                        borderRadius: 2,
                        mb: 2,
                        p: 2,
                        transition: "transform 0.2s ease-in-out",
                        "&:hover": {
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                    >
                      <Card
                        sx={{
                          display: "flex",
                          width: "100%",
                          backgroundColor: "#2A2A2A",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt={item.title}
                          sx={{
                            width: 100,
                            height: 100,
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            color: "#FFF",
                          }}
                        >
                          <Typography variant="h6">{item.title}</Typography>
                          <Typography variant="body2" sx={{ color: "#bbb" }}>
                            Price: ${item.price}
                          </Typography>
                        </CardContent>
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          sx={{ pr: 2 }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ color: "#FFF", fontWeight: "bold" }}
                          >
                            ${item.price}
                          </Typography>
                          <IconButton
                            aria-label="delete"
                            sx={{ color: "#e50914" }}
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                      </Card>
                    </ListItem>
                  </Fade>
                ))}
              </List>
            </Grid>

            {/* Order Summary */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "#1E1E1E",
                  padding: 3,
                  borderRadius: 2,
                  animation: "pulse 1.5s infinite",
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.02)" },
                    "100%": { transform: "scale(1)" },
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
                >
                  Order Summary
                </Typography>
                <Divider sx={{ mb: 2, backgroundColor: "#333" }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Total: ${totalPrice.toFixed(2)}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<ShoppingCartCheckoutIcon />}
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "linear-gradient(135deg, #e50914, #b00020)",
                    }}
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </Button>
                  <Link to="/categories">
                    <Button
                      variant="outlined"
                      sx={{ color: "#e50914", borderColor: "#e50914" }}
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Order Confirmation Modal */}
      <Dialog
        open={isOrderPlaced}
        onClose={handleCloseModal}
        PaperProps={{
          style: {
            backgroundColor: "#1E1E1E",
            color: "#FAFAFA",
            borderRadius: "10px",

            display: "flex",
            justifyContent: "Center",
            alignItems: "center",
          },
        }}
      >
        <DialogTitle sx={{ color: "#e50914" }}>Order Placed!</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Thank you for your purchase! 🎉</Typography>
          <Typography variant="body2" sx={{ color: "#ccc" }}>
            Your order has been successfully placed.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={handleCloseModal}
          >
            Continue Shopping
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Cart;
