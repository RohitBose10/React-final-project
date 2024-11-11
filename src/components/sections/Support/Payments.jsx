import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const PaymentsPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
        p: { xs: 4, sm: 6, md: 10 }, // Responsive padding
      }}
    >
      {/* Header Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#FAFAFA",
            mb: 2,
            fontSize: { xs: "28px", sm: "35px", md: "45px" }, // Responsive font size
          }}
        >
          Payments and Purchases
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            color: "#E50914",
            maxWidth: 800,
            mx: "auto",
          }}
        >
          Manage your in-app purchases, review your transaction history, and get
          help with refunds and payment methods.
        </Typography>
      </Box>

      {/* Payments Section */}
      <Grid container spacing={4} sx={{ maxWidth: 1200, mx: "auto" }}>
        {[
          {
            title: "Managing Payment Methods",
            content:
              "Add or remove credit cards, link PayPal, and set up gift cards.",
            emphasis:
              "Tip: Make sure your payment method is up-to-date to avoid any interruptions.",
          },
          {
            title: "Transaction History",
            content:
              "Review past purchases, see transaction details, and track your spending in SkillForge.",
            emphasis:
              "Note: You can filter transactions by date and amount to find specific purchases.",
          },
          {
            title: "Refunds and Disputes",
            content:
              "Need help with a purchase? Learn how to request refunds or dispute transactions with SkillForge support.",
            emphasis:
              "Remember: Refund requests must be submitted within 30 days of the transaction.",
          },
          {
            title: "Setting Up Recurring Payments",
            content:
              "For regular in-app purchases, consider setting up recurring payments to automate your transactions. You can manage these in your account settings and adjust the frequency as needed.",
          },
          {
            title: "Security and Privacy",
            content:
              "Your payment information is protected with industry-standard encryption. Always monitor your account for unauthorized transactions and report any suspicious activity to our support team.",
          },
          {
            title: "Gift Cards and Vouchers",
            content:
              "Redeem gift cards and vouchers in SkillForge for in-app currency.",
            emphasis:
              "Tip: Check the expiration date of your gift cards and make sure they’re linked to your account.",
          },
        ].map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                height: "220px", // Make the height flexible
                backgroundColor: "#333",
                p: 3,
                borderRadius: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#FFD700",
                  mb: 2,
                  letterSpacing: 0.5,
                  fontWeight: "bold",
                  fontSize: { xs: "18px", sm: "20px", md: "22px" }, // Responsive font size
                }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#FAFAFA",
                  fontSize: { xs: "14px", sm: "16px" },
                  mb: 1,
                }}
              >
                {section.content}
              </Typography>
              {section.emphasis && (
                <Box
                  sx={{
                    color: "#38b6ff",
                    fontWeight: "bold",
                    backgroundColor: "rgba(56, 182, 255, 0.1)",
                    padding: 2,
                    borderRadius: 2,
                    fontSize: { xs: "1em", sm: "1.1em" },
                    textAlign: "left",
                    mt: 1,
                  }}
                >
                  {section.emphasis}
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PaymentsPage;
