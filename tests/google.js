
module.exports = {
	"@tags": ["google"],
	"google advanced search elon musk": (browser) => {
		const mainQueryInputSelector = "input[name=as_q]"
		const languageDropDownOpenerSelector = "#lr_button"
		const languageDropDownValueSelector = ".goog-menuitem[value=lang_it]"
		const mainQuery = "Elon Musk"
		const screenshotDir = "tests_output/google.png"
		browser
		.url("https://google.com/advanced_search")
		.setValue(mainQueryInputSelector, mainQuery)
		.saveScreenshot("tests_output/google.png")
		.click(languageDropDownOpenerSelector)
		.click(languageDropDownValueSelector)
		.saveScreenshot(screenshotDir)

	}
}