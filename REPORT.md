# Documenso SDK Generator – Developer Experience Report

## Overview

For this mini task, I selected the Documenso v2 API and used the Voxgig SDK Generator to generate an open-source TypeScript SDK.

I selected Documenso because it was not present in the Voxgig open-source SDK catalogue, it provides an OpenAPI specification, and it supports API authentication, which allowed me to perform a live test.

**Human work time: 28 minutes**

## Environment

- Operating system: Windows
- Node.js: v22.13.0
- npm: v11.0.0
- Voxgig create-sdkgen: 0.28.0
- SDK target: TypeScript
- API definition: Documenso v2 OpenAPI JSON

## Setup

I downloaded the Documenso v2 OpenAPI specification and used it as the input definition for the Voxgig SDK generator.

The initial project structure was created successfully, but the automatic dependency installation failed on Windows with:

`Failed to start npm: spawn npm ENOENT`

Running `npm install` manually inside the `.sdk` directory worked successfully.

## Node.js warnings

During installation, several dependencies produced `EBADENGINE` warnings because they declare Node.js >=24 as a requirement, while my environment was running Node.js 22.13.0.

Despite the warnings, dependency installation completed successfully.

## Model path issue

The first generation attempt failed because some generated Aontu imports were not resolving relative to the model directory.

For example:

`@"api/api-info.aontu"`

failed even though the file existed inside:

`model/api/api-info.aontu`

Changing the internal import to an explicitly relative path:

`@"./api/api-info.aontu"`

resolved that issue.

The same pattern affected the entity, feature, target, flow and test model imports, so I changed those generated internal references to explicitly relative paths as well.

After these changes, the API definition was processed successfully.

The generator identified:

- 13 entities
- 89 API paths
- 89 operations

## TypeScript target

Because the initial project creation stopped during dependency installation, the TypeScript target had not been fully registered.

I added it with:

`npx voxgig-sdkgen target add ts`

After resolving a local `.jostraca` path conflict, the target was added successfully and the generator produced the TypeScript SDK.

The generated SDK contains entities for areas including:

- Documents
- Document fields
- Document recipients
- Envelopes
- Envelope attachments and recipients
- Folders
- Templates
- Template fields and recipients

## Windows build experience

The generated TypeScript SDK uses this build command:

`rm -rf dist dist-test && tsc --build src test`

This does not run directly in Windows Command Prompt because `rm` is a Unix command.

I used the Windows equivalents to remove the build folders and then ran:

`npx tsc --build src test`

The SDK compiled successfully.

A cross-platform cleanup command would improve the Windows developer experience.

## Tests

I ran the generated test suite after compilation.

Results:

- Tests: 296
- Passed: 295
- Failed: 0
- Skipped: 1

The generated README and reference examples also executed successfully in test mode. :chatgpt-content-reference{index="0"}

## Live API test

I created a Documenso API token and supplied it through the `DOCUMENSO2_APIKEY` environment variable.

I instantiated the generated SDK and performed a real request using:

`client.Document().list()`

The request completed successfully and returned:

`Documents returned: 0`

`[]`

This was expected because the Documenso account did not contain any documents.

The result confirmed that the generated SDK could authenticate successfully and communicate with the live Documenso API.

## Developer Experience observations

Overall, once the setup issues were resolved, the generated SDK was comprehensive and the generated documentation and tests were particularly useful.

The main areas I would suggest improving are:

1. Improve Windows support when spawning npm during project creation.
2. Use cross-platform commands instead of `rm -rf` in generated npm scripts.
3. Generate internal Aontu imports with explicitly relative paths where required.
4. Make the effective Node.js version requirements clearer when current dependencies require Node.js 24.
5. Validate generated model paths before starting the full generation process.
6. Preserve the detailed error output, as the resolver showing all searched paths was very useful while debugging.

## Result

A working TypeScript SDK for the Documenso v2 API was successfully generated using the Voxgig SDK tools.

The final SDK:

- compiles successfully;
- passes the generated test suite with zero failures;
- uses the MIT License;
- includes generated documentation and reference material;
- authenticates against the live Documenso API;
- successfully performs a real API request.