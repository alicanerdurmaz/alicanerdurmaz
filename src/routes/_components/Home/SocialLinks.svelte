<script>
  import GithubSvg from '../../../SvgIcons/GithubSvg.svelte'
  import CodepenSvg from '../../../SvgIcons/CodepenSvg.svelte'
  import TwitterSvg from '../../../SvgIcons/TwitterSvg.svelte'
  import LinkedinSvg from '../../../SvgIcons/LinkedinSvg.svelte'
  import EmailSvg from '../../../SvgIcons/EmailSvg.svelte'
</script>

<nav class="social-links-container">
  <a href="https://github.com/alicanerdurmaz" target="_blank" title="Github" rel="noopener noreferrer">
    <GithubSvg />
  </a>
  <a href="https://twitter.com/alicanerdurmazz" target="_blank" title="Twitter" rel="noopener noreferrer">
    <TwitterSvg />
  </a>
  <a href="https://codepen.io/AlicanErdurmaz/pens/public" target="_blank" title="Codepen" rel="noopener noreferrer">
    <CodepenSvg />
  </a>
  <a href="https://www.linkedin.com/in/alicanerdurmaz/" target="_blank" title="Linkedin" rel="noopener noreferrer">
    <LinkedinSvg />
  </a>
  <a href="mailto:alicanerdurmaz@gmail.com" title="alicanerdurmaz@gmail.com">
    <EmailSvg />
  </a>
  <a
    href="https://github.com/alicanerdurmaz"
    target="_blank"
    title="View PDF Resume"
    id="resume"
    class="link-resume"
    rel="noopener noreferrer"
  >
    <span>Resume</span>
  </a>
</nav>

<style>
  .social-links-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
  }

  :global(.icon-social) {
    height: 32px;
    fill: #ffffff8e;
  }

  .link-resume {
    font-size: 1.225rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    line-height: 1;
    border: 0;
    vertical-align: baseline;
    text-decoration: none;
    width: max-content;
    height: max-content;
    padding: 5px 4px;
    background: #ffffff8e;
    border-radius: 0.3rem;
    color: #202124;
  }
  a {
    margin: 0 1rem;
    cursor: pointer;
    user-select: none;
  }
</style>
