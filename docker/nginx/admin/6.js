webpackJsonp([6],{"./instructions/server/server-summary-github.en.md":function(e,t){e.exports="**Server type** - GitHub\n\n**Name** - There is no need to change this.\n\n**Identifier** - There is no need to change this.\n\n**New users** - Controls whether new Trambar accounts are created for users authenticated through GitHub. You can choose to make GitHub users guests at your site or make them regular users.\n\nIf you choose to not register new users, then only users you've manually created can sign-in through GitHub. You will need to know which e-mail address they've used to sign up for GitHub.\n\n**E-mail address whitelist** - Controls by e-mail address who get accepted as new users. When an e-mail address is given, only that user will be accepted. When a domain name is given, all users from that domain will be accepted. When the list is empty, all GitHub users are accepted.\n\n**Role assignment** - You can automatically assign roles to new users authenticated through this server. This is useful for story filtering.\n\n**Site URL** - The URL of the Trambar website. It's set in the Settings page. It's used to form the callback URL. You may use it as the OAuth app's homepage URL.\n\n**Callback URL** - You will need this URL when you create an OAuth app in the [GitHub Developer Settings](https://github.com/settings/developers/) page. First, press the *New OAuth App* button. Enter an application name (e.g. _Rick's Trambar_), then the site's URL, followed by this URL in the box labeled *Authorization callback URL*. Press the *Register Application* button.\n\n**Client ID** - Copy the client ID from GitHub Developer Settings.\n\n**Client secret** - Copy the client secret from GitHub Developer Settings.\n\nFor the app icon, you may use your company's logo or choose Trambar's [default icon](github-icons.zip). The backgrond color for the latter is #f29d25.\n"}});