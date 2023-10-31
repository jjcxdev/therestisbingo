**Disclaimer:** This content is purely for entertainment purposes and is not endorsed by, affiliated with, or created by "The Rest is Football" podcast or Goalhanger. 


# The Rest is Bingo

A simple web-based bingo game for "The Rest is Football" Podcast built with Next.js and React.

![Screenshot](https://github.com/jjcxdev/therestisbingo/blob/main/public/images/bingoScreenshot.png) 

## Features

- Randomly generated Bingo cards from a preset list of text items.
- Interactive cells that users can click to reveal a bingo dabber image.
- Modal notification when a player achieves a winning bingo pattern.
- Mobile-responsive design.

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repo:
   `git clone https://github.com/jjcxdev/therestisbingo.git`

2. Navigate to the directory:
`cd your-repo-name`

3. Install dependencies:
`npm install`

4. Run the development server:
`npm run dev`

5. Open your browser and navigate to `http://localhost:3000`. Enjoy!

# Components

- **BingoCard**: Represents the Bingo card grid. Generates a random 5x5 grid of text items and handles interactions such as revealing a cell.
  
- **Modal**: Displays a congratulatory message when a user wins.
  
- **Button**: A generic button component.

# Utilities

- **patternLogic**: Contains the logic to check for winning bingo patterns.
  
- **dabberList**: A list of available dabber images.
  
- **textDatabase**: A database of text items to be randomly placed on the Bingo card.

# Contribution

Contributions are welcome! Please fork this repository and open a pull request to add enhancements or fix issues.

# License

This project is open-source and available under the MIT License. See `LICENSE` for details.

# Acknowledgements

- Built with Next.js and React.
