// File to load images for the parallax backgrounds in index.html
const requestOptions = {
    method: "GET",
    redirect: "follow"
};

const baseUrl = "https://api.unsplash.com/photos/random";
const query = "3d+landscape";
const per_page = 3;
const content_filter = "high";
const size = "landscape";
const client_id = "8UtHjxilFh6KEa8HgrJt8W35ESkYOCvrp7Icj1dYqm8";

const defaultImages = [
    "src/public/background_1.jpg",
    "src/public/background_2.jpg",
    "src/public/background_3.jpg"
];
let parallaxImages = document.querySelectorAll(".parallax");
try {
    const response = await fetch(`${baseUrl}?query=${query}&count=${per_page}&content_filter=${content_filter}&orientation=${size}&client_id=${client_id}`, requestOptions);
    const result = await response.json();
    console.log(result);
    for (let i = 0; i < parallaxImages.length; i++) {
        parallaxImages[i].style.backgroundImage = `url(${result[i].urls.raw})`;
    }
} catch (error) {
    console.error("Error fetching images from Unsplash API. Using default images instead.");
    for (let i = 0; i < parallaxImages.length; i++) {
        parallaxImages[i].style.backgroundImage = `url(${defaultImages[i]})`;
    }
    console.error(error);
}