//index.js
Page({

  data: {
    lists: [{
        pic: "http://img10.360buyimg.com/imgzone/jfs/t1/100969/18/8660/252621/5e05ce93Ed9a312b4/e882fd8c748ca392.gif",
        url: "http://www.baidu.com"
      },
      {
        img: "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg",
        url: "http://www.baidu.com"
      },
      {
        img: "https://img.alicdn.com/tfs/TB1MDHfBhD1gK0jSZFyXXciOVXa-520-280.jpg_q90_.webp",
        url: "http://www.baidu.com"
      }
    ]
  },
  bannerClick: function(e){
    let swiperIndex = e.detail.index;
    //print your function,例如
    wx.showToast({
      title: `当前下标:${swiperIndex}`,
    })
  }
})