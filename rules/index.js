// Require rules
const possibleErrorsRules = require('./possible-errors');
const bestPracticesRules = require('./best-practices');
const variablesRules = require('./variables');
const stylisticRules = require('./stylistic');
const ecmascript6Rules = require('./ecmascript-6');

// Export all rules as unique object
module.exports = {
	...possibleErrorsRules,
	...bestPracticesRules,
	...variablesRules,
	...stylisticRules,
	...ecmascript6Rules,
};
