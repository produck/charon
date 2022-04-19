const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor');
const path = require('path');
// const { execFile } = require('child_process');
const apiExtractorJsonPath = path.join(__dirname, '../api-extractor.json');

const extractorConfig = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

const extractorResult = Extractor.invoke(extractorConfig, {
	localBuild: true,
	showVerboseMessages: true
});

if(extractorResult.succeeded) {
	console.log('success');

	// const re = execFile('npx', [
	// 	'api-documenter',
	// 	'markdown',
	// 	'-i', 'scripts/temp',
	// 	'-o', 'scripts/charon'
	// ]);

	// re.stdout.on('data', data => console.log(data.toString()));
	// re.stderr.on('data', data => console.error(data.toString()));

	process.exitCode = 0;
}else {
	console.log('error');
	process.exitCode = 1;
}