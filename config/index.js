var defaultConfig = require('./default.json')
var development = require('./development.json')
var production = require('./production.json')

var currentEnvironmentConfig;
if(process.env.NODE_ENV=='production')
{
  currentEnvironmentConfig=production
}
else if(process.env.NODE_ENV=='development')
{
  currentEnvironmentConfig=development
}
else
{
  currentEnvironmentConfig=defaultConfig
}

module.exports= currentEnvironmentConfig;
