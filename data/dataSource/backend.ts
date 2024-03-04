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
    }
];

export default backend_data;