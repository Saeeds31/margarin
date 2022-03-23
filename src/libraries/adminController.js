export default {
    data() {
        return {
            status: false,
            items: null,
            showModal: false,
            disabled: false,
            item: null,
            mode: "create",
            currentPage: null,
            settings: {},
            totalPages: 1,
            AllListFlag: false,
            currentPage: 1,
            userId: null,
            witchOneLoaded: '',
        };
    },
    methods: {
        getId() {
            this.$axios.get("Users/GetId").then(response => {
                this.userId = response.data.data;
            }).catch(error => {
                this.$toast.error(error.response.data.message);
            })
        },
        pageChanged(page) {
            this.$router.replace({
                path: this.$route.path,
                query: {...this.$route.query, page: page }
            });
        },
        loadItems(page = null) {
            this.witchOneLoaded = 'loadItems';
            this.AllListFlag = page == null ? true : false;
            this.status = true;
            let header = {}
            if (page) {
                header['Access-Control-Expose-Headers'] = "X-Pagination"
            }
            this.$axios
                .get(`${this.apiRoute}${page ? "/" + page + "/" + this.pageSize : ""}`, page != null ? header : "")
                .then((response) => {
                    this.status = false;
                    if (page) {
                        let paginationData = JSON.parse(response.headers['x-pagination'])
                        this.totalPages = paginationData.TotalPages;
                        this.currentPage = paginationData.CurrentPage
                    }
                    this.items = response.data.data;
                })
                .catch((error) => {
                    this.status = false;
                    this.setErrorResponse(error.response.data.message);
                });
        },
        convertToBigData(data) {
            let pack = {
                persian: {},
                english: {},
                both: {}
            };
            for (const key in data) {
                if (key.toString().endsWith("_fa")) {
                    pack.persian[key] = data[key];
                } else if (key.toString().endsWith("_en")) {
                    pack.english[key] = data[key];
                } else {
                    pack.both[key] = data[key];
                }
            }
            return pack;
        },
        loadItem(id) {
            this.witchOneLoaded = 'loadItem';
            this.$axios
                .get(`${this.apiRoute}/${id}`)
                .then((response) => {


                    this.item = this.convertToBigData(response.data.data);
                })
                .catch((error) => {
                    this.setErrorResponse(error.response.data.message);
                });
        },
        deleteItem(id) {
            window
                .swal({
                    title: "آیتم حذف شود؟",
                    text: "این عمل بازگشت پذیر نیست",
                    icon: "warning",

                    showCancelButton: true,
                    showConfirmButton: true,
                    dangerMode: true,
                    buttons: ["خیر", "بله"]
                })
                .then((willDelete) => {
                    if (willDelete) {
                        this.$axios
                            .delete(this.apiRoute + `/${id}`)
                            .then((response) => {
                                this.$toast.success(response.data.message);

                                this.items = this.items.filter((item) => item.id != id);
                            })
                            .catch((error) => {
                                this.$toast.error(error.response.data.message);


                            });
                    }
                })
                .catch(() => {});
        },
        showEditModal(id) {
            this.editedId = id;
            this.status = true;
            this.$axios.get(`${this.apiRoute}/${id}`).then(response => {
                this.status = false;
                this.item = this.convertToBigData(response.data.data);
            })
            this.mode = "edit";
            this.showModal = true;
        },
        setErrorResponse(error) {
            let arrayError = error.split("|");
            arrayError.forEach((err, index) => {
                this.$toast.error(err, {
                    timeout: 1000 * (index + 4),
                    pauseOnHover: true
                });
            });
        },
        async submit(pack) {
            this.disabled = true;
            if (pack.mode == "edit") {

                let putData = pack.data;
                if (this.userId != null) {
                    putData.userId = this.userId
                }
                putData.id = this.editedId;
                if (putData.createDate && this.apiRoute != 'Blog') {
                    delete putData.createDate
                }
                await this.$axios
                    .put(this.apiRoute, JSON.stringify(putData), {
                        headers: {
                            // Overwrite Axios's automatically set Content-Type
                            "Content-Type": "application/json"
                        }
                    })
                    .then((response) => {
                        this.$toast.success(response.data.message);
                        this[this.witchOneLoaded](this.AllListFlag == true ? null : this.currentPage)
                        this.showModal = false;
                        this.resetModal();

                    })
                    .catch((error) => {
                        this.disabled = false;

                        this.setErrorResponse(error.response.data.message);
                    });
            } else {
                if (this.userId != null) {
                    pack.data.userId = this.userId
                }
                await this.$axios
                    .post(this.apiRoute, JSON.stringify(pack.data), {
                        headers: {
                            // Overwrite Axios's automatically set Content-Type
                            "Content-Type": "application/json"
                        }
                    })
                    .then((response) => {
                        pack.data.id = response.data.data.id;
                        this.$toast.success(response.data.message);
                        this.items.push(pack.data);
                        this.showModal = false;
                        this.resetModal();
                    })
                    .catch((error) => {
                        this.disabled = false;

                        this.setErrorResponse(error.response.data.message);
                    });
            }
            //   await this.$axios
            //     .post(
            //       this.current_url +
            //         (this.mode == "edit" ? `/${this.edit_item.id}` : ""),
            //       form_data
            //     )
            //     .then((response) => {
            //       this.disabled = false;
            //       this.getItemsFromServer(
            //         this.current_url,
            //         1,
            //         false,
            //         "",
            //         this.routeKey,
            //         this.urlParams != undefined ? this.urlParams : ""
            //       );
            //       this.mode = "create";
            //       this.$root.notify(response.data.message, "success");
            //       this.showpModal = false;
            //       this.edit_item = null;
            //     })
            //     .catch((error) => {
            //       this.disabled = false;
            //       this.$root.notify(error);
            //     });
        },
        // call in modal component
        resetModal() {
            if (this.witchOneLoaded == 'loadItems') {
                this.editedId = null;
            }
            this.disabled = false;

            this.mode = "create";
            this.bigData = {
                persian: {},
                english: {},
                both: {}
            };
            // this.headers.forEach((header) => {
            //     if (header.type == "boolean") {
            //         if (this.booleans[header.key] != undefined) {
            //             this.booleans[header.key] = false;
            //         }
            //     } else if (header.type == "image") {
            //         if (this.files[header.key] != undefined) {
            //             this.files[header.key] = null;
            //         }
            //     } else if (header.type == "select") {
            //         if (header.multiple == false) {
            //             this.selected[header.key] = null;
            //         } else {
            //             this.selected[header.key] = [];
            //         }
            //     } else if (header.type == "list") {
            //         this.listValue[header.key] = null;
            //     } else if (header.type == "specifications") {
            //         this.selectedSpecificationList = [];
            //         this.specification = null;
            //         this.selectedSpecification = {};
            //     } else if (header.type == "ckEditor") {
            //         this.editorData = null;
            //     } else if (header.type == "string") {
            //         if (this.string[header.key] != undefined) {
            //             this.string[header.key] = "";
            //         }
            //     } else if (header.type == "description") {
            //         if (this.description[header.key] != undefined) {
            //             this.description[header.key] = "";
            //         }
            //     }
            // });
        },
        loadSettings(settingArray) {
            settingArray.forEach((item, index) => {
                this.$axios.get(item.route).then(response => {
                    let fakeList = [];
                    response.data.data.forEach(ele => {
                        let pack = {
                            id: ele.id,
                            label: ele[`${item.field}_fa`]
                        }
                        fakeList.push(pack)
                    })
                    this.settings[item.route] = fakeList;
                })
            })
        }
    },
    watch: {
        "$route.query.page": {
            handler: function(val) {
                this.loadItems(val)
            }
        }
    }
};