<script>
	import successkid from 'images/sksum.jpg';


</script>
<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
		color: yellow
	}
	th {
		color: mediumseagreen;
	}
	h2 {
		font-size: 1.1em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	#sksum {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}


	table {
		display: block;
  		max-width: 90%;
		width:90%;
		height:50%;
	}
	td {
		width: 33%;
		text-align: center;
		align-content: flex-start;
	}

	.transparent {
		background-color: rgba(255, 255, 255, 0);;
	}
	#img {
		display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;		width:25%;
		height:25%;
	}

	h2 {
		text-align: center;
	}
</style>

<svelte:head>
	<title>sksum</title>
</svelte:head>
<section class = "transparent">
<h2>Hi <span>&#128075;</span> My name is Saksham Mrig (sksum), I am a 2nd year CSAM undergraduate, I am an enthusiastic young developer who can google like a pro. </h2>
	<center>


		<table>
			<tr>
				<th>Developer</th>
				<th>GSOC 20</th>
				<th>CourseWork</th>
			</tr>
			<tr>
				<td>I have been tinkering with multiple software stacks for some time now and I have gained some essential skills in a few of them. For Most of my projects I tend to use <b>React, Sapper, Flask, Python, MERN</b> .But recently I have been working with Raspberry Pis, Rust, Typescript as well</td>
				<td>I was part of the <b>2020 GSOC program </b>, working with SugarLabs. We Resolved about <b>72 issues</b> in MusicBlocks along with major enhancements: Integrated USB MIDI
					input, PitchAnalyser (Audio to Pitch converter), and also improved the in-app search results.</td>
				<td>Some Course Projects that I did:<br /> 
					<b> IMDB </b>client and backend database  implementation 
					<b> ColorSwitch </b>game clone, <b>Eye Tracking based accident prevention system</b> etc. 
				</td>
			</tr>
		</table>
	</center>

	<br /> <hr /><br />
	<div id ="img">




		<img id = "sksum"alt="SKSUM" src="{successkid}" >
		<center>
			<a href="mailto: saksham19385@iiitd.ac.in">
				<img alt="Email" height ="30px" src="/email.png" >
			</a>
			<a href="https://github.com/sksum">
				<img alt="Github" height ="30px" src="/github.png" >
			</a>
			<a href = "https://www.linkedin.com/in/saksham-mrig-b772851a3/" >
				<img alt="Linked In" height ="30px" src="/linkedin.png" >
			</a>
			<a href = "https://twitter.com/MrigSaksham">
				<img alt="Twitter" height ="30px" src="/twitter.png" >
			</a>
		</center>
	</div>
</section>
