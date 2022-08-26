# Forge Hello World

This project contains a Forge application written in Javascript that copies the title of the issues. 

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Install dependecies (inside root directory).
```
npm install
```

- Install dependencies (inside of the `static/copy-to-clipboard` directory):
```
npm install
```

- Modify your app by editing the files in `static/copy-to-clipboard` directory:
- Build and deploy your app:
```
npm run deploy
```

- Install your app in an Atlassian site by running:
```
forge install
``` 

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
