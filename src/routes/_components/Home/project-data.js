export default function projectData() {
  return [
    {
      status: 'Published',
      name: 'Fest Travel Calendar',
      description: 'Digital calendar to keep track of Fest Travel events and take notes',
      image: {
        alt: 'Fest Travel Calendar app ScreenShot',
        name: 'Fest Travel Calendar',
        src: '../../../../project-images/fest-travel-calendar.webp',
      },
      techstack: ['TypeScript', 'NextJs', 'Firebase'],
      links: {
        release: {
          platformName: 'Web',
          url: 'https://fest-travel-calendar.vercel.app/',
        },
      },
    },
    {
      status: 'Published',
      name: 'Computer Store',
      description: 'MERN Stack E-Commerce App',
      image: {
        alt: 'Computer Store app screenshot',
        name: 'QuickPoll',
        src: '../../../../project-images/computer-store.webp',
      },
      techstack: ['React', 'NextJs', 'NestJs', 'MongoDB'],
      links: {
        github: 'https://github.com/alicanerdurmaz/computer-store',
        release: {
          platformName: 'Web',
          url: 'https://computer-store.vercel.app/',
        },
      },
    },
    {
      status: 'Published',
      name: 'Tv Series Chart',
      description: 'Data Visualization of Imdb Ratings.',
      image: {
        alt: 'Tv Series Chart,Vote app screenshot',
        name: 'QuickPoll',
        src: '../../../../project-images/tvserieschart.webp',
      },
      techstack: ['React', 'NextJs'],
      links: {
        github: 'https://github.com/alicanerdurmaz/tv-series-chart',
        release: {
          platformName: 'Web',
          url: 'https://tvserieschart.now.sh/',
        },
      },
    },
    {
      status: 'Published',
      name: 'QuickPoll',
      description: 'Fastest and easiest way to create real-time polls.',
      image: {
        alt: 'Quickpoll,Vote app screenshot',
        name: 'QuickPoll',
        src: '../../../../project-images/quickpoll.webp',
      },
      techstack: ['Svelte', 'Firebase'],
      links: {
        github: 'https://github.com/alicanerdurmaz/quick-poll',
        release: {
          platformName: 'Web',
          url: 'https://quickpoll.now.sh/',
        },
      },
    },
    {
      status: 'Demo',
      name: 'Firenote',
      description: 'Reliable, easy to use, fast and simple note-taking application.',
      image: {
        alt: 'Firenote,Note taking app screenshot',
        name: 'firenote',
        src: '../../../../project-images/firenote.webp',
      },
      techstack: ['React', 'Typescript', 'Firebase'],
      links: {
        github: 'https://github.com/alicanerdurmaz/react-firenote-demo',
        release: {
          platformName: 'Web',
          url: 'https://firenote.netlify.app/',
        },
      },
    },
    {
      name: 'Wstfp-gui',
      status: 'WIP',
      description: 'File transfer and instant messaging application over a local area network.',
      image: {
        alt: 'wsftp-gui,instant messaging and file share app screenshot',
        name: 'wsftp-gui',
        src: '../../../../project-images/wsftp-gui.webp',
      },
      techstack: ['React', 'Electron', 'Go'],
      links: {
        github: 'https://github.com/alicanerdurmaz/wsftp-gui',
      },
    },
  ]
}
