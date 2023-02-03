# MovieMate

A two-page[Next.js](https://nextjs.org/) application bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

Node.js and npm
Next.js

### Installation

Clone the repository to your local machine:
```git clone https://github.com/[your-username]/movie-application.git```

Navigate to the directory where the repository was cloned and install the dependencies:

```cd movie-application
npm install
```

### Running the Application

To run the application, execute the following command:
```npm run dev```

The application will be available at [http://localhost:3000](http://localhost:3000) in your web browser.

## How it Works

### Home Page

The home page displays a list of movie poster thumbnails. Each thumbnail is a link that redirects to the movie details page for that movie.

### Movie Details Page

The movie details page displays a poster, title, description, and rating for a movie. The movie data is fetched from an external API the first time the page is visited. Subsequent visits to the page will load the data from the store instead of making another API request.

### Styling

MovieMate uses BEM and CSS modules for styling. The class names follow the BEM naming convention, and the styles are defined in CSS module files.

### Data Store

The movie data is stored in a React context.
