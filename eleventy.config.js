const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPlugin(pluginWebc,{
		components: "src/_includes/webc/**/*.webc",
	});

	eleventyConfig.addWatchTarget("./src/css/*.css");
	eleventyConfig.addPassthroughCopy("./src/css/*.css");
	
	eleventyConfig.setServerOptions({
		// Default values are shown:
	
		// Whether the live reload snippet is used
		liveReload: true,
	
		// Whether DOM diffing updates are applied where possible instead of page reloads
		domDiff: true,
	
		// The starting port number
		// Will increment up to (configurable) 10 times if a port is already in use.
		port: 8080,
	
		// Additional files to watch that will trigger server updates
		// Accepts an Array of file paths or globs (passed to `chokidar.watch`).
		// Works great with a separate bundler writing files to your output folder.
		// e.g. `watch: ["_site/**/*.css"]`
		watch: ["_site/css/*.css"],
	
		// Show local network IP addresses for device testing
		showAllHosts: false,
	
		// Change the default file encoding for reading/serving files
		encoding: "utf-8",
	});

	return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};