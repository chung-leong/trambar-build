webpackJsonp([8],{"./instructions/server/server-summary-dropbox.en.md":function(e,o){e.exports="**Server type** - Dropbox\n\n**Name** - There is no need to change this.\n\n**Identifier** - There is no need to change this.\n\n**New users** - Controls whether new Trambar accounts are created for users authenticated through Dropbox. You can choose to make Dropbox users guests at your site or make them regular users.\n\nIf you choose to not register new users, then only users you've manually created can sign-in through Dropbox. You will need to know which e-mail address they've used to sign up for Dropbox.\n\n**E-mail address whitelist** - Controls by e-mail address who get accepted as new users. When an e-mail address is given, only that user will be accepted. When a domain name is given, all users from that domain will be accepted. When the list is empty, all Dropbox users are accepted.\n\n**Role assignment** - You can automatically assign roles to new users authenticated through this server. This is useful for story filtering.\n\n**Site URL** - The URL of the Trambar website. It's set in the Settings page. It's used to form the callback URL.\n\n**Callback URL** - You will need this URL when you create an app in the [Dropbox App Console](https://www.dropbox.com/developers/apps). First, press the *Create app* button to start a new app. Choose *Dropbox API* and *App folder* access. Then give the app a name (e.g. _trambar_).\n\nIn the next page, copy this URL into the box under *OAuth2* > *Redirect URIs* and press *Add*.  \n\n**App key** - Copy the app key from Dropbox App Console.\n\n**App secret** - Copy the app secret from Dropbox App console. You will need to first click the *Show* link.\n\nAfter you've saved this server, click the *Test OAuth integration* button to verify that the configuration is correct.\n\nYou will need to change the status of the app from _Development_ to _Production_ in the Dropbox App Console once you're ready to deploy your site. Prior to doing so, you will need to entering branding information. You may use your company's logo as the application or choose Trambar's [default icons](dropbox-icons.zip).\n"}});