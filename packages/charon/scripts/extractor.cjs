const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor');
const path = require('path');
const apiExtractorJsonPath = path.join(__dirname, '../api-extractor.json');

const extractorConfig = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

const extractorResult = Extractor.invoke(extractorConfig, {
	localBuild: true,
	showVerboseMessages: true
});

if(extractorResult.succeeded) {
	console.log('success');
	process.exitCode = 0;
}else {
	console.log('error');
	process.exitCode = 1;
}