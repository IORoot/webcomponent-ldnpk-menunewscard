import './menunewscard.js';
import '../button/button.js';

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                  DEFINE THE STORY CONTROLS / PROPS / ETC                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

export default {
	title: 'LondonParkour/Cards/MenuNewsCard',
	component: '<ldnpk-menunewscard></ldnpk-menunewscard>',
	tags: ['autodocs'],

	// Docs Page Description
	parameters: {
		docs: {
			description: {
				component:
					'The LondonParkour MenunewsCard Component.',
			},
		},
	},

	// ╭─────────────────────────────────────────────────────╮
	// │                 ARGUMENTS (CONTROLS)                │
	// ╰─────────────────────────────────────────────────────╯
	argTypes: {

	}

};



// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                                  STORIES                                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝



// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                     Default Style                     │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Default = ({ }) => {

	let htmlString = /* html */`
	<style>
	
	</style>

	<div class="w-1/5 mr-auto">
		<ldnpk-menunewscard 
			title="Saturday Youth Class" 
			subtitle="10.30am @Canada Water"
			>

			<picture>
				<source 
					media="(max-width: 639px)" 
					srcset="https://londonparkour.com/wp-content/uploads/Essential/Cutouts/thumbnail/Kevin_Fly.png">
				<source 
					media="(min-width: 640px)" 
					srcset="https://londonparkour.com/wp-content/uploads/Essential/Cutouts/medium/Kevin_Fly.png">
				<source 
					media="(min-width: 768px)" 
					srcset="https://londonparkour.com/wp-content/uploads/Essential/Cutouts/large/Kevin_Fly.png">
				<source 
					media="(min-width: 1024px)" 
					srcset="https://londonparkour.com/wp-content/uploads/Essential/Cutouts/Kevin_Fly.png">
				<img class="
					object-scale-down 
					object-center
					h-full
					ls-is-cached
					lazyloaded
					"
					src="https://londonparkour.com/wp-content/uploads/Essential/Cutouts/Kevin_Fly.png" 
					alt="Kevin Flies towards the camera like a hero" 
					width="1280" 
					height="1280">
			</picture>


			<svg slot="glyph" role="img" class="w-full h-full">
				<use xlink:href="#glyph-classes"></use>
			</svg>

		</ldnpk-card>
	</div>

	`


	htmlString += /* html */`
		<svg xmlns="http://www.w3.org/2000/svg" style="width:0;height:0;visibility:hidden;">
			<symbol id="glyph-classes" viewBox="0 0 32 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<path d="M16 0L17.7778 1.83333L8.88889 11L17.7778 20.1667L16 22L5.33333 11L16 0ZM10.6667 0L12.4444 1.83333L3.55556 11L12.4444 20.1667L10.6667 22L0 11L10.6667 0ZM19.5556 3.66667L26.6667 11L19.5556 18.3333L17.7778 16.5L23.1111 11L17.7778 5.5L19.5556 3.66667ZM24.8889 3.66667L32 11L24.8889 18.3333L23.1111 16.5L28.4444 11L23.1111 5.5L24.8889 3.66667Z" />
			</symbol>
		</svg>
	`

	return htmlString;

};


// Change the argument defaults for this example
Default.args = {
	label: 'DEFAULT',
};

