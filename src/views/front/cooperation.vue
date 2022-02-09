<template>
  <div class="width100 margin-auto" id="cooperationSection">
    <introduction v-if="introduction" class="width80 margin-auto" :data="introduction">
      <p class="slotElements width80 blackColor06">
        {{ introduction.text }}
      </p>
    </introduction>
    <div
            data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      id="stepBox"
      class="width80 margin-auto d-flex justify-content-end align-items-center"
    >
      <div class="stepSvg">
<button :class="{ activeStep: currentStep == 4 }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="70"
          height="70"
          viewBox="0 0 100 100"
        >
          <g id="step4" transform="translate(-618 -981)">
            <g
              id="Ellipse_8_copy_4"
              data-name="Ellipse 8 copy 4"
              transform="translate(618 981)"
              fill="#fff"
              stroke="rgba(0,0,0,0.08)"
              stroke-linejoin="round"
              stroke-width="6"
            >
              <circle cx="50" cy="50" r="50" stroke="none" />
              <circle cx="50" cy="50" r="47" fill="none" />
            </g>
            <image
              id="Layer_654"
              data-name="Layer 654"
              width="34"
              height="34"
              transform="translate(651 1014)"
              opacity="0.6"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABHNCSVQICAgIfAhkiAAAAdBJREFUWEftmCFIBEEUhr1iEwTbFc+iSRBMJteiGATFZBDOIlwUg1GvC2aTG0yCeCBYXavJYLJ4Fk2CYNLk/y87MM7NMDsz641hB37udva9N9++ebMzd42RwTaKrhbUhMY099n1BT1Cr4b7zt0NxWMW1/MQYcq0DEZPZQxtNjJIAuNpm4Pm/iX63j38frkIEE7FsmewT/gR5tvTP3cTIFv4bqqHMvGZkesQGIJMQJvKaJyimTIEkg0LmEBvGr9J9L0U/Tf4vFdtCMLipNgWoLUCzpHDybwP6wPoQngRJIGYgXYB4hQx0DiF/w5jEIQZWIU6gUF93bfheC5AzoYwHSZQ1lSTIPvQse/jVOS3QpBTaLeigL5hugThcmKNxGw9gtxCSUwKjJ3VIMoM1BlRS7LOiHNGHuDRhT4Cl/c4/A+hOUMc69QQ4igQQrjzXcV3lq5ZQZiRvYpATkIyUhGDNYw1I9YIFRn8LxAWIys6ZsuPAevQVUwKjL0hftc846IVCaaPcacESBsXPLfGaDzFp/Jv3xgHpAwQS3x6GYSvYdZKMqS09DAOs5FvH+rfEuzjNHEV/VXNsCa4daTyA+tAxH2upkXItFG5Jo7bxR3ETAy0HyUdUBujAeNaAAAAAElFTkSuQmCC"
            />
          </g>
        </svg>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="14"
        height="16"
        viewBox="0 0 14 16"
      >
        <image
          id="Layer_3461_copy_3"
          data-name="Layer 3461 copy 3"
          width="14"
          height="16"
          opacity="0.2"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAABHNCSVQICAgIfAhkiAAAAOJJREFUKFOVkjEKwkAURE1jJwh2VqnsBMXKylTWHiFXyAk0J1BPoBcQvYF2VoJgZ2Vn6xGcF3ZhWc26DgxLknn8+UmSxm/liszl1ERXOoskwM30bOkAbnT4DWwrsZEB6/QxMVNyLwOHtHUnsguTYnSy4MK8gBiITAWyC/X+UQl4lNktRleFCjsxBnwpvJZZqVJM1YOZ8tDZlPsW5Mxl/40SpBYg6soTuSU/6z5HqYf8WlQkOJZTW9MHuT8wYaYhao1kKrq6h/7VTMmeB9jLSwjsKDU1VX1+FwJtmKnUZVd0k89vNCgkoVsje5UAAAAASUVORK5CYII="
        />
      </svg>
      <button :class="{ activeStep: currentStep == 3 }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="70"
          height="70"
          viewBox="0 0 100 100"
        >
          <g id="step3" transform="translate(-792 -981)">
            <g
              id="Ellipse_8_copy_2"
              data-name="Ellipse 8 copy 2"
              transform="translate(792 981)"
              fill="#fff"
              stroke="rgba(0,0,0,0.08)"
              stroke-linejoin="round"
              stroke-width="6"
            >
              <circle cx="50" cy="50" r="50" stroke="none" />
              <circle cx="50" cy="50" r="47" fill="none" />
            </g>
            <image
              id="Layer_653"
              data-name="Layer 653"
              width="30"
              height="34"
              transform="translate(827 1014)"
              opacity="0.6"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAYAAABIiGl0AAAABHNCSVQICAgIfAhkiAAAAT1JREFUWEdjZMAEUkAhSSAG0dQAz4CGPAdiEA0HjEhsYSDbCmopNSxEN+MtUOAAEINoBpjFIEt9gZiNFjYimfkLyN4MshxkMciyYCDmpbGlMONBli8DWawLxJZ0shRmzXGQxSDfgoKangAc1Gn0tBFm16C1OAFP/O8Fyq0iN7QI+XgmHoNvAeV6aWWxM9BgAxyGHwOKH6eVxeSaS1AfoaAmaAC5CkYtRg85WTyJi1AoXwAqeIxLEaGgbqOgOAVVf1VDzmJQ5UFuBQLyMbjSxwYIBTWheCRbftRisoOOVI2EgjoMaCCooiAVfANqAFWZOCsRQhbjqxYJOQZvtUnI4mKg6WqEbMAhD/IxqLEwmp3AITCgzdsBa9APWBcGFOQD0mmDJXeQ5Q5QR5CZg/Bqw9pNRdZBi445yNIHyJYAAPCWOPPdo2BsAAAAAElFTkSuQmCC"
            />
          </g>
        </svg>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="14"
        height="16"
        viewBox="0 0 14 16"
      >
        <image
          id="Layer_3461_copy_3"
          data-name="Layer 3461 copy 3"
          width="14"
          height="16"
          opacity="0.2"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAABHNCSVQICAgIfAhkiAAAAOJJREFUKFOVkjEKwkAURE1jJwh2VqnsBMXKylTWHiFXyAk0J1BPoBcQvYF2VoJgZ2Vn6xGcF3ZhWc26DgxLknn8+UmSxm/liszl1ERXOoskwM30bOkAbnT4DWwrsZEB6/QxMVNyLwOHtHUnsguTYnSy4MK8gBiITAWyC/X+UQl4lNktRleFCjsxBnwpvJZZqVJM1YOZ8tDZlPsW5Mxl/40SpBYg6soTuSU/6z5HqYf8WlQkOJZTW9MHuT8wYaYhao1kKrq6h/7VTMmeB9jLSwjsKDU1VX1+FwJtmKnUZVd0k89vNCgkoVsje5UAAAAASUVORK5CYII="
        />
      </svg>
      <button :class="{ activeStep: currentStep == 2 }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="70"
          height="70"
          viewBox="0 0 100 100"
        >
          <g id="location" transform="translate(-966 -981)">
            <g
              id="Ellipse_8_copy_3"
              data-name="Ellipse 8 copy 3"
              transform="translate(966 981)"
              fill="#fff"
              stroke="rgba(0,0,0,0.08)"
              stroke-linejoin="round"
              stroke-width="6"
            >
              <circle cx="50" cy="50" r="50" stroke="none" />
              <circle cx="50" cy="50" r="47" fill="none" />
            </g>
            <image
              id="Layer_652"
              data-name="Layer 652"
              width="24"
              height="34"
              transform="translate(1004 1014)"
              opacity="0.6"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAiCAYAAABFlhkzAAAABHNCSVQICAgIfAhkiAAAAeFJREFUSEu9lj1Ow0AQhZ0GKiQkOipzA3ICQkNNTkByAzgByQnIDTAnIDUN5gRwA6joEEhUUPE+yxs2zv7FmIz0JDszO29mdmacXhaXU5kcCkcN0we9PwnzkIteQDmR7kzIIzG8SH8jYL8iLgKiva6jjuf3a0E24zqrxa9NApzfC7vreLZsP/R8bJPYBH91bngg6QuULrMJHluUxZdoWWeyIBjVdW9ZGecx7qMwGTzrJe/Se12iAwioPeWJCTU1Pc9spATUh2AiXEa8F9KTsi20MqUNyRQC2nIQsCqlo/VcEjs7TyEYWqVpklCq21BwKQRETxYuIXOy8EmZQhDKgDvgLoIEV9Ke/9MdzMggFgXchXAhsAYQdhWBcTYkYwgwfo8YosY5GxNhdlIWYjVoCJ1AR3QpDOXQEAz0EuqGNsRV99nbNDY065CUMq6Gc6PfAwhHQqivU7Kg22bG0PVNTlliPqJCiqWl6PtX0aaraGHqbmalCsJHQI9z6fR7ijidhwjQpU6r13mMwEQe2lUrNW+m6ytR044p5/LNeqDOdAsEQUklwEku8GmFZCqYvdQZQSxYp96XwZ6s94Utgedtj/cv/f4mfAuv9fOSaZMAZyfCTqtws+xT5+5soo0TmMA7K9EP1KhizpXBdfMAAAAASUVORK5CYII="
            />
          </g>
        </svg>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="14"
        height="16"
        viewBox="0 0 14 16"
      >
        <image
          id="Layer_3461_copy_3"
          data-name="Layer 3461 copy 3"
          width="14"
          height="16"
          opacity="0.2"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAABHNCSVQICAgIfAhkiAAAAOJJREFUKFOVkjEKwkAURE1jJwh2VqnsBMXKylTWHiFXyAk0J1BPoBcQvYF2VoJgZ2Vn6xGcF3ZhWc26DgxLknn8+UmSxm/liszl1ERXOoskwM30bOkAbnT4DWwrsZEB6/QxMVNyLwOHtHUnsguTYnSy4MK8gBiITAWyC/X+UQl4lNktRleFCjsxBnwpvJZZqVJM1YOZ8tDZlPsW5Mxl/40SpBYg6soTuSU/6z5HqYf8WlQkOJZTW9MHuT8wYaYhao1kKrq6h/7VTMmeB9jLSwjsKDU1VX1+FwJtmKnUZVd0k89vNCgkoVsje5UAAAAASUVORK5CYII="
        />
      </svg>
      <button id="firstSvgStep" :class="{ activeStep: currentStep == 1 }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="70"
          height="70"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.789"
              y1="1"
              x2="0.211"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#f7941e" />
              <stop offset="1" stop-color="#f0aa56" />
            </linearGradient>
          </defs>
          <g id="user" transform="translate(-1140 -981)">
            <circle
              id="Ellipse_8_copy"
              data-name="Ellipse 8 copy"
              cx="50"
              cy="50"
              r="50"
              transform="translate(1140 981)"
              fill="url(#linear-gradient)"
            />
            <image
              id="Layer_650"
              data-name="Layer 650"
              width="36"
              height="33"
              transform="translate(1173 1016)"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAABHNCSVQICAgIfAhkiAAABN5JREFUWEe1l1FIW1cYxxNNTHRODYrWlrmViSyIMBxMKGxYNsYEmS2iUPrQjPngi9C+jO1pIri+bXvzUdqHobCN1j3Yh2KDjhUcpR0Dl5U6XetirJpIYqLGmOz/v9wTTo735t509sDhnnvOd873O9/33e+c63RYlFwu9ypE3kFtRmVblDQaq6iPnU5n2Godu+POYoKAIQirVfkDUPeFEObVo31OmkRggiesFjIFwqLdmNxmtYA0vg6FP0tQ/WgTTC4PIPOg2JqGQIB5A5M+kidms1nn7u6u+/DwsIxtMVZWVpZzu93ZysrKDJ6/CYVY4zRkeg2U01JBMygzoEuYkI8Xguzt7bmsrEWo6urqm8I1BwcHA6lU6pSY53K5slVVVRls4h5kHhutdwxItU48Hq/AwuVWMGJ8c3Pzfnt7+yLfGYM7OzvnaFV5vsfjidXW1t60C5QPZIIQyC4M5fb39yMtLS232aTbAPMJoDzqGgsLCz/29/evqf1GFmLsMIYc29vbXjle7IDpQHcgmwAQ3dVLINVKwWDwzuDg4ArGmT7yxRToRawjWYhAtBC/sl6jGNSBmA4KUoERkOYyu4GsWg0uftra2jqH/gyAaglE66hum56enhkZGYlifBf1SKxjBKR9rqUGs1hwZWVlsaura0kHeoubU4EAmm5qavpen5OkrCkQBzDhEoDqS/m69HnpQCDww+zsLOOCFvoYz3oVaG1t7VFnZ+ejUoBOw2UX7eQe2WWSdRwTExOe4eHhCxyXgSSXiqnFXSaktra2/PjCCrK1Gi/yO2LkSVtb2y+iLxaLfVBXV9fAdxGPGxsbSx0dHVqO0ksOz7i8TtHDdW5uDjmu/X1k1aK5SHGB5r1MJtNdXl5OhY7l5eXk5OTkX+Pj47SGXA7wsm8bCIKunp4e3+joaGtzc3OL1+vNHwPpdDoKK0SmpqaWDBRRCZWxMEvL1xah/xCNlGr1ohbShWmdSnVikXdV0SvcmJVlxLgdIMq6dSgr+bwL8IXVYc63cN2bQtnR0dHvuBFE9cM1aLQpKwWqe2kt7lbeMZMa8wg/9aw8QYf6Cn1XDZTvoO8W6jXEKNtasboxcpdv23DXKhZdNZMDWABjkybjhDkroAqAMJHKr+gQ3TZAVBEmuyDqbekSxqBuDIfDn+PDuGay5neQ18Y0IP0OxB28CIQZN+E+hSI+CcXM/7CiouKMOgE3hF9xuXsP/VmnDvMQL3TPSRe647wO5YhGo1/4fL7rqpJEIrFYU1NzGf1/E4iWCZw0ibTeLQBd1D3BkODmC0ooFPra7/ffQGeMQPdO2FXH9gYgLzq1RAl9WvYWBVfenxobG7/U31MvHQjnYRxHCO9YzwglgHD23Z2fn7/R19cnn20a0CgEmSteSpEswHMszJiFxdbRft1A4SaBGMx0m518UxI0zrt/BwYGLszMzIgTXf71UX9CKRPJ5yHkiW9wi/sMab2mJK0mwrTM0NDQdQmGWfyJJC6AaDl+jdpBKydGXsjrcfn+EL8x/oaGhnfx/3TGKG+oDIyTZDIZwuXrz0gkEhobG7srgQhxzQLSXJ6PPIgLigzE5PUa6rF/qBOwGBX/g1pw1hmta3SW0VI+1IK/zf8BRcs8twOjukzVWa1bi3chmpfVqtAC4nLGvMP4sLSKvOh/u7JfoG3ofYUAAAAASUVORK5CYII="
            />
          </g>
        </svg>
      </button>
      </div>
      <p class="stepTitle d-flex flex-direction-column align-items-end">
        <span class="blackColor06">{{ stepText }}</span>
        <span class="blackColor06">{{ stepTitle }}</span>
      </p>
    </div>
    <div id="form" class="width80 margin-auto">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
        v-show="currentStep == 1"
        id="userInfo"
        class="width100  justify-content-between"
      >
        <simpleInput :title="'نام پدر'" type="text" v-model="fatherName" />
        <simpleInput :title="'نام خانوادگی'" type="text" v-model="lastName" />
        <simpleInput :title="'نام'" type="text" v-model="firstName" />
        <selectionInput
          :title="'جنسیت'"
          v-model="genderOption"
          @selectValue="gender = $event"
        />
        <simpleInput
          :title="'شماره شناسنامه'"
          type="number"
          v-model="nationalId"
        />
        <simpleInput
          :title="'شناسه ملی'"
          type="number"
          v-model="nationalCode"
        />
        <selectionInput
          :title="'مذهب'"
          v-model="religionOption"
          @selectValue="religion = $event"
        />

        <div
          id="selectBirthDay"
          class="width30 d-flex align-items-center justify-content-between"
        >
          <date-picker id="birthDate" v-model="brithDate" />
          <label>تاریخ تولد</label>
        </div>
        <selectionInput
          :title="'وضعیت تاهل'"
          v-model="maritalStatus"
          @selectValue="lifeStyle = $event"
        />
        <iconInput :title="'پست الکترونیک'" :type="'email'" v-model="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="55"
            height="55"
            viewBox="0 0 60 60"
          >
            <g
              id="Group_1email"
              data-name="Group 1email"
              transform="translate(-395 -1601)"
            >
              <circle
                id="Ellipse_7_copy_4"
                data-name="Ellipse 7 copy 4"
                cx="30"
                cy="30"
                r="30"
                transform="translate(395 1601)"
                opacity="0.059"
              />
              <image
                id="Layer_2711"
                data-name="Layer 2711"
                width="24"
                height="18"
                transform="translate(413 1623)"
                opacity="0.4"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAABHNCSVQICAgIfAhkiAAAAdVJREFUOE+tlTlIA0EUhndjYaWtlYJHY+kBWguCIJJA8ILESiwCggkIXnigGPFAlIiIRyOejQYLsRC0ULDQVhFEFEFbGwshrt+T2RDWuBt1Bz4yO/Pe/8/svNnohmFouq7Xa5rWBtngRntHZAPtuE4nBAtwDY9uqKNRAKXgF4MrKIMn8OF6+R8T3kY5+fuQDydiYMAWVKjBdkw2/2KCeDN5a/AM5xA0DUZ4mIVtqINJ6MXoIxMjhEVnFPrhGJqgA6JJA8SGifMwOAHdcAitjL/amZCTw/w6eGEeIuQkGO/5ZmAKMRmgvwxy6F4SbtKZEFfMeBxKIEScvJ6vZmugAir53YNcCJB8kGqCQC3PO/AGfuYvLPM/7yBlFXn0z6AIhmAMIQPxMP0pkMqrZujFukPHHahdyB2Jwb0yOeJXLlEDyL2RWu/DIPprA1YgBy3VJJUVBLnpXZCAaZDSXgSplnFMpIKSzemQpWwHYVUE7MoVoRliIjAHYXmFavfpz4AEqecBa4L1FVhWay4ohn6nk8EKAQ8EilHGTR18FXkttgYZKzoEpp7BqYqtkRvohgHiWehIxXnkU9EIuyA1feeGARqFIF9Tn67+cKSepdxkwo0mC11C+/YTiHrXHigXikMAAAAASUVORK5CYII="
              />
            </g>
          </svg>
        </iconInput>
        <iconInput :title="'شماره تلفن ثابت'" :type="'number'" v-model="phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="55"
            height="55"
            viewBox="0 0 60 60"
          >
            <g
              id="Group_1phone"
              data-name="Group 1phone"
              transform="translate(-795 -1601)"
            >
              <circle
                id="Ellipse_7_copy_3"
                data-name="Ellipse 7 copy 3"
                cx="30"
                cy="30"
                r="30"
                transform="translate(795 1601)"
                opacity="0.059"
              />
              <image
                id="Layer_2710"
                data-name="Layer 2710"
                width="24"
                height="24"
                transform="translate(813 1620)"
                opacity="0.4"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAtBJREFUSEu9lVmIjlEYx409+5K18LkgpZBsN0qYkGwNIUtkzAUyKEXGDZJS1lyQEs2FtWxlyRIujCVFrriwlexbZDd+P523TsdnjJo89et8z3nPef7nfb7nOW9BrX+z5mH52+puK8iz0Ll+MBgGQXfoCs2StYrcg7tQARfhehovFmjFwwUwG3JhYSXj4xDoCeOXMF+fsX0Q7siYxbnP712wFV67NnswM0x6SgMehBNwJVuYnizyW/LbNx0FRaDgO5gP5QrMhR0h8DLGvfA1CmDeP8OnRKQhfgOI/496+FNhHXSAYgUeho3m/VkS5Dj+6DCniCfTfFODa8dgbLKvHf41qFTAPB+B8cmiOvjm3D/SP69FCOwyhd6Ah8oFse/J/sP446oS8ISmZR9MSTZnrumcDKbLN4zt/wo8R/pmcoLa+EOr+QbnWPcj2d8bv40pugyWWT5z01LYAPaJmzQP8wqWwHrwMPmsIl8nG+gs9IS24WSbGGdA3RDlG+NuWBzmnjLehkJ4GSvFArN4sDAEtlNXgfV8AfqDTWdJapblALgKQ2A5rASFb8Fm2OPCTGASv/fDixConNEKKYPVsC2IZ3k2JV4H82AFrAUbbBqY7tYwEQ5lAqdwvNxyEDfbHXw7uQvk62Sb1P+ih6cNZpPZO5dgRCbwCMfc9YkWekob7QyMjObjnydxhoMpjavIIvCO6qyADz/CUZiQBLJbH0BWPamOgTqBhRGbTTYGGinQDUzFRrDsYjuA4w05DM4nz+wR3841dnNsxlpkbAUsrdNQCluShb3wrZ4PYYN3lua9ZZDGYIVZorEZy9IuVKAEtoOll5VhvNh5q6opxFXkhTe9ij0epkQBy2wNWF6eNp/59SoOp/W59b8TbLB8NpBJP6NlCliv5vEG/PZN/UOAv017jfeFIgUsR3M/B7x2a8LsGd+wNL4q/Nw1qYnoxHgPvz67PwF9VaTDw3ru1AAAAABJRU5ErkJggg=="
              />
            </g>
          </svg>
        </iconInput>
        <iconInput :title="'شماره  همراه'" :type="'number'" v-model="mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="55"
            height="55"
            viewBox="0 0 60 60"
          >
            <g
              id="Group_1mobile"
              data-name="Group 1mobile"
              transform="translate(-1195 -1601)"
            >
              <circle
                id="Ellipse_7"
                data-name="Ellipse 7"
                cx="30"
                cy="30"
                r="30"
                transform="translate(1195 1601)"
                opacity="0.059"
              />
              <image
                id="Layer_2709"
                data-name="Layer 2709"
                width="18"
                height="24"
                transform="translate(1216 1620)"
                opacity="0.4"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAABHNCSVQICAgIfAhkiAAAAMdJREFUOE9jZIAAByDuA2JdIGaBihGi/gAVXAbiQiA+yAgkpIH4OhDzAvEzIP4BxApAzITDpH9A8QdAzAHEUkD8CYg1QQbFA/ECIJ4JxBlQzWuAdDAOg9YCxUOgcjOAdDrIDJBBBUDcD3XiBKgCkLgADoM+AMX/Q+XgenEZhMMMDOFRgwiH1GgYjYYRKJ+O5jWc6YA2WQRbUUs4KUJUgIrnNFhRCyr8rwExHxDDCn9iDEIu/DVA0Q8CdtByWw9Ik1IdXYSW9YcBdPda6JwNez0AAAAASUVORK5CYII="
              />
            </g>
          </svg>
        </iconInput>
      </div>

      <div         data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false" v-show="currentStep == 2" id="locationInfo">
        <iconInput :title="'کد  پستی'" :type="'number'" v-model="postalCode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="55"
            height="55"
            viewBox="0 0 60 60"
          >
            <g
              id="Group_1postalCode"
              data-name="Group 1postalCode"
              transform="translate(-395 -1781)"
            >
              <circle
                id="Ellipse_7_copy_6"
                data-name="Ellipse 7 copy 6"
                cx="30"
                cy="30"
                r="30"
                transform="translate(395 1781)"
                opacity="0.059"
              />
              <image
                id="Layer_2712"
                data-name="Layer 2712"
                width="24"
                height="24"
                transform="translate(413 1800)"
                opacity="0.4"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAaNJREFUSEu1lT0vBUEYhd1IaDSiVkskVL4qtYsaiULiB+ivSEgk/ASNhkh8FCpfrUIhQUKioFQpUJFoiOfIvMnu7GR3dl2TPJnZyc55z5y7M7fW8j9tDNkl+K41WV/CKzDsdC+aVSAp/IW4aIP6XwvUEVl2jiW6BwdwCFcwUrWAhBXFkHMr4VV4gB2YlXs4K1tg3DkOCSv2Hrg395qILVAkbN9Kyn1MAQkrisFAFCZqfcZ9XoEJF0WMsO9epk5t0o+oinAy+2se7Az81rACElYUAxFR+NHo2bJPubcCJwz0Sam9wgLoO/4MKQXmLPuMeyuwxWAa2hOLdWge4Q5uXX9J/xIoYO6VgsymmkXUyqyc9Ht0J95+ZtznFcl1bzvIS6LTic7Tz8EkHCcW5LqPKWBaowzOYRHW3aS5v+FZJzvYYk+ydvIG+zDjlArdl9mB3n2Cd+iFKPdlCxyxQPd+B2yCbkz/N8nEFBuRFq5Bwwlv0+dmb5XKFFD2u6DD2BXjvmxEyl53vZr+rXQRFrYyO9Bh/ACd+MLsq0SkNRsunqlC6+6FH2ymZ+c9Rp+nAAAAAElFTkSuQmCC"
              />
            </g>
          </svg>
        </iconInput>

        <div
          class="selectCooperationInput d-flex justify-content-between align-items-center"
        >
          <multiSelect
            :allow-empty="false"
            v-model="city"
            deselect-label="یک گزینه باید انتخاب شود"
            :options="cityOption"
          >
          </multiSelect>
          <label class="blackColor06">{{ "انتخاب شهر" }}</label>
        </div>
        <div
          class="selectCooperationInput d-flex justify-content-between align-items-center"
        >
          <multiSelect
            track-by="label"
            label="label"
            :allow-empty="false"
            v-model="province"
            deselect-label="یک گزینه باید انتخاب شود"
            :options="provinceAndCity"
          >
          </multiSelect>
          <label class="blackColor06">{{ "انتخاب استان" }}</label>
        </div>

        <div
          class="largeInput d-flex justify-content-between align-items-center width100"
        >
          <svg
          class="hiddenInMobile"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="209"
            height="60"
            viewBox="0 0 209 60"
          >
            <g
              id="Group_1location"
              data-name="Group 1location"
              transform="translate(-395 -1911)"
            >
              <rect
                id="Rounded_Rectangle_678"
                data-name="Rounded Rectangle 678"
                width="209"
                height="60"
                rx="30"
                transform="translate(395 1911)"
                fill="#b11116"
                opacity="0.059"
              />
              <image
                id="Layer_2713"
                data-name="Layer 2713"
                width="22"
                height="24"
                transform="translate(425 1929)"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAABHNCSVQICAgIfAhkiAAAAqlJREFUSEuNlWmITlEYx40tKR+GRnxQMqQMiuxblKIIWTOESbIXERKfSIiQLUmWLFkzoihF9i3K9sGW8mEmRPkkW34/3fN2uu6dd079ep/znHP/99zzLG9JdWnrBjmjEf4R0CvCrY8irmD/znq+JEe4gs0HoTd8jITUCC/yRA+hCl6kxdPCjdmwCtbCS5gNj3O+qCf+A9AF1sFG+BX2poU3s7AUNsB6+JkjGtxNMNbAatgGK7KE++G8DSthSxHB9PJyHJtgINxzMZy4GfYT+AKD4U/0ZFPs6TAg8d3h9yj8iPY0xL4JLaEHfA/C85lsh67wOnqgPXY1dIcPib8dv09hLLyP9nbCfg5LYG8QNgMMQt/UKa4zL4dFcCFZG8PvLngLQyH+uvvMDXpVEH7G5AYsjIR9ifdllnh/8TAOZoFxUSyM3RhDoJvCzTG+wRzw5GHMxdgDbeBTSriMeS0sgH3Rmjm9H1oo3ArjM0yG09GmCdhnkhMYmHgYYL9wIpyNFiZhn4KycBWvmFwCcziMthjvwLudkhI+ydy77gA10Zq5rL88CB9mYvAs4XgsY2JOPwAD5jCQfcDc3Zrab4mbVZVBeB6TnWD9f01tnsXc4IVuZe8weIdS+0qZu+YLdwRhg+F1nAADkjU6Js43OesG2kLqDDVxr1iMwyIplGWOQJY7tANP6z0XSlrb/hs6mXcdl2xd77DkvVvL2nL+1+HS3a0/vmtwGUyd+nQ3U3QkDIO74QRZjX4Ui+fgIphmhR6bOra927QbDePBdC2MvH8Qc9HiOA+VGeKKHodxYJGEPlJU2A2ewhNZWdMg/LcZi2NgZfpFft1/I+/EYaNl7sks05mJ02LS75fozxzFhH1oKhyBW4nCIH5ngDmfO+oj7MPDIbROq+5qXaKu/QViYpp2z4y9FgAAAABJRU5ErkJggg=="
              />
              <text
                id="انتخاب_روی_نقشه"
                data-name="انتخاب روی نقشه"
                transform="translate(465 1945)"
                fill="#b11116"
                font-size="18"
                font-family="YekanBakh-Medium, Yekan Bakh"
                font-weight="500"
                letter-spacing="-0.01em"
              >
                <tspan x="0" y="0">انتخاب روی نقشه</tspan>
              </text>
            </g>
          </svg>
          <input
            type="text"
            id="address"
            placeholder="اتوبان تندگویان , بلوار حمدی نژاد , خیابان شقایق سوم , پلاک 38 , واحد 2"
            v-model="address"
          />
          <label for="address">نشانی دقیق</label>
        </div>
      </div>
      <div         data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false" v-show="currentStep == 3" id="fileInfo">
        <div
          class="largeInput d-flex justify-content-between align-items-center width100"
          @click="showFileSection"
        >
          <b-form-file
            id="filefromUser"
            v-model="file"
            :state="Boolean(file)"
          ></b-form-file>

          <svg
          class="hiddenInMobile"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="206"
            height="60"
            viewBox="0 0 206 60"
          >
            <g
              id="Group_1upload"
              data-name="Group 1upload"
              transform="translate(-395 -2081)"
            >
              <rect
                id="Rounded_Rectangle_678"
                data-name="Rounded Rectangle 678"
                width="206"
                height="60"
                rx="30"
                transform="translate(395 2081)"
                fill="#b11116"
                opacity="0.059"
              />
              <image
                id="Layer_2715"
                data-name="Layer 2715"
                width="32"
                height="26"
                transform="translate(435 2098)"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAABHNCSVQICAgIfAhkiAAAAuxJREFUSEvVllmIT1Ecx+dvX2OGiAcie3iRKZQtnmSkeDENNamZLFkaa4pkCw92pTAaJEUpTyQTsmQplEgyHiwl2WXsn2/9jk53/veee2e8OPXpnHvO+f3O9yz3d07uTGG3goypGf1HQBF0hA7QBi7A44y+CnIZBGjAcpgHfWIGuk79UTgBb9KISStgJs6qoZ05/U3+BO7ADxgKg6CVtX8kn26rkqgjjYCleNgOOXgGi6AW3kc8t+B7GmyzFfpGPsdWI1ZESMAqLDeZ9UHyJaDZJaXWNC6H9aCVkuDdcQZJAgZgdB+0rHKomWVJa+m8DrRF/aEun3GSgHMYTIYrMA5+ZRnd+h4hnw37YH4WAWNs4C/kw0EHrjGpC0YvTLz+nFdRJ3Er4Pa+xmbQmMGdzUkK+ou0CgujKxkn4Cwdp8Bi2NmU0bGdBOfNR5352+WE5BOgA3MDCmEsXG6iAJkreK2BHubrNPksqPcFjKdiI4y2TvXkXeHTPxAgFwrhU0EHsxMoYpY5ASV8aK/0Dz+Ha6BweioweDHtCkBXM4gcZv3bkxdLQE8KT0H/+xbQ/6soFkqlNhvNbC4cChl47VspL4MaCXAfmu2MlE7c4M2tvyJeFhGD6f8A7knAQwoDQcHmUgoB0cGdSRYROoyKD58lQBdML9DD4HVAgFZIZ0Mz11atBp0bxY3NIBFlcCzgR2H+EdyVAEW5vjAKdJ8npX40XoT9oEvqqwloS14JK2ACaFWT0koTfFgCdvChG+sAVAQM1dwZ3lk/X4DKflucq9403AaF6RIJUKxXhX4nhco9KUS4LlEBIdORdKiGIXAcSl0cUKTaa9a3yGtB8SCadK//9CrjBCywCbmu3Slo8Imgh40mrJv2rR8JdW0qDrhwmW822msN6lKcAFcf9fGdig2g86N3QoNHqV64iv/aFqmWWj9VOUOrjBOgx0tLz/Al5Zug1f3gOww9yfKtgl+X9Qw08PffC3BLHd2a0Mr9bf8D3iWuYTp0gMEAAAAASUVORK5CYII="
              />
              <text
                id="انتخاب_کنید"
                data-name="انتخاب کنید"
                transform="translate(486 2115)"
                fill="#b11116"
                font-size="18"
                font-family="YekanBakh-Medium, Yekan Bakh"
                font-weight="500"
                letter-spacing="-0.01em"
              >
                <tspan x="0" y="0">انتخاب کنید</tspan>
              </text>
            </g>
          </svg>
          <input
            disabled
            type="text"
            placeholder="فایل مورد نظر خود را انتخاب کنید         JPEG , WORD , PDF"
          />
          <label for="">آپلود کنید</label>
        </div>
        <div
          id="skil"
          class="width60 d-flex align-items-center justify-content-between"
        >
          <input
            placeholder="برای مثال     برنامه نویسی وب"
            type="text"
            v-model="capabilities"
            id="skillInput"
          />
          <label for="skillInput">آیا دارای مهارت یا تخصص خاصی هستید ؟</label>
        </div>
        <selectionInput
          :title="'تحصیلات'"
          v-model="educations"
          @selectValue="education = $event"
        />
        <div
          v-if="!newRow"
          class="width100 insertRow d-flex justify-content-end"
        >
          <button
            @click="newRow = true"
            class="d-flex justify-content-between align-items-center"
          >
            <p class="d-flex flex-direction-column align-items-end">
              <span class="blackColor06">افزودن سطر جدید</span>
              <span class="blackColor04">تحصیلات و توانایی های اجرایی</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="55"
              height="55"
              viewBox="0 0 69.88 69.87"
            >
              <g
                id="Group_1plus"
                data-name="Group 1plus"
                transform="translate(-1475.12 -2381)"
              >
                <rect
                  id="Rounded_Rectangle_1148"
                  data-name="Rounded Rectangle 1148"
                  width="69.88"
                  height="69.87"
                  rx="20"
                  transform="translate(1475.12 2381)"
                  fill="#f0f0f0"
                />
                <image
                  id="Layer_2478_copy_2"
                  data-name="Layer 2478 copy 2"
                  width="22"
                  height="22"
                  transform="translate(1499 2405)"
                  opacity="0.302"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAFdJREFUOE9j/P//PwMhwMjI+ACoRh6q7iFQjwJBPaMGw4KIcTQohnBQAJ0OSvyEgDRQAQtU0R8g/ZSQBkagAsJZj5ApWORpajBtgmI0gwzhDDIaeTSPPAAcIJefug+DdgAAAABJRU5ErkJggg=="
                />
              </g>
            </svg>
          </button>
        </div>
        <input
          v-else
          class="width100"
          id="newSkill"
          type="text"
          placeholder="افزودن مهارت جدید"
        />
      </div>
      <div         data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false" v-show="currentStep == 4" id="lastStep">
        <selectionInput
          :class="{ disableInput: insurance == false }"
          :title="'مدت به ماه'"
          v-model="monthInsurance"
          @selectValue="mounth = $event"
        />
        <selectionInput
          :title="'مدت به سال'"
          :class="{ disableInput: insurance == false }"
          v-model="yearInsurance"
          @selectValue="year = $event"
        />
        <div
          id="insuranceBox"
          class="width30 d-flex flex-direction-column align-items-end"
        >
          <p class="blackColor06">آیا سابقه پرداخت حق بیمه دارید ؟</p>
          <div class="d-flex">
            <div class="d-flex align-items-center">
              <span class="blackColor04">خیر,ندارم</span>
              <button
                @click="
                  insurance = false;
                  notinsurance = true;
                "
                :class="{
                  selectedButton: notinsurance == true,
                  unSelect: notinsurance == false
                }"
              >
                <a class="selected"></a>
              </button>
            </div>
            <div class="d-flex align-items-center">
              <span class="blackColor04">بله,دارم</span>
              <button
                @click="
                  insurance = true;
                  notinsurance = false;
                "
                :class="{
                  selectedButton: notinsurance == false,
                  unSelect: notinsurance == true
                }"
              >
                <a class="selected"></a>
              </button>
            </div>
          </div>
        </div>
        <div id="descriptionBox" class="width100">
          <label for="description"
            >اگر توضیح خاصی مد نظر دارید یادداشت کنید . . .</label
          >
          <textarea
            class="width100"
            id="description"
            v-model="description"
            placeholder="برای مثال     یکی از درخواست های خود و محیط کار پیشنهادی را شرح دهید"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
    <div        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true" id="buttons" class="d-flex width80 align-items-center">
      <rounded-button
        v-if="currentStep == 4"
        @buttonClicked="sendCoopeartion()"
        :type="'button'"
        :title="'ثــبت نهایــی اطلاعــات'"
        :buttonType="'button'"
      />
      <rounded-button
        v-else
        @buttonClicked="nextStep('f')"
        :type="'button'"
        :title="'مرحله بعد'"
        :buttonType="'button'"
      />
      <button
        :class="{ disableButton: currentStep == 1 }"
        @click="nextStep('b')"
        id="backStep"
      >
        <span> بازگشت به مرحله قبل </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="54"
          height="54"
          viewBox="0 0 54 54"
        >
          <g id="arrow" data-name="arrow" transform="translate(-993 -3096)">
            <circle
              id="Ellipse_2"
              data-name="Ellipse 2"
              cx="27"
              cy="27"
              r="27"
              transform="translate(993 3096)"
              fill="#efefef"
            />
            <image
              id="Layer_641"
              data-name="Layer 641"
              width="19"
              height="20"
              transform="translate(1010 3113)"
              opacity="0.302"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAABHNCSVQICAgIfAhkiAAAARxJREFUOE+t1D9LQlEcxnFFMBRBei+CgZtUIqEgIuQQBM419SqabAwCN3FSHDRwaQgHcdOxzQZpEkEcatDvI/fCxdB777ke+HAPeH4Px/MvHHJvQ4acoYD5seFh96zQmDEpfOESs0M1XsLOKe7jwgpSoIL/NS9hKkqgiyx+cI3JfprXMNXF0UYOC+Qxcgb6CVNdFE2UsUIRH3ag3zDVRfCGe6xRwkA/mITZdXU6j/hFVUtgGmYHPtN5wh8qCts4FzFA//vkYaaT0URe8OD8myZh2tFX1KwNuOXbMdkABTVwF/Ro6NC2rLO15HsDvSq75mdmuk4d6F4Guk5JAnrIQBf9CtP9xfYyMz1B70hDb1mgJ+ikj+Mns4nB9dneAls/NncWFI8cAAAAAElFTkSuQmCC"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import cooperationMixin from "@/libraries/cooperation.js";
import multiSelect from "vue-multiselect";
import { BFormFile } from "bootstrap-vue";
import simpleInput from "@/components/front/cooperation/simpleInput.vue";
import iconInput from "@/components/front/cooperation/iconInput.vue";
import selectionInput from "@/components/front/cooperation/selectionInput.vue";
import introduction from "@/components/front/shared/introduction.vue";
import datePicker from "vue-persian-datetime-picker";
import RoundedButton from "@/components/front/shared/roundedButton.vue";
export default {
  components: {
    introduction,
    simpleInput,
    iconInput,
    selectionInput,
    BFormFile,
    datePicker,
    RoundedButton,
    multiSelect
  },
  data() {
    return {
      education:"کارشناسی",
      insurance: true,
      notinsurance: false,
      fatherName: "",
      lastName: "",
      firstName: "",
      nationalId: "",
      nationalCode: "",
      newRow: false,
      gender: "مرد",
      address: "",
      description: null,
      mounth:1,
      year: 1,

      lifeStyle: "مجرد",
      province: {
        id: 1,
        label: "آذربايجان شرقي",
        cities: [
          "تبريز",

          "مراغه",

          "ميانه",

          "شبستر",

          "مرند",

          "جلفا",

          "سراب",

          "هاديشهر",

          "بناب",

          "تسوج",

          "اهر",

          "هريس",

          "هشترود",

          "ملكان",

          "بستان آباد",

          "ورزقان",

          "اسكو",

          "ممقان",

          "صوفیان",

          "ایلخچی",

          "خسروشهر",

          "باسمنج",
          "سهند"
        ]
      },

      city: "اروميه",
      cityOption: [
        "تبريز",

        "مراغه",

        "ميانه",

        "شبستر",

        "مرند",

        "جلفا",

        "سراب",

        "هاديشهر",

        "بناب",

        "تسوج",

        "اهر",

        "هريس",

        "هشترود",

        "ملكان",

        "بستان آباد",

        "ورزقان",

        "اسكو",

        "ممقان",

        "صوفیان",

        "ایلخچی",

        "خسروشهر",

        "باسمنج",
        "سهند"
      ],
capabilities:"",
      educationDegree: "کارشناسی",
      religion: "شیعه",
      brithDate: null,
      email: "",
      phone: "",
      mobile: "",
      file: null,
      postalCode: "",
      currentStep: 1,
      stepTitle: "اطلاعات فردی شما",
      stepText: "مرحله نخست",
      introduction:null,
      result:null,
      
    };
  },
  mounted() {
    this.$axios.get("Home/GetCooperationInfo").then(res=>{
      let step1 = JSON.stringify(res.data.data);
            let step2 = step1.replace(/_fa"/g, '"');
            let step3 = step2.replace(/_en"/g, '"');
                    this.result= JSON.parse(step3);
      this.introduction={
        image: this.$root.baseImageUrl+this.result.image,
        routes: [{ route: "", routeTitle: "درباره ما" }],
        title: "دربــــاره گــــروه مارگاریــــن",
        summary: this.result.title,
        text:this.result.text
         }
    });
  },
  mixins: [cooperationMixin],
  methods: {
    showFileSection() {
      document.getElementById("filefromUser").click();
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    nextStep(move) {
      if (move == "f") {
        if (this.currentStep == 1) {
          // 1
          this.stepTitle = "موقعیت مکانی شما";
          this.stepText = "مرحله دوم";
        } else if (this.currentStep == 2) {
          if (this.address.length < 10) {
            return this.$toast.error("آدرس را به صورت کامل وارد کنید");
          }

          this.stepTitle = "رزومه شما";
          this.stepText = "مرحله سوم";
        } else if (this.currentStep == 3) {
          this.stepTitle = "اطلاعات بیمه شما";
          this.stepText = "مرحله چهارم";
        }
        this.currentStep++;
        document
          .getElementById("stepBox")
          .scrollIntoView({ behavior: "smooth" });
      } else {
        if (this.currentStep == 2) {
          this.stepTitle = "اطلاعات فردی شما";
          this.stepText = "مرحله نخست";
        } else if (this.currentStep == 3) {
          this.stepTitle = "موقعیت مکانی شما";
          this.stepText = "مرحله دوم";
        } else if (this.currentStep == 4) {
          this.stepTitle = "رزومه شما";
          this.stepText = "مرحله سوم";
        }
        this.currentStep--;
      }
    },
    sendCoopeartion() {
      const pack = {
        name: this.firstName,
        lastName: this.lastName,
        fatherName: this.fatherName,
        shomareMelli: this.nationalCode,
        shomareShenasname: this.nationalId,
        gender: this.gender=='مرد'?'male':'female',
        maritalStatus: this.lifeStyle,
        birthDate: this.brithDate,
        religion: this.religion,
        phone: this.phone,
        mobile: this.mobile,
        email: this.email,
        province: this.province.label,
        city: this.city,
        pstalCode: this.postalCode,
        address: this.address,
        file: this.file!=null?this.file:"",
        education: this.education,
        capabilities: this.capabilities,
        yearInsurance: this.year,
        monthInsurance: this.mounth,
        extraDescription: this.description
      };
      console.log(pack)
      this.$axios.post("Cooperation", JSON.stringify(pack), {
                        headers: {
                            // Overwrite Axios's automatically set Content-Type
                            "Content-Type": "application/json"
                        }
                    })
                    .then((response) => {
                        
                        this.$toast.success(response.data.message);
                        this.$router.push("/")
                 
                    })
                    
    }
  },
     metaInfo() {
    return {
      title:  this.$cookie.get("ltrTheme") ? "cooperation - margarin" : "مارگارین - همکاری با ما",
      meta: [
        {
          name: "description",
          content: this.result ? this.result.text : false
        },
        {
          property: "og:title",
          content:  this.$cookie.get("ltrTheme") ? "cooperation - margarin" : "مارگارین - همکاری با ما"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  watch: {
    province(newValue) {
      this.provinceAndCity.forEach((item) => {
        if (item.id == newValue.id) {
          this.cityOption = item.cities;
          return (this.city = item.cities[0]);
        }
      });
    }
  }
};
</script>
<style scoped>
.disableInput {
  opacity: 0.3;
  pointer-events: none;
}
button.unSelect {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 30px;
  margin: 0 5px;
}
button.selectedButton {
  background: white;
  margin: 0 5px;
  border-radius: 30px;
  padding: 2px;
  border: 2px solid #0000004d;
}
button.selectedButton .selected {
  width: 25px;
  height: 25px;
  background: var(--backgroundButton);
  border-radius: 30px;
  display: block;
}
#stepBox button svg circle {
  fill: white;
}

#stepBox .activeStep svg circle {
  fill: var(--color-theme);
}
#stepBox .activeStep .firstSvgStep circle {
  fill: transparent
}
#locationInfo .selectCooperationInput,
#fileInfo .selectCooperationInput,
#lastStep .selectCooperationInput {
  width: 30%;
  margin-bottom: 30px;
  padding: 22px 30px;
}
#locationInfo,
#fileInfo,
#lastStep {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
#filefromUser__BV_file_outer_ {
  position: fixed;
  top: -100px;
}
</style>
