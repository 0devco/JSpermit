const sonata = interval => new Promise((deliver, renege) => {
	try {
		setTimeout(() => {
			deliver(
				new Date().getTime()
			)
		}, interval)
	} catch (exception) {
		renege(
			exception.message
		)
	}
})
module.exports = interval => {
	try {
		return require('deasync-promise')(
			sonata(interval)
		)
	} catch (notAsync) {
		require('child_process').execSync(
			`"${process.execPath}"` + " -e \"setTimeout(function () { return true; }, " + interval + ");\""
		)
		return null
	}
}
