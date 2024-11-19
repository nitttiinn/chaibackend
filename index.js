require('dotenv').config()
const express = require('express')
// import express from "express";
const app = express()
const port = 4000
const githubData = {
    "login": "nitttiinn",
    "id": 92293917,
    "node_id": "U_kgDOBYBLHQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/92293917?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/nitttiinn",
    "html_url": "https://github.com/nitttiinn",
    "followers_url": "https://api.github.com/users/nitttiinn/followers",
    "following_url": "https://api.github.com/users/nitttiinn/following{/other_user}",
    "gists_url": "https://api.github.com/users/nitttiinn/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nitttiinn/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nitttiinn/subscriptions",
    "organizations_url": "https://api.github.com/users/nitttiinn/orgs",
    "repos_url": "https://api.github.com/users/nitttiinn/repos",
    "events_url": "https://api.github.com/users/nitttiinn/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nitttiinn/received_events",
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
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-10-11T07:04:33Z",
    "updated_at": "2024-11-19T15:21:28Z"
  };
app.get('/', (req, res) => {
    res.send('Hello World!') // call back
})

app.get('/twitter', (req, res) => {
    res.send('nitttiinn')
})

app.get('/login',(req, res)=>{
    res.send('<h1>Please login at noon library</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Noon Library</h2>")
})
app.get('/github',(req,res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})