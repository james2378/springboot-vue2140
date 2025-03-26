const base = {
    get() {
        return {
            url : "http://localhost:8080/tongchengshangmenweiliuxitong/",
            name: "tongchengshangmenweiliuxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/tongchengshangmenweiliuxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "同城上门喂遛宠物系统"
        } 
    }
}
export default base
