# Flower Recognition App

The Flower Recognition App is a web application that allows users to upload images of flowers and identify their species using the Plant.id API. With a simple and intuitive interface, users can easily choose an image of a flower, click the "Identify" button, and receive the classification results along with the probability of the flower species.

## Features

- Image Upload: Users can upload an image of a flower from their local machine to the app.
- Identify Flower: By clicking the "Identify" button, the app sends the uploaded image to the Plant.id API for classification.
- Classification Result: The app displays the name of the identified flower species along with the probability of the classification.
- Similar Images (Optional): For each recognized flower species, the app can display a set of similar images.

## Technologies Used

The Flower Recognition App is built using the following technologies:

- **Vue.js**: The front-end of the application is developed using the Vue.js framework, allowing for a responsive and interactive user interface.
- **Axios**: Axios is used to handle HTTP requests and communicate with the Plant.id API for flower identification.
- **Plant.id API**: The app utilizes the Plant.id API to perform the flower classification based on the uploaded images.
- **Font Awesome Icons**: Font Awesome icons are integrated into the UI to enhance the user experience.

## Getting Started

To run the Flower Recognition App locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project folder and install the dependencies using `yarn install`.
3. Obtain a Plant.id API Key from [Plant.id](https://plant.id/plant-identification-api/) and replace the placeholder `PLANT_ID_API_KEY` in the `PlantRecognition.vue` component with your API key.
4. Run the app using `yarn serve --port 5173`.
5. Open your web browser and visit `http://localhost:5173/` to access the app.

## Contribution

Contributions to the Flower Recognition App are welcome! If you find any bugs or have ideas for improvements, feel free to open an issue or submit a pull request.

## License

The Flower Recognition App is open-source and available under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as per the terms of the license.

---

This README.md file provides an overview of the Flower Recognition App, its features, technologies used, setup instructions, and license information. You can further customize the README to include more specific details or instructions as needed.
