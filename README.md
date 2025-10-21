# hng13-stage0-profile_card

A simple profile card that resembles a gravatar profile, built with vanilla HTML, CSS, and JavaScript.

## Features

- **Profile Card Container** - Root container with `data-testid="test-profile-card"`
- **User Name** - Displays the user's name with `data-testid="test-user-name"`
- **Biography** - Short bio about the user with `data-testid="test-user-bio"`
- **Current Time** - Live display of current time in milliseconds with `data-testid="test-current-time"`
- **Avatar Image** - User profile picture with `data-testid="test-user-avatar"`
- **Social Links** - Container for social media links with `data-testid="test-user-social-links"`
  - GitHub link with `data-testid="test-social-github"`
  - LinkedIn link with `data-testid="test-social-linkedin"`
  - Twitter link with `data-testid="test-social-twitter"`
- **Hobbies Section** - List of user's hobbies with proper data-testid attributes
- **Dislikes Section** - List of user's dislikes with proper data-testid attributes

## Technologies Used

- HTML5
- CSS3 (with animations and responsive design)
- Vanilla JavaScript (for real-time clock)

## How to Run

### Option 1: Direct Opening
Simply open `index.html` in your web browser.

### Option 2: Using Python HTTP Server
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 3: Using npm script
```bash
npm start
```

## Testing

All visible elements include `data-testid` attributes for automated testing:

- `test-profile-card` - Main profile card container
- `test-user-avatar` - User avatar image
- `test-user-name` - User's name
- `test-user-bio` - User's biography
- `test-current-time` - Current time display
- `test-user-social-links` - Social links container
- `test-social-github` - GitHub link
- `test-social-linkedin` - LinkedIn link
- `test-social-twitter` - Twitter link
- `test-hobbies-title` - Hobbies section title
- `test-hobbies-list` - Hobbies list
- `test-hobby-item-1` through `test-hobby-item-4` - Individual hobby items
- `test-dislikes-title` - Dislikes section title
- `test-dislikes-list` - Dislikes list
- `test-dislike-item-1` through `test-dislike-item-4` - Individual dislike items

## Preview

![Profile Card](https://github.com/user-attachments/assets/2493df0f-a38d-49d6-8817-dc84792e3ce9)

## License

MIT
