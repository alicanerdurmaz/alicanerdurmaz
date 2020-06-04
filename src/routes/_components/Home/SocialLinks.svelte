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
  <a href="https://www.linkedin.com/in/alicanerdurmaz/" title="Linkedin" rel="noopener noreferrer">
    <LinkedinSvg />
  </a>
  <a href="mailto:alicanerdurmaz@gmail.com" title="alicanerdurmaz@gmail.com">
    <EmailSvg />
  </a>
  <a
    href="../../../../alican-erdurmaz-resume.pdf"
    title="View PDF Resume"
    id="resume"
    class="link-resume"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>Resume</span>
  </a>
</nav>

<style>
  .social-links-container {
    max-width: 360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
  }

  :global(.icon-social) {
    transition: all 60ms ease;
    height: 32px;
    fill: #ffffff8e;
  }
  :global(.icon-social):hover {
    fill: #ffffff;
    transform: scale(1.2);
  }

  .link-resume {
    transition: all 60ms ease;
    font-size: 1rem;
    font-weight: 500;
    border: 0;
    vertical-align: baseline;
    text-decoration: none;
    width: max-content;
    height: max-content;
    padding: 4px 4px;
    background: #ffffff8e;
    border-radius: 4px;
    margin-bottom: 2px;
    color: #202124;
  }
  .link-resume:hover {
    background: #ffffff;
    transform: scale(1.2);
  }
  a {
    cursor: pointer;
    user-select: none;
  }
</style>
