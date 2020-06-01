<script>
  export let project
</script>

<li class="project-container">
  <div class="image-container">
    <img src="{project.image.src}" alt="{project.image.alt}" />
  </div>
  <h1>{project.name}</h1>
  <p>{project.description}</p>
  <ul class="techstack">
    {#each project.techstack as tech}
      <li class="tech">
        <span>{tech}</span>
      </li>
    {/each}
  </ul>
  <div class="project-links">
    <div class="source-code">
      <a href="{project.links.github}" target="_blank" rel="noopener noreferrer">
        <span>Github</span>
      </a>
    </div>
    {#if project.links.release}
      <div class="app">
        <a href="{project.links.release.url}" target="_blank" rel="noopener noreferrer">
          <span>{project.links.release.platformName}</span>
        </a>
      </div>
    {/if}
  </div>
</li>

<style>
  .project-container {
    color: #ffffff;
    margin: 0;
    border: 0;
    vertical-align: baseline;
    border-top: 1px solid #0f0f0f2b;
    height: 100%;
    padding: 1rem;
    padding-bottom: 0;
    background-color: var(--background-secondary);
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.16),
      0 8px 8px rgba(0, 0, 0, 0.2);
  }
  .image-container {
    border: 1px solid black;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  h1 {
    font-size: 1.5rem;
    color: #ffffff;
    fill: #ffffff;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-weight: 500;
    text-align: center;
    margin: 0.5rem 0;
  }
  p {
    color: #efefef;
    text-align: start;
    line-height: 1.1;
  }
  .techstack {
    color: #ffffff;
    margin: 0.5rem 0;
    display: flex;
    justify-content: flex-start;
  }
  .tech {
    background-color: var(--background);
    font-size: 12px;
    font-weight: 500;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    margin-right: 0.5rem;
  }

  .project-links {
    border-top: 2px solid var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }
  .source-code {
    margin: auto;
  }
  .app {
    margin: auto;
  }
  a {
    text-decoration: none;
  }
</style>
