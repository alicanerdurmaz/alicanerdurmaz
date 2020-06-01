<script>
  import ProjectItem from './ProjectItem.svelte'
  import ProjectData from './project-data.js'
  let projectData = ProjectData()
</script>

<div>
  <ul>
    {#each projectData as project}
      <ProjectItem project="{project}" />
    {/each}
  </ul>
</div>

<style>
  div {
    margin-top: 3rem;
  }
  ul {
    max-width: 1400px;
    margin: 0rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    padding: 1rem;
    gap: 3rem;
  }
</style>
