# Wedding Invitation Website 💒

A beautiful, creative, and modern online wedding invitation built with HTML, CSS, and JavaScript.

## Features ✨

- **Elegant Hero Section** with animated couple names
- **Countdown Timer** to the wedding day
- **Love Story Timeline** with beautiful animations
- **Wedding Details** section with ceremony and reception info
- **Photo Gallery** with hover effects
- **RSVP Form** for guest responses
- **Responsive Design** - works on all devices
- **Smooth Animations** and scroll effects
- **Music Player** toggle button
- **Floating Hearts** animation
- **Modern UI/UX** with golden color scheme

## Customization Guide 🎨

### 1. Change Couple Names and Date

Edit in `index.html`:
```html
<!-- Line ~30-35: Change names -->
<span class="bride-name">Sarah</span>
<span class="groom-name">Michael</span>

<!-- Line ~37: Change date -->
<p class="wedding-date">December 25, 2025</p>
```

Edit in `script.js`:
```javascript
// Line ~18: Update wedding date
const weddingDate = new Date('December 25, 2025 14:00:00').getTime();
```

### 2. Update Wedding Details

Edit in `index.html` (lines ~150-200):
- Ceremony location and time
- Reception venue and time
- Address and map links
- Dress code information

### 3. Customize Colors

Edit in `style.css`:
```css
:root {
    --primary-color: #d4af37; /* Golden color */
    --secondary-color: #8b6f47;
    --accent-color: #c9a86a;
    /* Change these to your preferred colors */
}
```

### 4. Add Real Photos

Replace the photo placeholders:
1. Add your photos to the project folder
2. Edit the CSS for `.couple-photo` and `.gallery-item`
3. Use `background-image: url('your-photo.jpg');`

### 5. Add Background Music

Uncomment the audio functionality in `script.js`:
```javascript
// Add an audio element in HTML:
// <audio id="backgroundMusic" src="your-music.mp3" loop></audio>

// Then uncomment the play/pause lines in the music player click handler
```

### 6. Connect RSVP Form

To receive RSVP submissions:

**Option 1: Google Forms**
- Create a Google Form
- Use a service to submit data to it

**Option 2: EmailJS**
- Sign up at emailjs.com
- Uncomment the EmailJS code in `script.js`
- Add your service ID and template ID

**Option 3: Backend Server**
- Create your own backend API
- Update the form submission handler to send data to your server

### 7. Add Google Maps Integration

Replace the placeholder map links:
```html
<a href="YOUR_GOOGLE_MAPS_LINK" target="_blank" class="btn-link">
    <i class="fas fa-map-marker-alt"></i> View Map
</a>
```

## File Structure 📁

```
wedding-invitation/
│
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Technologies Used 💻

- HTML5
- CSS3 (with animations and gradients)
- JavaScript (vanilla)
- Google Fonts (Great Vibes, Playfair Display, Montserrat)
- Font Awesome icons

## Browser Support 🌐

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Quick Start 🚀

1. Open `index.html` in your browser
2. Customize the content
3. Test on different devices
4. Deploy to your hosting service

## Deployment Options 🌍

### Free Hosting Services:
- **Netlify** - drag and drop deployment
- **Vercel** - connect to GitHub
- **GitHub Pages** - host directly from repository
- **Firebase Hosting** - Google's hosting service

### Steps to Deploy:
1. Create an account on your chosen platform
2. Upload your files or connect to GitHub
3. Get your custom URL
4. Share with guests!

## Tips for Best Results 🎯

1. **Test on mobile devices** - most guests will view on phones
2. **Optimize images** - compress photos for faster loading
3. **Update the date early** - give guests time to RSVP
4. **Keep content concise** - easy to read and navigate
5. **Test the RSVP form** - make sure it works before sharing
6. **Add a custom domain** - makes it more professional
7. **Share the link** - via email, WhatsApp, social media

## Customization Ideas 💡

- Add a video background
- Include a livestream link for virtual guests
- Add a gift registry section
- Create a "Travel & Accommodations" section
- Add a photo slideshow
- Include wedding party information
- Add a Q&A section
- Create a custom hashtag for social media

## Credits & Resources 📚

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Color Inspiration: Classic wedding gold theme

## Support 💝

If you need help customizing this template:
1. Check the comments in the code
2. Review the customization guide above
3. Search for tutorials online
4. Ask in web development communities

## License 📄

Feel free to use and customize this template for your wedding!

---

**Made with ❤️ for your special day**

Best wishes for your wedding! 🎉💒👰🤵

