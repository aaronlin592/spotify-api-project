# Spotify API Project

## Description

This project interacts with the Spotify Web API to [briefly describe the main functionality of your project].

## Features

- **User Authentication**: Securely authenticate users using OAuth to access their Spotify data.
- **User Profile Information**: Retrieve and display user profile details such as display name, followers, and profile images.
- **Search Functionality**: Allow users to search for tracks, artists, albums, and playlists.
- **Artist Details**: Display detailed information about artists, including top tracks and related artists.
- **Album Details**: Show album information along with track listings.
- **Track Details**: Provide detailed information about individual tracks.

## Technologies Used

- **Frontend**: Angular for building a dynamic and responsive user interface.
- **Backend**: Node.js and Express.js to handle API requests and serve the frontend.
- **Spotify Web API**: To fetch data related to users, tracks, artists, and more.

## Setup Instructions

1. **Clone the repository**:

    ```bash
    git clone https://github.com/aaronlin592/spotify-api-project.git
    cd spotify-api-project
    ```

2. **Install backend dependencies**:

    ```bash
    cd webserver
    npm install
    ```

3. **Install frontend dependencies**:

    ```bash
    cd ../client
    npm install
    ```

4. **Set up environment variables**:

    - Create a `.env` file in the `webserver` directory with your Spotify API credentials:

        ```
        SPOTIFY_CLIENT_ID=your_client_id
        SPOTIFY_CLIENT_SECRET=your_client_secret
        REDIRECT_URI=http://localhost:8888/callback
        ```

5. **Run the backend server**:

    ```bash
    cd ../webserver
    npm start
    ```

6. **Run the frontend application**:

    ```bash
    cd ../client
    ng serve
    ```

7. **Access the application**:

    - Navigate to `http://localhost:4200` in your web browser.

## Acknowledgements

- [Spotify Web API Examples](https://github.com/spotify/web-api-examples) for providing foundational examples of Spotify API integration.
- [SpotifyAPI-NET](https://github.com/JohnnyCrazy/SpotifyAPI-NET) for insights into .NET integrations with Spotify.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
