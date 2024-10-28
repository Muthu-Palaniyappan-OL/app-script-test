const { OAuth2Client } = require("google-auth-library");
const readline = require("readline");

const clientId = "YOUR_CLIENT_ID";
const clientSecret = "YOUR_CLIENT_SECRET";
const redirectUri = "urn:ietf:wg:oauth:2.0:oob";

const oAuth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);

const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: [
    "https://www.googleapis.com/auth/script.projects",
    "https://www.googleapis.com/auth/script.deployments",
    "https://www.googleapis.com/auth/drive.file",
  ],
});

console.log("Authorize this app by visiting this url:", authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the code from that page here: ", (code) => {
  rl.close();
  oAuth2Client.getToken(code, (err, token) => {
    if (err) return console.error("Error retrieving access token", err);
    console.log("Your refresh token:", token.refresh_token);
  });
});
