export function numberFormat(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
export function isEmptyObject(obj) {
    return window.$.isEmptyObject(obj);
}
export function havePermission(id) {
    let flag = false;
    this.currentAdminPermissions.map((item) => {
        if (item.id == id) {
            flag = true;
        }
    });
    return flag;
}
export function getAllPermissions() {
    this.$axios
        .get(this.baseUrl + "/api/admin/permissions")
        .then((response) => {
            this.allPermissions = response.data.data;
        });
}
export function getAdmin() {
    this.$axios.get(this.baseUrl + '/api/admin/check/user')
        .then(response => {
            this.adminProfile = response.data.data
        })
}
export function getAdminProfile() {
    this.$axios
        .get(this.$root.baseUrl + "/api/admin/profile")
        .then((response) => {
            this.profile = response.data.data;

            this.currentAdminPermissions = this.profile.permissions;
        });
}
export function setCookie(name, value, time = 100000000001000) {
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + time);
    expires = "; expires=" + date;
    document.cookie = name + (value || "") + expires + "; path=/";
}
export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
export function deleteCookie(name) {
    document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
export function CheckAdmin() {
    if (this.getCookie("adminAuthorization")) {
        return true;
    } else {
        return false;
    }
}
export function success_notification(message, duration = 6000) {
    this.$notify({
        group: "success",
        type: "success",
        title: "Message",
        duration: duration,
        text: message,
    });
}
export function success_notificationAll(message) {
    this.$notify({
        group: "success",
        type: "success",
        title: "Message",
        duration: 6000,
        text: message,
    });
}

export function error_notificationAll(message) {
    this.$notify({
        group: "error",
        type: "error",
        title: "Message",
        duration: 6000,
        text: message,
    });
}
export function error_notification(error) {
    if (error.response) {
        if (error.response.errors &&
            error.response.status == 422) {
            Object.values(error.response.data.errors).map((item) => {
                this.$notify({
                    group: "error",
                    type: "error",
                    title: "Message",
                    duration: 6000,
                    text: item[0],
                });
            });
        } else if (error.response.status == 400 && error.response.data.data != null) {
            Object.values(error.response.data.data).map((item) => {
                this.$notify({
                    group: "error",
                    type: "error",
                    title: "Message",
                    duration: 6000,
                    text: item.message,
                });
            });
        } else if (error.response.status == 422 && error.response.data.data != null) {
            Object.values(error.response.data.data.messages).map((item) => {
                this.$notify({
                    group: "error",
                    type: "error",
                    title: "Message",
                    duration: 6000,
                    text: item[0],
                });
            });
        } else if (error.response.status == 422 && error.response.data.errors != null) {
            Object.values(error.response.data.errors).map((item) => {
                this.$notify({
                    group: "error",
                    type: "error",
                    title: "Message",
                    duration: 6000,
                    text: item[0],
                });
            });
        } else if (error.response.status == 400 && error.response.data.data == null) {
            this.$notify({
                group: "error",
                type: "error",
                title: "Message",
                duration: 6000,
                text: error.response.data.message,
            });
        } else {
            this.$notify({
                group: "error",
                type: "error",
                title: "Message",
                duration: 6000,
                text: error.response.data.message,
            });
        }
    } else {
        this.$notify({
            group: "error",
            type: "error",
            title: "Message",
            duration: 6000,
            text: 'ops, please try later',
        });
    }
}

export function error_notify(message) {
    this.$notify({
        group: "error",
        type: "error",
        title: "پیام سیستم",
        duration: 6000,
        text: message,
    });
}
export function warning_notification(message) {
    this.$notify({
        group: "warning",
        type: "warn",
        title: "پیام سیستم",
        duration: 3000,
        text: message,
    });
}

// export function loadLanguages() {
//     this.$axios.get(this.$root.baseUrl + '/api/admin/languages?all=1')
//         .then(response => {
//             this.languages = response.data.data
//         })
// }

export function CheckUser() {
    if (this.getCookie("Authorization")) {
        return true;
    } else {
        return false;
    }
}