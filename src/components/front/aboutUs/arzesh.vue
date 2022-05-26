<template>
  <div id="fourSection" class="graphic-container">
    <div class="center-circles-container">
      <!--  single    -->
      <div class="single">
        <div class="circle one">
          <div class="dot"></div>
          <div class="icon">
            <img src="@/assets/front/images/moshtari.png" alt="imageArzesh" class="imageArzesh">
          </div>
          <div class="content-container">
            <div class="line"></div>
            <h2>مشتریان</h2>
            <div class="content">
              <h3></h3>
              <p class="preWrap">
                جلب اعتماد و احترام به مشتریان
                <br />
                خلق نوآوری های فراتر از انتظارات مشتریان
                <br />
                تاکید بر حفظ و پایداری مشتریان
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--   double   -->
      <div class="double">
        <div class="circle two">
          <div class="icon">
            <i class="far fa-building">2</i>
          </div>
          <div class="content-container">
            <div class="line"></div>
            <h2>جامعه</h2>
            <div class="content">
              <h3></h3>
              <p class="preWrap">
                تعهد به افزایش سطح سلامت جامعه
                <br />
                رعایت الزامات قانونی در تولید محصولات
                <br />
                رقابت حرفه ای و اخلاقی با سایر رقبا
                <br />
                پیشرو در طراحی و تولید محصولات جدید
              </p>
            </div>
          </div>
        </div>
        <div class="circle three">
          <div class="icon">
                        <img src="@/assets/front/images/jame.png" alt="imageArzesh" class="imageArzesh">

          </div>
          <div class="content-container">
            <div class="line"></div>

            <h2>جامعه</h2>
            <div class="content">
              <h3></h3>
              <p class="preWrap">
                تعهد به افزایش سطح سلامت جامعه
                <br />
                رعایت الزامات قانونی در تولید محصولات
                <br />
                رقابت حرفه ای و اخلاقی با سایر رقبا
                <br />
                پیشرو در طراحی و تولید محصولات جدید
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--   double   -->
      <div class="double">
        <div class="circle four">
          <div class="dot"></div>
          <div class="icon">
            <i class="far fa-building"></i>
          </div>
          <div class="content-container">
            <div class="line"></div>
            <h2>سایر ذینفعان</h2>
            <div class="content">
              <h3></h3>
              <p class="preWrap">
                حفظ و صیانت از سرمایه های مادی و معنوی شرکای تجاری
                <br />
                التزام به سودآوری پایدار و بلندمدت
                <br />
                شفافیت و صداقت در انتقال اطلاعات به ذینفعان
              </p>
            </div>
          </div>
        </div>
        <div class="circle five">
          <div class="icon">
            <i class="fa fa-user-plus"></i>
          </div>
          <div class="content-container">
            <div class="line"></div>
            <h2>کارکنان</h2>
            <div class="content">
              <h3></h3>
              <p class="preWrap">
                شایسته سالاری و استفاده از نیروهای متخصص و وفادار
                <br />
                تاکید بر اتحاد، همدلی، مشارکت و کارگروهی
                <br />
                تعهد به تعالی، پیشرفت و ایجاد انگیزه در کارکنان
                <br />
                تعهد به فراگیری آموزش و ثبت و انتقال دانش
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--  single    -->
      <div class="single">
        <div class="circle six">
          <div class="dot"></div>
          <div class="icon">
                                    <img src="@/assets/front/images/zinaf.png" alt="imageArzesh" class="imageArzesh">

          </div>
          <div class="content-container">
            <div class="line"></div>
            <h2>سایر ذینفعان</h2>
            <div class="content">
              <h3></h3>
              <p class="preWrap">
                حفظ و صیانت از سرمایه های مادی و معنوی شرکای تجاری
                <br />
                التزام به سودآوری پایدار و بلندمدت
                <br />
                شفافیت و صداقت در انتقال اطلاعات به ذینفعان
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --gap: -200px;
  --circle-size: 200px;
  --circle-size-small: 130px;
  --color-1: #f7941e4d;
  --color-2: #f7941e96;
  --color-3: #f7941e82;
  --color-4: #f7941eb0;
  --color-5: #f7941ed6;
  --color-6: #f7941e;
}
body {
  font-family: "Poppins", sans-serif;
}
.graphic-container {
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin: 0 0 100px;
}
.center-circles-container {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
  height: 100%;
  width: 100%;
}

.single {
  gap: 20px;
}
.double {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.double:nth-child(even) {
  flex-direction: column-reverse;
}
.circle {
  width: var(--circle-size);
  height: var(--circle-size);
  background: #fff;
  border-radius: 50%;

  display: grid;
  place-items: center;
  position: relative;
}

.icon i {
  font-size: 3rem;
}
.content-container {
  position: absolute;
  max-width: 200px;
  min-width: 200px;
  width: 100%;
}
.content p {
  font-size: 15px;
}
.content-container h2 {
  position: relative;
  padding: 0 10px;
}
/* arrow heading border */
.one .content-container h2::before,
.one .content-container h2::after,
.two .content-container h2::before,
.two .content-container h2::after,
.five .content-container h2::before,
.five .content-container h2::after {
  position: absolute;
  content: "";
  width: 2px;
  height: 22px;
  background: teal;
  left: -6px;
}
.one .content-container h2::before,
.two .content-container h2::before,
.five .content-container h2::before {
  top: -2px;
  transform: rotate(30deg);
}
.one .content-container h2::after,
.two .content-container h2::after,
.five .content-container h2::after {
  bottom: -2px;
  transform: rotate(-30deg);
}
.three .content-container h2::before,
.three .content-container h2::after,
.four .content-container h2::before,
.four .content-container h2::after,
.six .content-container h2::before,
.six .content-container h2::after {
  position: absolute;
  content: "";
  width: 2px;
  height: 22px;
  background: teal;
  right: -6px;
}
.three .content-container h2::before,
.four .content-container h2::before,
.six .content-container h2::before {
  top: -2px;
  transform: rotate(-30deg);
}
.three .content-container h2::after,
.four .content-container h2::after,
.six .content-container h2::after {
  bottom: -2px;
  transform: rotate(30deg);
}

/* different content elements */
.two,
.four {
  width: var(--circle-size-small);
  height: var(--circle-size-small);
}
.two i,
.four i {
  color: #fff;
  font-size: 2.5rem;
  opacity: 0;
}
.one .content-container {
  left: 0;
  bottom: var(--gap);
  text-align: left;
}
.two .content-container {
  left: 80px;
  bottom: var(--gap);
  text-align: left;
  opacity: 0;
}
.three .content-container {
  right: 200px;
  top: var(--gap);
  text-align: right;
}
.four .content-container {
  right: 20px;
  top: var(--gap);
  text-align: right;
  opacity: 0;
}
.five .content-container {
  left: 200px;
  bottom: var(--gap);
  text-align: left;
}
.six .content-container {
  left: 0;
  top: var(--gap);
  text-align: right;
}

/* lines */
/* bottom layer */
.one .line {
  position: absolute;
  width: 2px;
  height: 170px;
  background-color: var(--color-1);
  top: -150px;
  left: -30px;
}
.one .line::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 35px;
  height: 2px;
  background: var(--color-1);
}
.one .line::after,
.two .line::after,
.five .line::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 20px;
  height: 2px;
}
.one .line::after {
  background: var(--color-1);
}
.two .line::after {
  background: var(--color-2);
}
.five .line::after {
  background: var(--color-5);
}
.two .line {
  position: absolute;
  width: 2px;
  height: 90px;
  background-color: var(--color-2);
  top: -70px;
  left: -30px;
}
.five .line {
  position: absolute;
  width: 2px;
  height: 110px;
  background-color: var(--color-5);
  top: -90px;
  left: -30px;
}
/* top layer */
.three .line {
  position: absolute;
  width: 2px;
  height: 222px;
  background-color: var(--color-3);
  bottom: -100px;
  right: -30px;
}
.three .line::after,
.four .line::after,
.six .line::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 2px;
}
.three .line::after {
  background: var(--color-3);
}
.four .line::after {
  background: var(--color-4);
}
.six .line::after {
  background: var(--color-6);
}
.four .line {
  position: absolute;
  width: 2px;
  height: 222px;
  background-color: var(--color-4);
  bottom: -100px;
  right: -30px;
}
.four .line::before {
  content: "";
  position: absolute;
  right: 0px;
  bottom: 0;
  width: 20px;
  height: 2px;
  background: var(--color-4);
}
.six .line {
  position: absolute;
  width: 2px;
  height: 282px;
  background-color: var(--color-6);
  bottom: -160px;
  right: -30px;
}
.six .line::before {
  content: "";
  position: absolute;
  right: 0px;
  bottom: 0;
  width: 35px;
  height: 2px;
  background: var(--color-6);
}

/* dots */
.one .dot {
  position: absolute;
  top: 110px;
  right: -30px;
  width: 20px;
  height: 20px;
  background: var(--color-1);
  border-radius: 50%;
  box-shadow: -20px -110px 0 6px var(--color-1), -30px 80px 0 4px var(--color-1);
}
.four .dot {
  position: absolute;
  top: 130px;
  left: 0px;
  width: 20px;
  height: 20px;
  background: var(--color-4);
  border-radius: 50%;
  box-shadow: -22px -138px 0 10px var(--color-4),
    -70px 70px 0 0px var(--color-4);
}
.six .dot {
  position: absolute;
  top: -30px;
  left: 10px;
  width: 10px;
  height: 10px;
  background: var(--color-6);
  border-radius: 50%;
  box-shadow: -50px 50px 0 25px var(--color-6),
    150px 250px 0 10px var(--color-6);
}
/* circle colors */
.one {
  box-shadow: inset 0 0 0 20px var(--color-1), inset 0px 0px 12px 20px #989898;
}
.two {
  background-color: var(--color-2);
  transform: translateX(-20px);
}
.three {
  box-shadow: inset 0 0 0 20px var(--color-3), inset 0px 0px 12px 20px #989898;
  transform: translateX(10px);
}
.four {
  background-color: var(--color-4);
  transform: translateX(-20px);
}
.five {
  box-shadow: inset 0 0 0 20px var(--color-5), inset 0px 0px 12px 20px #989898;
  transform: translateX(10px);
}
.six {
  box-shadow: inset 0 0 0 20px var(--color-6), inset 0px 0px 12px 20px #989898;
}

/* h2 border colors */
.one .content-container h2 {
  border-top: 2px solid var(--color-1);
  border-bottom: 2px solid var(--color-1);
}
.two .content-container h2 {
  border-top: 2px solid var(--color-2);
  border-bottom: 2px solid var(--color-2);
}
.three .content-container h2 {
  border-top: 2px solid var(--color-3);
  border-bottom: 2px solid var(--color-3);
}
.four .content-container h2 {
  border-top: 2px solid var(--color-4);
  border-bottom: 2px solid var(--color-4);
}
.five .content-container h2 {
  border-top: 2px solid var(--color-5);
  border-bottom: 2px solid var(--color-5);
}
.six .content-container h2 {
  border-top: 2px solid var(--color-6);
  border-bottom: 2px solid var(--color-6);
}

.one .content-container h2::before,
.one .content-container h2::after {
  background: var(--color-1);
}
.two .content-container h2::before,
.two .content-container h2::after {
  background: var(--color-2);
}
.five .content-container h2::before,
.five .content-container h2::after {
  background: var(--color-5);
}

.three .content-container h2::before,
.three .content-container h2::after {
  background: var(--color-3);
}
.four .content-container h2::before,
.four .content-container h2::after {
  background: var(--color-4);
}
.six .content-container h2::before,
.six .content-container h2::after {
  background: var(--color-6);
}

/* 
@media (max-width: 992px) {
  .graphic-container {
    margin: 50px 0;
  }
  .center-circles-container {
    overflow: hidden;
    overflow-x: scroll;
    width: 1300px;
  }
  .double {
    flex-direction: row;
  }
  .double:nth-child(even) {
    flex-direction: row;
  }
  .two {
    transform: translateX(0px);
  }
  .three {
    transform: translateX(0px);
  }
  .four {
    transform: translateX(0px);
  }
  .five {
    transform: translateX(0px);
  }
}
media */
p.preWrap {
  text-align: right;
  font-family: "yekan-heavy";
  width: max-content;
}
div#fourSection h2 {
  font-family: "yekan-bold";
}
.six .content-container .content .preWrap {
  position: relative;
  right: 80px;
}
img.imageArzesh {
    width: 100px;
}
@media (max-width: 768px) {
  .circle.three,.circle.five{
    transform: unset !important;
  }
  .three .content-container{
    right: unset;
    left: -210px;
  }
  .six .content-container .content .preWrap {
    position: relative;
    right: unset;
  }
  .content p {
    font-size: 12px;
  }
  p.preWrap {
    width: unset;
  }
  :root {
    --gap: -200px;
    --circle-size: 150px;
    --circle-size-small: 110px;
  }
  .center-circles-container {
    flex-direction: column;
    align-items: flex-end;
    width: 90%;
    gap: 30px;
  }
  .one .line,
  .two .line,
  .three .line,
  .foure .line,
  .five .line,
  .six .line,
  .two,
  .one .dot,
  .six .dot,
  .four {
    display: none;
  }
  .one .content-container {
    left: -200px !important;
    top: 170px;
  }
  .six .content-container {
    left: -205px;
    top: 0;
  }

  .five .content-container {
    left: -200px;
    bottom: 0;
    text-align: left;
  }
}
</style>
