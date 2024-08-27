var posts=["2024/08/24/hello-world/","2024/08/27/你好/","2024/08/27/你好，我是 Iriving/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };