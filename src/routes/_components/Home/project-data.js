export default function projectData() {
  return [
    {
      status: 'Demo',
      name: 'QuickPoll',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices dui ac ex semper tempor. Donec lacinia pulvinar leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
      image: {
        alt: 'Quickpoll,Vote app screenshot',
        name: 'QuickPoll',
        src: '../../../../project-images/quickpoll.png',
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
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices dui ac ex semper tempor. Donec lacinia pulvinar leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
      image: {
        alt: 'Firenote,Note taking app screenshot',
        name: 'firenote',
        src: '../../../../project-images/firenote.png',
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
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices dui ac ex semper tempor. Donec lacinia pulvinar leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
      image: {
        alt: 'wsftp-gui,instant messaging and file share app screenshot',
        name: 'wsftp-gui',
        src: '../../../../project-images/wsftp-gui.png',
      },
      techstack: ['React', 'Electron', 'Go'],
      links: {
        github: 'https://github.com/alicanerdurmaz/wsftp-gui',
      },
    },
    {
      status: 'Published',
      name: 'Memory Game',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices dui ac ex semper tempor. Donec lacinia pulvinar leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
      image: {
        alt: 'memory game,in game screenshot',
        name: 'memory-game',
        src: '.../../../../project-images/memory-game.png',
      },
      techstack: ['Unity', 'C#'],
      links: {
        github: 'https://github.com/alicanerdurmaz/MemoryGame-MadeWithUnity',
        release: {
          platformName: 'Google Play',
          url: 'https://play.google.com/store/apps/details?id=com.AlicanErdurmaz.MemoryGame',
        },
      },
    },
  ]
}
