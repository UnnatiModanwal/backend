console.log("chai aur code")
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata= {
  "login": "UnnatiModanwal",
  "id": 175592936,
  "node_id": "U_kgDOCndV6A",
  "avatar_url": "https://avatars.githubusercontent.com/u/175592936?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/UnnatiModanwal",
  "html_url": "https://github.com/UnnatiModanwal",
  "followers_url": "https://api.github.com/users/UnnatiModanwal/followers",
  "following_url": "https://api.github.com/users/UnnatiModanwal/following{/other_user}",
  "gists_url": "https://api.github.com/users/UnnatiModanwal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/UnnatiModanwal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/UnnatiModanwal/subscriptions",
  "organizations_url": "https://api.github.com/users/UnnatiModanwal/orgs",
  "repos_url": "https://api.github.com/users/UnnatiModanwal/repos",
  "events_url": "https://api.github.com/users/UnnatiModanwal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/UnnatiModanwal/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-07-15T07:33:03Z",
  "updated_at": "2025-07-22T12:56:26Z"
}
app.get('/github', (req, res) => {
    res.json(githubdata)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Hello Test!')
})
app.get('/login', (req, res) => {
  res.send('Hello Login!')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
