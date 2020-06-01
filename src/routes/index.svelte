<script>
  import Headline from './_components/Home/Headline.svelte'
  import SocialLinks from './_components/Home/SocialLinks.svelte'
  import Summary from './_components/Home/Summary.svelte'
  import ProjectList from './_components/Home/ProjectList.svelte'
</script>

<div class="container">
  <Headline />
  <SocialLinks />
  <Summary />
</div>

<ProjectList />

<style>
  .container {
    padding: 0 0.25rem;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 1rem;
  }
</style>
