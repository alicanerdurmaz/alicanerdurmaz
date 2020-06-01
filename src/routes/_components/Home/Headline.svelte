<script>
  import HandWave from '../../../SvgIcons/HandWave.svelte'
</script>

<div class="wave">
  <HandWave />
</div>
<div class="headline">
  <p>Hi, I'm a Computer Science Student</p>
  <p>Living in Izmir, Turkey</p>
  <p>I love writing software to solve problems</p>
</div>

<style>
  .wave {
    text-align: center;
    display: inline-block;
    height: 3rem;
    width: 100%;
    animation: wave 2.5s infinite;
  }
  p {
    text-align: center;
    font-weight: 500;
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }
  @media (min-width: 800px) {
    p {
      letter-spacing: 1.1px;
    }
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
