const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
export const projects = [
  {
    title: 'Online Library System',
    description: "This is an application for a library system made from the ground up in a team of six developers. Both the database and the frontend of this application are deployed on Heroku.",
    image: prefix + '/images/library.gif',
    tags: ['Java', 'Spring', 'PostgreSQL', 'Vue.js', 'RESTful API'],
    source: 'https://drive.google.com/drive/folders/1fVlXdNt0x6iw_aFhS3PptrBGdrpdDPFC?usp=sharing',
    visit: 'https://onlinelibrarysystem-frontend.herokuapp.com/#/',
    id: 0,
  },
  {
    title: 'Auto Web Navigation and Scraping',
    description: "Scripts used to automate tasks that I would do every day. The demo shown is an example of one of them. It retrieves the different colors of an item available to buy online, and the number of seats available for specific sections of a course from McGill's website.",
    image: prefix +'/images/selenium_short.gif',
    tags: ['Python', 'Selenium'],
    source: 'https://github.com/PhilippeShi/Auto-web-navigation',
    visit: '',
    id: 1,
  },
  {
    title: 'Medical Image Analysis and Deep Learning',
    description: 'I participated in a hackathon that is about image analysis in the medical field. The goal was to implement semantic segmentation of multi-layered brain CT scans to isolate Alpha Tau seeds (symptoms of brain cancer). The project received a "Rising Star" honourable mention.',
    image: prefix + '/images/hackathon.png',
    tags: ['Python', 'Jupyter', 'Keras'],
    source: '',
    visit: 'https://devpost.com/software/we-have-an-idea',
    id: 5,
  },
  {
    title: 'Object Detection',
    description: "A simple object detection script implemented with a pre-trained model made by Darknet.",
    image: prefix +'/images/opencv.png',
    tags: ['Python','OpenCV','YOLO v3'],
    source: 'https://github.com/PhilippeShi/Object-Detection',
    visit: '',
    id: 3,
  },
  {
    title: 'Sudoku Solver',
    description: "Wrote an algorithm that can solve a sudoku puzzle of any grid size. Optimized excecution time by fetching and sloving cells that have the least number of possibilities. There is also an option to include the Knight, King, and/or Queen rule to add more contraints to the possible solutions.",
    image: prefix +'/images/sudoku.png',
    tags: ['Java'],
    source: 'https://github.com/PhilippeShi/Sudoku-Solver',
    visit: '',
    id: 2,
  },
  {
    title: 'Pong Game',
    description: "Pong game player versus computer. The ball's behavior, as well as the difficulty, can be ajusted according to the player's preferences. In this demo, real-life physics are used for the ball's motion and the ball's speed increases when hitting a paddle.",
    image: prefix + '/images/pong.gif',
    tags: ['Java', 'ACM package'],
    source: 'https://drive.google.com/drive/folders/1ZP9YyHURgd9VEp4Zxyy9el5RCKfWEmI4?usp=sharing',
    visit: '',
    id: 4,
  },
  // {
  //   title: 'Gym Rep Counter',
  //   description: "",
  //   image: prefix + '',
  //   tags: ['Python', 'OpenCV',],
  //   source: '',
  //   visit: '',
  //   id: 5,
  // },
];

export const TimeLineData = [
  { year: 2019, text: 'My first "Hello World!" script written with Python and learned about Object-Oriented programming.', },
  { year: 2020, text: 'Enrolled in the software engineering program at McGill. Got to learn about the core principles of software development.', },
  { year: 2021, text: 'Introduced to Machine Learning and learned how to build and deploy web applications from the ground-up.', },
  { year: 2022, text: "I'm excited too see what I can accomplish this year!! 😀" }
];
