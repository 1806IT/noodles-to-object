
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

/* var lte1 = new Tab($('.tab-container').eq(0))
var lte2 = new Tab($('.tab-container').eq(1))
var lte3 = new Tab($('.tab-container').eq(2)) */
/* var lte4 = new Tab($('.tab-container').eq(3)) */

$(".tab-container").each((index, element) => { 
    console.log(index)
    console.log($(element))
    console.log($(element).parent())
    index = new Tab($(element))
})

