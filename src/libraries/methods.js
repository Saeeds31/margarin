// * این تابع برای نمایش یک رشته با استفاده از سه نقطه است
export function showWith3Dot(string, number) {
    // !رشته مورد نظر و تعداد کلمات برای قطع کردن آنها را دریافت می کند
    let arrayString = string.split(" ");
    let NewArrayString = " ";
    for (let i = 0; i < number; i++) {
        NewArrayString = NewArrayString + arrayString[i] + " ";
    }
    // todo:اگر تعداد کلمات این رشته از عدد درخواست شده کمتر باشد خود رشته نمایش داده می شود
    if (arrayString.length > number) {
        return NewArrayString + "...";
    } else {
        return string;
    }
}
// * این تابع برای از بین بردن یک استایل اینلاین در نظر گرفته شده است
export function unsetInlineStyle(attrs, selector) {
    let elements = document.querySelectorAll(selector);
    for (let index = 0; index < elements.length; index++) {
        if (elements[index].style[attrs] != "") {
            elements[index].style.removeProperty(attrs);
        }
    }
}
// برای یکسان سازی سایز عکس های  یک مالتی اسلایدر استفاده میشود
export function setSliderHeight(selector) {
    let imageHeight = [];
    let images = document.querySelectorAll(selector);
    images.forEach((image) => {
        imageHeight.push(image.offsetHeight);
    });
    let maxHeight = Math.max(...imageHeight);
    console.log(imageHeight);
    if (images[0].style["height"] == "") {
        if (screen.width > 1000) {
            if (screen.width > 1495) {
                maxHeight -= 150;
            } else {
                maxHeight -= 100;
            }
        }
    }

    images.forEach((image) => {
        image.style.height = maxHeight + "px";
    });
}
// * این تابع برای تغییرات هر بخش با یک تناسب خاص نوشته شده است
// * دو مقدار بالا پایین یک ویژگی را به این تابع می دهیم و این تابع مابقی سایز های صفحه را به همان تناسب می چیند
export function setProportionStyle(
    attrs,
    unit,
    selector,
    highSize,
    highValue,
    lowSize,
    lowValue,
    important = null,
    windowKind = "width"
) {
    // ! محاسبه تناسب بر پایه هر واحد
    let proportionUnit = (highSize - lowSize) / (highValue - lowValue);
    if (windowKind == "width") {
        var windowSize = screen.width;
    } else {
        var windowSize = screen.height;
    }

    // دریافت عناصر
    let elements = document.querySelectorAll(selector);
    for (let index = 0; index < elements.length; index++) {
        if (windowSize > highSize) {
            // !مقدار واحد می تواند به همراه ایمپورتنت باشد

            let value = (windowSize - highSize) / proportionUnit + highValue + unit;
            elements[index].style.setProperty(
                attrs,
                value,
                important != null ? "important" : ""
            );
        } else {
            // حالت مساوی در اینجا قرار ممکن است بگیرد
            let step1 = highSize - windowSize;
            if (step1 == 0) {
                elements[index].style.setProperty(
                    attrs,
                    highValue + unit,
                    important != null ? "important" : ""
                );
            } else {
                let value = highValue - step1 / proportionUnit + unit;
                elements[index].style.setProperty(
                    attrs,
                    value,
                    important != null ? "important" : ""
                );
                // elements[index].setAttribute('style', attrs + ":" + value);
            }
        }
    }
}
// ! متد زیر برای کنترل اینکه یک آیدی در محدوده نمایش اسکرین وجود دارد یا خیر استفاده میشود
export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
export function showAlert(icon, title, text) {
    this.$Swal.fire({
        icon: icon,
        title: title,
        text: text
    });
}
export function slugGenerator(name) {
    if (name == null)
        return name
    let result = " ";
    result = name.replace(/ /g, '-')
    return result
}
// for use in getPersianMonth in en language
import $cookie from "vue-cookie"
export function getPersianMonth(day) {
    let result = "";
    switch (day) {
        case '01':
            result = $cookie.get('ltrTheme') ? "April" : "فروردین";
            break;

        case '02':
            result = $cookie.get('ltrTheme') ? "May" : "اردیبهشت";
            break;

        case '03':
            result = $cookie.get('ltrTheme') ? "June" : "خرداد";
            break;

        case '04':
            result = $cookie.get('ltrTheme') ? "July" : "تیر";
            break;

        case '05':
            result = $cookie.get('ltrTheme') ? "August" : "مرداد";
            break;

        case '06':
            result = $cookie.get('ltrTheme') ? "September" : "شهریور";
            break;

        case '07':
            result = $cookie.get('ltrTheme') ? "October" : "مهر";
            break;

        case '08':
            result = $cookie.get('ltrTheme') ? "November" : "آبان";
            break;

        case '09':
            result = $cookie.get('ltrTheme') ? "December" : "آذر";
            break;

        case '10':
            result = $cookie.get('ltrTheme') ? "January" : "دی";
            break;

        case '11':
            result = $cookie.get('ltrTheme') ? "February" : "بهمن";
            break;

        default:
            result = $cookie.get('ltrTheme') ? "March" : "اسفند";
            break;
    }
    return result;
}