var posts=["2024/05/05/hello-world/","2024/05/07/红岸自编的浏览器开源项目科学上网傻瓜式搭建教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };