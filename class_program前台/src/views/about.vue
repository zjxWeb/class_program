<template>
    <div>
        <h3>24324</h3>
        <button v-rightMenu = "menudata"  @contextmenu.prevent="get(index)" v-for="(item,index) in 10">
            <p>{{text}}</p>
        </button>
    </div>
</template>
<script>
    export default {
        name:"demo",
        data(){
            return {
                text:'asdas',
                getindex:'1',
                menudata:{
                    // 菜单box的样式   Menu box style
                    boxStyle:"width:150px;background:#f55;",
                    // 菜单选项的样式 Style of menu options
                    optionStyle:"color:#fff;line-height:30px;font-size:15px;",
                    menus:[
                        {
                        /**
                         * content 菜单显示的文字 <支持html> 
                         * callback：菜单点击要触发函数  需要在methods定义 
                         * style ： 本项菜单的单独样式 可以覆盖掉optionStyle  
                         * icon : icon图片地址
                         * iconStyle: icon 图片的样式（例如大小等 直接作用于图片）
                         * iconPosition : 支持left / right (其余全部按照left处理);
                         * content The text displayed on the menu(can use html)
                         * callback: Menu clicks to trigger functions need to be defined in methods
                         * style :  The single style of this menu can override option Style
                         * icon : your icon's url
                         * iconStyle : you icon's style ,is image's style
                         * iconPosition :you can use left or right ;The rest are all processed according to left
                         */
                        /**
                         * 字段(field)           类型(type)                 是否可以为空(is can null)    默认值
                         * content            [ html | text ]                       Y                   ""
                         * callback           [  methods function ]                 Y                   return false
                         * style                   [ css ]                          Y                   ""
                         * icon                   [ url ]                           Y                   ""
                         * iconStyle              [ css ]                           Y                   ""
                         * iconPosition           [string]                          Y                   "left"
                        */
                        content:"menu content",
                        callback:"callbackMethods",
                        style:"border-bottom:1px solid #fff;background:#333;line-height:30px;",
                        icon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2310514390,3580363630&fm=27&gp=0.jpg",
                        iconStyle:"width:20px;height:20px;",
                        iconPosition:"left",
                        },
                        {
                        content:"右键菜单二",
                        callback:"otherMethods"
                        }
                    ],
                },
            }
        },
        mounted() {
        },
        watch:{

        },
        methods:{
            get(index){
                this.getindex = index
            },
            callbackMethods(){
                // do something
                console.log(this.getindex)
            },
            otherMethods(){
                // do something
            }
        }
    }
</script>