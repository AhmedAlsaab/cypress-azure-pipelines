# cypress-azure-pipelines
Using Azure Pipelines to drive Cypress config. 

## About

This repo is an example of some of the setup required to run a manual Azure CI build which executes Cypress tests based on the config variables provided when the build was initiated. 

The variables provided through the Azure user interface are passed down to the Cypress config as Cypress environment variables. Cypress will use these variables to determine which suite to run and on which environment.

## Why?

Instead of needing a PR to run your tests on the pipeline, you could setup your own pipeline which runs tests using selected suites/projects and on the desired environments with just a few clicks.

## Things to Note
- The local-config.json file has been pushed to this branch but should be .gitignored as it should contain your local config to drive the Cypress tests on your local machine, not on the pipeline.
- This is for non-automated PR builds as it needs a manual trigger from Azure with a selection of variables and branch.
- The code in this repository is merely a demonstration and much of it needs changing based on your config and variables.


https://imgur.com/a/YQHCkjf
