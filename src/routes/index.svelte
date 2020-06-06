<script>
  import Headline from './_components/Home/Headline.svelte'
  import SocialLinks from './_components/Home/SocialLinks.svelte'
  import Summary from './_components/Home/Summary.svelte'
  import ProjectList from './_components/Home/ProjectList.svelte'
  import { onMount } from 'svelte'

  let globalAnalytics

  onMount(async () => {
    const { analytics } = await import('../firebase.js')
    globalAnalytics = analytics
  })
</script>

<div class="container">
  <Headline />
  <SocialLinks globalAnalytics="{globalAnalytics}" />
  <Summary />

</div>

<ProjectList />

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 1rem;
  }
</style>
