function Tab(container) {
    this.container = container
    this.init()
    this.bind()
}

Tab.prototype.init = function () {
    this.tabs = this.container.querySelectorAll('.tab-header>div')
    this.panels = this.container.querySelectorAll('.tab-panels>div')
}

Tab.prototype.bind = function () {
    var self = this
    self.tabs.forEach(tab => {
        tab.onclick = function () {
            let curIndex = 0
            self.tabs.forEach((tab, index) => {
                tab.classList.remove('active')
                if (this === tab) {
                    curIndex = index
                }
            })
            this.classList.add('active')
            self.panels.forEach(panel => panel.classList.remove('active'))
            self.panels[curIndex].classList.add('active')
        }
    })
}

document.querySelectorAll('.tab-container').forEach(container => {
    new Tab(container)
})
/* 代码最少的,但是是意大利面条式编程
let $tabs = $('tab-container')
$('.tab-header>div').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
    index=$(this).index()
    $(this).parent().next().children().eq(index).addClass('active').siblings().removeClass('active')
}) */
/* 面向对象编程
var Tab = {
  init: function () {
    this.$tabs = $('.tab-header > div')
    this.$panels = $('.tab-panels>div')
    this.bind()
  },
  bind: function () {
    this.$tabs.on('click', function () {
      $(this).addClass('active').siblings().removeClass('active')
      let index = $(this).index()
      $(this).parent().next().children().eq(index).addClass('active').siblings().removeClass('active')
    })
  }
}

Tab.init()
面向对象编程升级版
function Tab(container) {
    this.$container = container
    this.init()
    this.bind()

}
Tab.prototype.init = function () {
    this.$tabs = this.$container.children().eq(0)

    this.$panels = this.$container.children().eq(1)

}
Tab.prototype.bind = function () {
    self = this

    this.$tabs.children().on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        console.log($(this))
        let index = $(this).index()

        $(this).parent().next().children().eq(index).addClass('active').siblings().removeClass('active')
    })
}
$(".tab-container").each((index, element) => {
  console.log(index)
  console.log($(element))
  console.log($(element).parent())
  index = new Tab($(element))
})


 -------以上是jquery方式实现-----
  */
/*
    let tabs = document.querySelectorAll('.tab-header>div')
    let panels = document.querySelectorAll('.tab-panels>div')
    tabs.forEach(tab=>{
      tab.onclick = function() {
        let curIndex = 0
        tabs.forEach((tab, index)=>{
          tab.classList.remove('active')
          if(this === tab) {
            curIndex = index
          }
        })
        this.classList.add('active')
        panels.forEach(panel=>panel.classList.remove('active'))
        panels[curIndex].classList.add('active')
      }
    })
    */
    
    /*
    var Tab = {
      init: function() {
        this.tabs =  document.querySelectorAll('.tab-header>div')
        this.panels = document.querySelectorAll('.tab-panels>div')
        this.bind()
      },
      bind: function(){
        var self = this
        self.tabs.forEach(tab=>{
          tab.onclick = function() {
            let curIndex = 0
            self.tabs.forEach((tab, index)=>{
              tab.classList.remove('active')
              if(this === tab) {
                curIndex = index
              }
            })
            this.classList.add('active')
            self.panels.forEach(panel=>panel.classList.remove('active'))
            self.panels[curIndex].classList.add('active')
          }
        })   
      }
    }
    
    Tab.init()
   
    
    
    //let tab1 = new Tab(document.querySelectorAll('.tab-container')[0])
    //let tab2 = new Tab(document.querySelectorAll('.tab-container')[1])
    
     */