<script lang="ts">
	import hero from '$lib/assets/images/hero.jpg';
	import gallery from '$lib/assets/images/gallery.png';
	import quiz from '$lib/assets/images/quiz.png';
	import { base } from '$app/paths';
</script>

<section class="hero" style="background-image: url({hero});">
	<div class="overlay">
		<h1>Welcome to Pawland</h1>
		<p>Discover your perfect pet!</p>
		<!-- <button>Get Started</button> -->
		<a href="{base}/gallery/">Get Started</a>
	</div>
</section>

<div id="container">
	<section class="hero" style="background-image: url({gallery});">
		<div class="overlay">
			<h1>Discover Cats</h1>
			<!-- <button>Get Started</button> -->
			<a href="{base}/gallery/">Discover Now</a>
		</div>
	</section>
	<section class="hero" style="background-image: url({quiz});">
		<div class="overlay">
			<h1>Test your knowledge</h1>
			<!-- <button>Get Started</button> -->
			<a href="{base}/quiz/">Test Now</a>
		</div>
	</section>
</div>

<style>
	.hero {
		position: relative;
		width: 100%;
		height: 80vh;
		background-size: cover;
		background-position: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}

	.overlay {
		text-align: center;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 2rem;
		border-radius: 1rem;
	}

	a {
		margin-top: 3rem;
		padding: 0.8rem 1.5rem;
		background-color: #ff6f61;
		border: none;
		border-radius: 0.5rem;
		color: white;
		cursor: pointer;
		font-size: 1rem;
		text-decoration: none;
	}

	a:hover {
		background-color: #ff4c3b;
	}

	#container {
		max-width: 1000px;
		margin: 15rem auto;

		section {
			margin: 15rem auto;
		}
	}
</style>
