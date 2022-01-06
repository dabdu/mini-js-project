const blogPosts = {
    title: "blog one",
    body: `This is the content of the first blog post`,
    author: "Ibrahim Dauda",
    views: 20,
    comments:  comments = {
        comAuthor: "Musah Isah",
        comment: `This is a nice Post Mr`
    },
    isLive: false
}

for(let post in blogPosts){
    if(blogPosts.isLive) console.log(post, blogPosts[post])
}


//Exercise Five
function Post(title, body, author){
    
}