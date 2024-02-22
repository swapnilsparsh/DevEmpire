import { Layout, Data } from "../../interfaces/obj_type";

const CloudData: Data[] = [
    {
        head: "Firebase",
        label: ["Cloud", "Authentication", "Hosting"],
        image: "/images/backend-img/firebase.png",
        link: "https://firebase.google.com",
        about:
            "Firebase offers backend services like database, authentication, hosting etc.",
        alt: "Firebase",
    },
    {
        head: "AWS",
        label: ["Cloud", "API"],
        image: "/images/backend-img/aws.png",
        link: "https://aws.amazon.com",
        about:
            "AWS is a subsidiary of Amazon providing on-demand cloud computing platforms.",
        alt: "AWS",
    },
    {
        head: "MongoDB Atlas",
        label: ["Cloud"],
        image: "/images/backend-img/mongo.png",
        link: "https://www.mongodb.com/cloud/atlas",
        about:
            "MongoDB Atlas is the global cloud database service for modern applications.",
        alt: "MongoDB Atlas",
    },
    {
        head: "Heroku",
        label: ["Hosting"],
        image: "/images/backend-img/heroku.png",
        link: "https://www.heroku.com",
        about:
            "Heroku is a cloud platform as a service supporting several programming languages.",
        alt: "Heroku",
    },
    {
        head: "Google Cloud Platform",
        label: ["Cloud"],
        image: "/images/backend-img/google-cloud.png",
        link: "https://cloud.google.com",
        about:
            "A cloud computing service that runs on the same infrastructure that Google uses.",
        alt: "Google Cloud",
    },
    {
        head: "Azure",
        label: ["Cloud"],
        image: "/images/backend-img/azure.png",
        link: "https://azure.microsoft.com",
        about:
            "A cloud computing service created for building, testing, and managing applications.",
        alt: "Azure",
    },
    {
        head: "Digital Ocean",
        label: ["Cloud"],
        image: "/images/backend-img/digitalocean.png",
        link: "https://www.digitalocean.com",
        about:
            "An American cloud infrastructure provider headquartered in New York City.",
        alt: "Digital Ocean",
    },
    {
        head: "Prisma",
        label: ["Cloud"],
        image: "/images/backend-img/prisma.png",
        link: "https://www.prisma.io",
        about:
            "A intuitive that lets you declare your database tables in a human-readable way",
        alt: "Prisma",
    },
]

const AuthData: Data[] = [
    {
        head: "Firebase",
        label: ["Cloud", "Authentication", "Hosting"],
        image: "/images/backend-img/firebase.png",
        link: "https://firebase.google.com",
        about:
            "Firebase offers backend services like database, authentication, hosting etc.",
        alt: "Firebase",
    },
    {
        head: "Auth0",
        label: ["Authentication"],
        image: "/images/backend-img/auth0.png",
        link: "https://auth0.com",
        about: "Auth0 is an authentication and authorization platform that is used widely.",
        alt: "Auth0",
    },
    {
        head: "Passport",
        label: ["Authentication"],
        image: "/images/backend-img/passport.png",
        link: "http://www.passportjs.org",
        about:
            "Passport is authentication middleware for Node.js. Extremely flexible and modular.",
        alt: "Passport",
    },
    {
        head: "AWS Cognito",
        label: ["Authentication"],
        image: "/images/backend-img/aws-cognito.png",
        link: "https://aws.amazon.com/cognito",
        about:
            "A simple data synchronization service that helps you securely synchronize app data.",
        alt: "AWS Cognito",
    },
    {
        head: "JWT",
        label: ["Authentication"],
        image: "/images/backend-img/jwt.png",
        link: "https://jwt.io",
        about:
            "A compact and self-contained way for securely transmitting information between parties.",
        alt: "JWT",
    },
    {
        head: "Okta",
        label: ["Authentication"],
        image: "/images/backend-img/okta.png",
        link: "https://www.okta.com",
        about:
            "Okta is the leading independent provider of identity for the enterprise.",
        alt: "Okta",
    }, {
        head: "Stytch Auth",
        label: ["Authentication"],
        image: "/images/backend-img/stytch.png",
        link: "https://stytch.com",
        about:
            "Stytch is a one-stop shop for all your authentication and security requirements.",
        alt: "NewYorkTimes",
    },
]

const HostingData: Data[] = [
    {
        head: "Firebase",
        label: ["Cloud", "Authentication", "Hosting"],
        image: "/images/backend-img/firebase.png",
        link: "https://firebase.google.com",
        about:
            "Firebase offers backend services like database, authentication, hosting etc.",
        alt: "Firebase",
    },
    {
        head: "Docker",
        label: ["Hosting"],
        image: "/images/backend-img/docker.png",
        link: "https://www.docker.com",
        about:
            "Docker is a set of platform as a service products that use OS-level virtualization.",
        alt: "Docker",
    },
    {
        head: "Heroku",
        label: ["Hosting"],
        image: "/images/backend-img/heroku.png",
        link: "https://www.heroku.com",
        about:
            "Heroku is a cloud platform as a service supporting several programming languages.",
        alt: "Heroku",
    },
    {
        head: "Netlify",
        label: ["Hosting"],
        image: "/images/backend-img/netlify.png",
        link: "https://www.netlify.com",
        about:
            "A cloud computing company that offers hosting and serverless backend services.",
        alt: "Netlify",
    },
    {
        head: "Vercel",
        label: ["Hosting"],
        image: "/images/backend-img/vercel.png",
        link: "https://vercel.com",
        about:
            "A cloud platform for static sites that fits perfectly with your workflow.",
        alt: "Vercel",
    },
    {
        head: "Back4App",
        label: ["Hosting"],
        image: "/images/backend-img/back4app.png",
        link: "https://www.back4app.com",
        about:
            "Back4App is a backend-as-a-service platform that helps you build, host and scale apps.",
        alt: "Back4App",
    },
    {
        head: "Render",
        label: ["Hosting"],
        image: "/images/backend-img/render.png",
        link: "https://render.com/",
        about:
            "A unified cloud to build and run all your apps and websites with free TLS certificates.",
        alt: "Render",
    },
]

const APIData: Data[] = [
    {
        head: "Google Maps API",
        label: ["API"],
        image: "/images/backend-img/maps.png",
        link: "https://developers.google.com/maps",
        about:
            "Google Maps Platform offers a free $200 monthly credit for Maps, Routes, and Places.",
        alt: "Google Maps API",
    },
    {
        head: "Stripe",
        label: ["API"],
        image: "/images/backend-img/stripe.png",
        link: "https://stripe.com",
        about:
            "Stripe is a suite of payment APIs that powers commerce for online businesses of all sizes.",
        alt: "Stripe",
    },
    {
        head: "AWS",
        label: ["Cloud", "API"],
        image: "/images/backend-img/aws.png",
        link: "https://aws.amazon.com",
        about:
            "AWS is a subsidiary of Amazon providing on-demand cloud computing platforms.",
        alt: "AWS",
    },
    {
        head: "Youtube API",
        label: ["API"],
        image: "/images/backend-img/youtube.png",
        link: "https://developers.google.com/youtube",
        about:
            "Lets you incorporate YouTube functionality into your own application.",
        alt: "Youtube API",
    },
    {
        head: "RapidAPI",
        label: ["API"],
        image: "/images/backend-img/rapid-api.png",
        link: "https://rapidapi.com",
        about:
            "The world's largest API marketplace with over 1,000,000 developers and 10,000 APIs.",
        alt: "Genral API",
    },
    {
        head: "Movie API",
        label: ["API"],
        image: "/images/backend-img/imdb.png",
        link: "https://www.omdbapi.com",
        about:
            "The API is a RESTful web service to obtain movie information, all content and images.",
        alt: "Movie API",
    },
    {
        head: "Spotify API",
        label: ["API"],
        image: "/images/backend-img/spotify.png",
        link: "https://developer.spotify.com",
        about:
            "A set of web APIs to access Spotify's database of music, artists, albums, and playlists.",
        alt: "Spotify API",
    },
    {
        head: "Free Weather API",
        label: ["API"],
        image: "/images/backend-img/weather-api.png",
        link: "https://openweathermap.org/api",
        about:
            "A team of IT experts and data scientists that has been practising deep weather.",
        alt: "Free Weather API",
    },
    {
        head: "Joke API",
        label: ["API"],
        image: "/images/backend-img/joke-api.png",
        link: "https://sv443.net/jokeapi/v2/",
        about:
            "The JokeAPI is a REST API that serves uniformly and well formatted jokes.",
        alt: "Joke API",
    },
    {
        head: "Twitter API",
        label: ["API"],
        image: "/images/backend-img/twitter.png",
        link: "https://developer.twitter.com/en/docs/twitter-api",
        about:
            "The Twitter API enables programmatic access to Twitter in unique and advanced ways.",
        alt: "Twitter API",
    },
    {
        head: "Facebook API",
        label: ["API"],
        image: "/images/backend-img/fb.png",
        link: "https://developers.facebook.com",
        about:
            "A platform for building applications that are available to the members of the social network.",
        alt: "Facebook API",
    },
    {
        head: "Instagram API",
        label: ["API"],
        image: "/images/backend-img/instagram.png",
        link: "https://developers.facebook.com/docs/instagram",
        about:
            "Can be used to build non-automated, authentic, high-quality apps.",
        alt: "Instagram API",
    },
    {
        head: "PayPal API",
        label: ["API"],
        image: "/images/backend-img/paypal.png",
        link: "https://developer.paypal.com/docs/api/overview",
        about:
            "A payments system in majority of countries that supports online money transfers.",
        alt: "Payments API",
    },
    {
        head: "WhatsApp API",
        label: ["API"],
        image: "/images/backend-img/whatsapp.png",
        link: "https://developers.facebook.com/docs/whatsapp",
        about:
            "A fast, secure, and reliable way for businesses to reach their customers all over the world.",
        alt: "WhatsApp API",
    },
    {
        head: "PayTM API",
        label: ["API"],
        image: "/images/backend-img/paytm.png",
        link: "https://developer.paytm.com/docs",
        about:
            "An Indian e-commerce payment system company, based in Noida, India.",
        alt: "PayTM API",
    },
    {
        head: "Stock API",
        label: ["API"],
        image: "/images/backend-img/alpha.png",
        link: "https://www.alphavantage.co",
        about:
            "Offers free stock APIs in JSON and CSV formats for realtime and historical equity.",
        alt: "Stock API",
    }, 
    {
        head: "Postman",
        label: ["API Testing"],
        image: "/images/backend-img/postman.png",
        link: "https://www.postman.com",
        about:
            "Postman is a collaboration platform for API development.",
        alt: "Postman",
    },
    {
        head: "Insomnia",
        label: ["API Testing"],
        image: "/images/backend-img/insomnia.png",
        link: "https://insomnia.rest",
        about:
            "A cross-platform GraphQL and REST client, available for Mac, Windows, and Linux.",
        alt: "Insomnia",
    },
    {
        head: "Thunder Client",
        label: ["API Testing"],
        image: "/images/backend-img/thunder-client.png",
        link: "https://www.thunderclient.io",
        about:
            "Thunder Client is a GUI based Rest API Client Extension for Visual Studio Code.",
        alt: "Thunder Client",
    },
    {
        head: "Postwoman (Hopscotch)",
        label: ["API Testing"],
        image: "/images/backend-img/postwoman.png",
        link: "https://hoppscotch.io",
        about:
            "An open-source API request builder. It helps you create your requests faster, saving time.",
        alt: "Postwoman",
    }, 
    {
        head: "NewYork Times API",
        label: ["API"],
        image: "/images/backend-img/times.png",
        link: "https://developer.nytimes.com/apis",
        about:
            "Provides developers access to their content for integrating current news into applications.",
        alt: "NewYorkTimes",
    },
]

const backend_data: Layout[] = [
    {
        subheading: "Cloud Platforms",
        id: "cloud",
        dataSource: CloudData,
    },
    {
        subheading: "Authentication",
        id: "authentication",
        dataSource: AuthData,
    },
    {
        subheading: "Hosting",
        id: "hosting",
        dataSource: HostingData,
    },
    {
        subheading: "API & API Testing",
        id: "api",
        dataSource: APIData,
    },
];

export default backend_data;