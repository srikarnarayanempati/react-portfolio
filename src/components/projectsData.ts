import atsImg from '../assets/ats preview.png';
import calorieImg from '../assets/calorie preview.png';
import weatherImg from '../assets/weather preview.png';
import truthseekersImg from '../assets/truthseekers preview.png';
import spotifyImg from '../assets/spotify preview.png';
import TrackerImg from '../assets/tracker preview.png';
import rockPaperScissorsImg from '../assets/rock-paper-scissors preview.png';
import portfolioImg from '../assets/portfolio preview.png';
import ValentinesImg from '../assets/valentine preview.png';
import UserImg from '../assets/username preview.png';
import lostImg from '../assets/lost preview.png';

export type Project = {
  title: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
  color: string;
};

const allProjectsData: Project[] = [
  {
    title: 'Lost & Found',
    description: 'A web application for students to find lost items on campus.',
    image: lostImg,
    tech: ['React', 'Vite', 'TailwindCSS', 'Javascript','GSAP'],
    category: 'Frontend',
    color: 'from-custom-orange to-custom-red',
    link: 'https://lost-and-found-things.vercel.app',
    github: 'https://github.com/srikarnarayanempati/lost-and-found'
  },
  {
    title: 'Username Generator',
    description: 'A web-based username generator built using Python , Flask and HTML , CSS .',
    image: UserImg,
    tech: ['Python', 'Flask', 'HTML', 'CSS','Google Fonts'],
    category: 'Python',
    color: 'from-indigo-600 to-blue-400',
    link: 'https://username-generator-nhlg.onrender.com/',
    github: 'https://github.com/srikarnarayanempati/Username-Generator'
  },
  {
    title: 'Calorie Calculator',
    description: 'A smart web app to calculate daily calorie needs and suggest foods accordingly.',
    image: calorieImg,
    tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    category: 'Frontend',
    color: 'from-indigo-500 to-purple-500',
    link: 'https://self-calorie-calculator.vercel.app/',
    github: 'https://github.com/srikarnarayanempati/Calorie-Calculator'
  },
  {
    title: 'ATS Score Generator',
    description: 'A frontend tool to check the ATS Score of user resumes against job descriptions.',
    image: atsImg,
    tech: ['HTML', 'CSS', 'JavaScript', 'Font Awesome','Bootstrap'],
    category: 'Frontend',
    color: 'from-custom-red to-custom-orange',
    link: 'https://ats-score-generator.vercel.app/',
    github: 'https://github.com/srikarnarayanempati/ats-score-generator'
  },
  {
    title: 'Personal Expense Tracker',
    description: 'A web app to track personal expenses and manage budgets.',
    image: TrackerImg,
    tech: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    category: 'Frontend',
    color: 'from-teal-400 to-lime-400',
    link: 'https://expense-tracker-six-bice.vercel.app/',
    github: 'https://github.com/srikarnarayanempati/expense-tracker'
  },
  {
    title: 'Weather App',
    description: 'A React-based weather app that fetches real-time, location-specific weather data.',
    image: weatherImg,
    tech: ['ReactJS', 'OpenWeather API', 'CSS', 'HTML'],
    category: 'Frontend',
    color: 'from-custom-blue to-custom-blue-accent',
    link: 'https://srikarnarayanempati.github.io/My-Weather-App/',
    github: 'https://github.com/srikarnarayanempati/My-Weather-App'
  },
  {
    title: 'Truth Seekers',
    description: 'A frontend platform where women share their stories. Made with Readdy.ai.',
    image: truthseekersImg,
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Readdy.ai'],
    category: 'Frontend',
    color: 'from-custom-pink to-custom-purple',
    link: 'https://truthseekers.vercel.app/',
    github: 'https://github.com/srikarnarayanempati/TruthSeekers'
  },
    {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills.',
    image: portfolioImg,
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','SplideJS'],
    category: 'Frontend',
    color: 'from-emerald-400 to-cyan-400',
    link: 'https://srikarempati-portfolio.vercel.app/',
    github: 'https://github.com/srikarnarayanempati/My-Portfolio'
  },
  {
    title: 'Spotify Clone',
    description: 'A music player UI closely resembling the Spotify interface design.',
    image: spotifyImg,
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'FontAwesome'],
    category: 'Frontend',
    color: 'from-custom-orange to-custom-red',
    link: 'https://spotify-homepage-zeta.vercel.app/',
    github: 'https://github.com/srikarnarayanempati/Spotify-Homepage'
  },
  {
    title: 'Rock Paper Scissors',
    description: 'A fun rock paper scissors game built with HTML, CSS, and JavaScript.',
    image: rockPaperScissorsImg,
    tech: ['HTML', 'CSS', 'JavaScript', 'Google Fonts'],
    category: 'Frontend',
    color: 'from-sky-400 to-indigo-500',
    link: 'https://rock-paper-scissor-game-zeta-sandy.vercel.app/',
    github: 'https://github.com/srikarnarayanempati/Rock-Paper-Scissor-Game'
  },
  {
    title: 'Valentines Proposal',
    description: 'A fun valentines proposal app built with HTML, CSS, and JavaScript.',
    image: ValentinesImg,
    tech: ['HTML', 'CSS', 'JavaScript', 'Google Fonts'],
    category: 'Frontend',
    color: 'from-indigo-600 to-fuchsia-500',
    link: 'https://valentines-gift-xi.vercel.app/',
    github: 'https://github.com/srikarnarayanempati/Valentines-Gift'
  }
];

export default allProjectsData;
