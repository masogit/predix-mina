Page({
    data: {
        list: [
            {
                id: 'form',
                name: '设备管理',
                open: false,
                pages: ['扫码建档', '扫码查看', '设备查询']
            },
            {
                id: 'widget',
                name: '设备报修',
                open: false,
                pages: ['扫码报修', '报修单查询']
            },
            {
                id: 'feedback',
                name: '工单管理',
                open: false,
                pages: ['扫码处理', '工单查询']
            },
            {
                id: 'nav',
                name: '系统管理',
                open: false,
                pages: ['加入组织', '创建新组织']
            },
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
});