export default {
    // note:first ,read all line and then use them
    //    این mixin باید به صورت سراسری به ویو اضافه شود
    // برای استفاده از این فایل باید فایل ویو ایکس را به برنامه خود اضافه کنید و درخواست ها را با آن بزنید
    // درون فایل ویو ایکس باید در قسمت state آرایه زیر را اضافه کنیم
    // requestList:[
    // template of list
    // {
    // actionName:'getAboutUsFromServer',
    // actionParam:'a json string' =>can be null
    // commitOrDispatch:'commit || dispatch'
    // functionName:'name of commit or dispatch function'
    // data:'a json string'
    //  }
    //              ]
    //   یک کامپویت هم در نظر میگیریم و آنرا در استور ست میکنیم

    computed: {
        requestList() {
            return this.$store.getters.getRequestList;
        }
    },
    methods: {
        checkRequest(actionName, actionParam) {
            let isPreviousRequest = this.isPreviousRequests(actionName, actionParam);
            if (isPreviousRequest != null) {
                if (isPreviousRequest.commitOrDispatch == "commit")
                    this.$store.commit(
                        isPreviousRequest.functionName,
                        this.convertJsonStingPack(isPreviousRequest.data)
                    );
                else
                    this.$store.dispatch(
                        isPreviousRequest.functionName,
                        this.convertJsonStingPack(isPreviousRequest.data)
                    );
            } else {
                if (actionParam == "null") this.$store.dispatch(actionName);
                else
                    this.$store.dispatch(
                        actionName,
                        this.convertJsonStingPack(actionParam)
                    );
            }
        },
        isPreviousRequests(actionName, actionParam) {
            // action param will be json string);
            let res = this.requestList.filter((req) => {
                return req.actionName.match(actionName);
            });
            if (res.length > 0) {
                if (res.length > 1) {
                    let res1 = res.filter((req) => {
                        return req.actionParam.match(actionParam);
                    });
                    if (res1.length != 0) {
                        return res1[0];
                    } else {
                        return null;
                    }
                } else {
                    if (res[0].actionParam == actionParam) {
                        return res[0];
                    } else {
                        return null;
                    }
                }
            } else {
                return null;
            }
        },
        convertJsonStingPack(jString) {
            return JSON.parse(jString);
        }
        //    تابع افزودن به لیست در فایل استور می باشد
    }
};