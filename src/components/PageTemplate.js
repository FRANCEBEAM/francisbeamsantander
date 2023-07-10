
import { MdViewQuilt, MdDesktopWindows } from 'react-icons/md';
import { AiFillCode } from 'react-icons/ai';
import { RiCodeBoxFill } from 'react-icons/ri';


export const aboutContent = [
    {
        parag1: "Hi, my name is Francis Beam Santander. I am fresh graduate of Bulacan State University - Sarmiento Campus, holding a Bachelor's degree in Information Technology . Throughout my academic journey, I have cultivated a deep passion for front-end development and UX/UI design.",
        parag2: "I enjoy assisting people in building amazing frontends with a touch of backend development to incorporate essential functionalities. I also have a passion for designing unique products for websites, enabling businesses to enhance their strategic approaches. I am excited to apply my skills to various projects.",
    }
]

export const frontend = [
    {
        tech: "./assets/html.svg",
        alt: "HTML",
    },
    {
        tech: "./assets/css.svg",
        alt: "CSS",
    },
    {
        tech: "./assets/javascript.svg",
        alt: "JavaScript",
    },
    {
        tech: "./assets/sass.svg",
        alt: "Sass",
    },
    {
        tech: "./assets/jquery.svg",
        alt: "JQuery"
    },
    {
        tech: "./assets/bootstrap.svg",
        alt: "Bootstrap",
    },
    {
        tech: "./assets/react.svg",
        alt: "React",
    },
    {
        tech: "./assets/tailwind.svg",
        alt: "Tailwind",
    },
]

export const backend = [
    {
        tech: "./assets/php.svg",
        alt: "PHP"
    },
    {
        tech: "./assets/mysql.svg",
        alt: "MySQL"
    },
]

export const tools = [
    {
        tech: "./assets/figma.svg",
        alt: "Figma"
    },
    {
        tech: "./assets/adobexd.svg",
        alt: "Adobe XD"
    },
    {
        tech: "./assets/git.svg",
        alt: "Git"
    },
    {
        tech: "./assets/github.svg",
        alt: "GitHUB"
    },
]

export const projects = [
    {
        id: 1,
        title: 'RJ Avacena Hardware store',
        sub: [
            'E-commerce',
            'IMS',
            'Business Store',
            ],
        technologies: [
            'PHP',
            'JavaScript',
            'Sass',
            'Material Design'
        ],
        img: './assets/project1.jpg',
        desc: 'Developed a fullstack web application using PHP, JavaScript and Sass from scratch. This web application are integrated by the backend using MySQL database. The user should create a account with have features of email verifications and nice form validation. After that, they can freely order or add to cart some products that are available on online and has a payment method of walk-in or order which will label on our database.',
        live: 'https://testwebsite0528.000webhostapp.com/',
        git: 'https://github.com/FRANCEBEAM/eCommerce-Develop-Update-'
    },
    {
        id: 2,
        title: 'Netflix Clone React',
        sub: [
            'Movie',
            'Streaming Service'
        ],
        technologies: [
            'React ',
            'Tailwind CSS '
        ],
        img: './assets/project2.jpg',
        desc: 'My first React clone project uses the Axios library to fetch data from an API and make specific requests. I am experimenting and learning how to use useEffect and useState, which drive our web application and ensure smooth API integration.',
        live: 'https://francebeam.github.io/netflix-clone-reactjs/',
        git: 'https://github.com/FRANCEBEAM/netflix-clone-reactjs'
    },
    {
        id: 3,
        title: 'Frogman Ecommerce React',
        sub: [
            'Ecommerce',
            'Gaming',
            'Merch Shop'
        ],
        technologies: [
            'React ',
            'Tailwind ',
            'Node js '
        ],
        img: './assets/project3.jpg',
        desc: 'I developed a React E-commerce project from scratch. It includes products such as merchandise, stickers, patches, and game miniatures. This project follows the concept of an online store, although the backend is still a work in progress. Currently, it is only a frontend implementation.',
        live: 'https://francebeam.github.io/frogman-ecommerce-react/',
        git: 'https://github.com/FRANCEBEAM/frogman-ecommerce-react'
    }
]

export const otherProject = [
    {
        id: 1,
        title: 'Drum pad App',
        description: 'A high-quality drum pad sound that I obtained from assets in FL Studio 12. The drums sound quite realistic and can be used for jamming with friends and enjoying the creation of a realistic band sound that will excite the user',
        technologies: ['HTML ', 'CSS ', 'JavaScript '],
        gitHubLink: 'https://github.com/FRANCEBEAM/Drumpad-App-JS',
        hostLink: 'https://francebeam.github.io/Drumpad-App-JS/'
    },
    {
        id: 2,
        title: 'Todo List App',
        description: 'A simple and fancy to-do list app where users can add tasks, delete them, and mark tasks as done. I developed this app to practice my knowledge of vanilla JavaScript and the DOM concept, which I find really cool.',
        technologies: ['HTML ', 'CSS ', 'JavaScript '],
        gitHubLink: 'https://github.com/FRANCEBEAM/Todo-App-JS',
        hostLink: 'https://francebeam.github.io/Todo-App-JS/'
    },
    {
        id: 3,
        title: 'Form Validation Community',
        description: 'Creating form validation from scratch, which involves the use of RegEx and DOM. It follows standard validation practices that ensure the UI behaves according to the user\'s input, capturing any key input accurately.',
        technologies: ['HTML ', 'CSS ', 'JavaScript '],
        gitHubLink: 'https://github.com/FRANCEBEAM/Form-Validation-Community',
        hostLink: 'https://francebeam.github.io/Form-Validation-Community/'
    },
]

export const workContent = [
    {
        id: 1,
        icon: <MdViewQuilt size={70} />,
        work: 'UI/UX DESIGN',
        description: 'I crafting and creating visually appealing and immersive user interfaces. I specialize in implementing my own designs, focusing on style layouts, font choices, and logo integration. I have a deep appreciation for art and stylish aesthetics, which I incorporate into my UI designs to create engaging and enjoyable user experiences.'
    },
    {
        id: 2,
        icon: <RiCodeBoxFill size={70} />,
        work: 'FRONTEND DEVELOPMENT',
        description: 'I build responsive websites that adapt seamlessly to various screen sizes. I am proficient in working with popular frontend framework and libraries, including Bootstrap, Tailwind CSS, jQuery, and React JS. These tools allow me to develop and enhance the functionality of web applications while ensuring a smooth and intuitive user experience.'
    },
    {
        id: 3,
        icon: <AiFillCode size={70} />,
        work: 'BACKEND DEVELOPMENT',
        description: 'I’m probably not the typical backend dev, while my focus lies in backend development, I also possess a strong understanding of frontend principles, which allows me to contribute valuable insights to the overall development process. I can still build website using PHP for web applications that meet the requirements of the functionality behind the website. '
    },
]

export const uiux = [
    {
        id: 1,
        img: "./assets/hpbanner.jpg",
        alt: "Hyperview Music Studio",
    },
    {
        id: 2,
        img: "./assets/mohbanner.jpg",
        alt: "Medal of Honor Landing Page",
    },
    {
        id: 3,
        img: "./assets/transitbanner.jpg",
        alt: "Transit Ease Bus App",
    },
    {
        id: 4,
        img: "./assets/basicbanner.jpg",
        alt: "BASIC Clothing E-Commerce",
    }
]


export const archive = [
    {
        id: 1,
        img: './assets/drumpad.jpg',
        title: 'Drum pad App',
        description: 'A high-quality drum pad sound that I obtained from assets in FL Studio 12. The drums sound quite realistic and can be used for jamming with friends and enjoying the creation of a realistic band sound that will excite the user',
        technologies: ['HTML ', 'CSS ', 'JavaScript '],
        gitHubLink: 'https://github.com/FRANCEBEAM/Drumpad-App-JS',
        host: 'https://francebeam.github.io/Drumpad-App-JS/'
    },
    {
        id: 2,
        img: './assets/todoapp.jpg',
        title: 'Todo List App',
        description: 'A simple and fancy to-do list app where users can add tasks, delete them, and mark tasks as done. I developed this app to practice my knowledge of vanilla JavaScript and the DOM concept, which I find really cool.',
        technologies: ['HTML ', 'CSS ', 'JavaScript '],
        gitHubLink: 'https://github.com/FRANCEBEAM/Todo-App-JS',
        host: 'https://francebeam.github.io/Todo-App-JS/'
    },
    {
        id: 3,
        img: './assets/formvalidation.jpg',
        title: 'Form Validation Community',
        description: 'Creating form validation from scratch, which involves the use of RegEx and DOM. It follows standard validation practices that ensure the UI behaves according to the user\'s input, capturing any key input accurately.',
        technologies: ['HTML ', 'CSS ', 'JavaScript '],
        gitHubLink: 'https://github.com/FRANCEBEAM/Form-Validation-Community',
        host: 'https://francebeam.github.io/Form-Validation-Community/'
    },
]

export const uiuxproject = [
    {
        id: 1,
        title: 'Hyperview Music Studio',
        type: 'UI/UX Design, Landing Page',
        year: '2023',
        overview: 'The goal of this design project is to create a visually captivating and user-friendly website for Hyperview Music Studio Record. The website will serve as a digital platform for musicians and bands to explore and engage with the studio\'s services, including music recording, mixing, and mastering.',
        palette: '../assets/hppalette.jpg',
        typography: '../assets/hptypo.jpg',
        outcome: ['../assets/hpoutcome-1.jpg',
                 '../assets/hpoutcome-2.jpg',],
        wireFrame: '../assets/hpwireframe.png',
        finalOutcome: '../assets/hpfinaloutcome.png',
        banner: '../assets/hpbanner.jpg',
        cover: '../assets/hpcover.jpg',
        alt: 'UIUX Project 1',
    },
    {
        id: 2,
        title: 'Medal of Honor',
        type: 'UI/UX Design, Landing Page, Gaming Website',
        year: '2022',
        overview: 'The objective of this design project is to create an immersive and visually captivating website for the Medal of Honor gaming first-person shooter (FPS) franchise. The website will serve as a central hub for fans and players to engage with the game, explore its features, and connect with the community.',
        palette: '../assets/mohpalette.jpg',
        typography: '../assets/mohtypography.jpg',
        outcome: ['../assets/mohoutcome-1.jpg',
                 '../assets/mohoutcome-2.jpg',],
        wireFrame: '../assets/mohwireframe.png',
        finalOutcome: '../assets/mohfinaloutcome.png',
        banner: '../assets/mohbanner.jpg',
        cover: '../assets/mohcover.jpg',
        alt: 'Medal of Honor',
    },
    {
        id: 3,
        title: 'Transit Ease Bus App',
        type: 'UI/UX Design, Mobile App',
        year: '2023',
        overview: 'The goal of this design project is to create a user-friendly and intuitive mobile app for TransitEase, a comprehensive and efficient bus transportation service. The TransitEase Bus App will provide users with a seamless and convenient way to navigate bus routes, access real-time bus arrival information, plan their journeys, and stay informed about service updates',
        palette: '../assets/transitpalette.jpg',
        typography: '../assets/transittypo.jpg',
        outcome: ['../assets/transitoutcome-1.jpg',
                 '../assets/transitoutcome-2.jpg',],
        wireFrame: '../assets/transitwireframe.jpg',
        finalOutcome: '../assets/transitfinaloutcome.png',
        banner: '../assets/transitbanner.jpg',
        cover: '../assets/transitcover.jpg',
        alt: 'Transit Ease Bus App',
    },
    {
        id: 4,
        title: 'BASIC Clothing E-Commerce',
        type: 'UI/UX Design, Clothing, E-Commerce',
        year: '2023',
        overview: 'The objective of this design project is to create a visually appealing and user-friendly e-commerce website for BASIC Clothing, a fashion brand that offers a wide range of stylish and high-quality clothing for men and women. The BASIC Clothing website will serve as an online platform for customers to browse and purchase clothing items conveniently.',
        palette: '../assets/basicpalette.jpg',
        typography: '../assets/basictypo.jpg',
        outcome: ['../assets/basicoutcome-1.jpg',
                 '../assets/basicoutcome-2.jpg',],
        finalOutcome: '../assets/basicfinaloutcome.png',
        wireFrame: '../assets/basicwireframe1.png',
        banner: '../assets/basicbanner.jpg',
        cover: '../assets/basiccover.jpg',
        alt: 'BASIC Clothing E-Commerce',
    },
    {
        id: 5,
        title: 'Food Deliver and Dating App',
        type: 'UI/UX Design, Mobile App',
        year: '2023',
        overview: 'The goal of this design project is to create a unique and user-friendly mobile app that combines the convenience of food delivery services with the excitement of meeting new people through a dating platform. This innovative app aims to provide users with a seamless and enjoyable experience, allowing them to discover local restaurants, order food, and connect with potential romantic interests.',
        palette: '../assets/foodpalette.jpg',
        typography: '../assets/foodtypo.jpg',
        outcome: ['../assets/foodoutcome-1.jpg',
                 '../assets/foodoutcome-2.jpg',],
        finalOutcome: '../assets/foodfinaloutcome.png',
        wireFrame: '../assets/foodwireframe.png',
        banner: '../assets/foodbanner.jpg',
        cover: '../assets/foodcover.jpg',
        alt: 'Food Deliver and Meal Dating App',
    },
]