import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer className='w-full text-black' style={{ padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are dedicated to providing the best dining experience with our wide range of dishes and exceptional service.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link href="#" color="inherit" underline="hover">Home</Link></li>
              <li><Link href="#" color="inherit" underline="hover">Menu</Link></li>
              <li><Link href="#" color="inherit" underline="hover">Reservations</Link></li>
              <li><Link href="#" color="inherit" underline="hover">Contact Us</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              123 Main Street,<br />
              Cityville, ST 12345<br />
              Phone: (123) 456-7890<br />
              Email: <Link href="mailto:info@example.com" color="inherit">info@example.com</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <div>
              <Link href="#" color="inherit" style={{ marginRight: '10px' }}>Facebook</Link>
              <Link href="#" color="inherit" style={{ marginRight: '10px' }}>Twitter</Link>
              <Link href="#" color="inherit">Instagram</Link>
            </div>
          </Grid>
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="body2">
            © 2024 Your Restaurant. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
