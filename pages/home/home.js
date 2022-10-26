//index.js

const app = getApp()

var curDate = new Date(); // переменная даты
var week = ["вс.", "пн.", "вт.", "ср.", "чт.", "пт.", "сб."] // неделя в нужном формате

var curDay = (String(curDate.getDate()).length == 1) ? "0" + curDate.getDate() : curDate.getDate(); // число с нулём в начале

var curMonth = (String(curDate.getMonth()).length == 1) ? "0" + curDate.getMonth() : curDate.getMonth()

const mydata = { // обьект с данными




  // баннер
  
  banner: [{
    background: "/img/dynamic/banner/banner1.png"
  },
  {
    background: "/img/dynamic/banner/banner2.png"
  },
  {
    background: "/img/dynamic/banner/banner3.png"
  }
],





  // новости
  news: [
    {
      img: '/img/dynamic/news-preview1.png',
      title: 'Liu Guoliang appointed as new WTT board member',
      date: '2022-08-27 14:06'
    },
    {
      img: '/img/dynamic/news-preview2.png',
      title: 'Qiu thrilled with title breakthrough at Euros',
      date: '2022-08 - 23 10: 17'
    },
    {
      img: '/img/dynamic/news-preview3.png',
      title: '2022 ITTF World Team Table Tennis Championships Finals kick off in Chengdu',
      date: '2022-09-30 15:17'
    }
  ],

  accLinks: {
    head: "Смотрите последние видео в наших аккаунтах",
    acc1: {
      img: '/img/acc-links-img1.png'
    },
    acc2: {
      img: '/img/acc-links-img2.png'
    }
  },



  // время для фильтров турнира
  tournamentsDate: {
    date1: "今天" + curDay + "." + curMonth,
    date2: "星期日" + curDay + "." + curMonth,
    date3: "星期一" + curDay + "." + curMonth
  },
  // регион турнира
  tournamentsRegion: {
    region: "Шанхай"
  },
  // турниры
  tournaments: [
    {
      time: "12:30",
      rate: "<376",
      clubname: "唐薇依乒乓馆",
      player: "2/8",
      comment: "25"
    },
    {
      time: "12:30",
      rate: "<376",
      clubname: "唐薇依乒乓馆",
      player: "2/8",
      comment: "546"
    },
    {
      time: "12:30",
      rate: "<376",
      clubname: "唐薇依乒乓馆",
      player: "2/8",
      comment: "4567"
    },
    {
      time: "12:30",
      rate: "<376",
      clubname: "唐薇依乒乓馆",
      player: "2/8",
      comment: "645"
    },
    {
      time: "12:30",
      rate: "<376",
      clubname: "唐薇依乒乓馆",
      player: "2/8",
      comment: "53"
    },
    {
      time: "12:30",
      rate: "<376",
      clubname: "唐薇依乒乓馆",
      player: "2/8",
      comment: "456"
    }
  ],






  // тренеры
  trainers: [
    {
      photo: "/img/dynamic/trainer-photo.png",
      rate: "2376",
      name: "马龙",
      location: "张德英乒乓中心",
      price: "30¥"
    },
    {
      photo: "/img/dynamic/trainer-photo.png",
      rate: "2376",
      name: "马龙",
      location: "张德英乒乓中心",
      price: "65¥"
    },
    {
      photo: "/img/dynamic/trainer-photo.png",
      rate: "2376",
      name: "马龙",
      location: "张德英乒乓中心",
      price: "23¥"
    },
    {
      photo: "/img/dynamic/trainer-photo.png",
      rate: "2376",
      name: "马龙",
      location: "张德英乒乓中心",
      price: "43¥"
    }
  ],




  // детские тренировки
  childrenTrainingsTime: {
    date: week[curDate.getDay()] + curDay + "." + curMonth
  },

  childrenTrainings: [
    {
      time: "13:30",
      clubname: "唐薇依乒乓馆",
      trainerIcon: "",
      trainerName: "林高远",
      playerIcon: "",
      playersCount: "2",
      price: "16¥"
    },

    {
      time: "13:30",
      clubname: "唐薇依乒乓馆",
      trainerIcon: "",
      trainerName: "林高远",
      playerIcon: "",
      playersCount: "3",
      price: "19¥"
    },

    {
      time: "13:30",
      clubname: "唐薇依乒乓馆",
      trainerIcon: "",
      trainerName: "林高远",
      playerIcon: "",
      playersCount: "4",
      price: "14¥"
    },
    
    {
      time: "13:30",
      clubname: "唐薇依乒乓馆",
      trainerIcon: "",
      trainerName: "林高远",
      playerIcon: "",
      playersCount: "5",
      price: "18¥"
    }
  ],





  // последние фото
  lastPhotos: [
    {
      photo: "/img/dynamic/last-photos.png",
      like: "13",
      comment: "3",
      description: "Why China is so staggeringly good at table tennis"
    },
    {
      photo: "/img/dynamic/last-photos.png",
      like: "15",
      comment: "5",
      description: "Why China is so staggeringly good at table tennis"
    }
  ]

}







Page({
  data: mydata,

  onShow: function() {
      animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2, 2).rotate(45).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(30).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)

  },

  clickMe: function () {
    this.setData({ msg: "Hello World" })
  },

  headText: function () {
    test.color = "white;"
  },

  tournamentTabs: function () {
    this.setData({ msg: "Hello World" })
  },

  navToSingle: function() {
    wx.navigateTo({
      url: "../singleTournament/singleTournament"
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
