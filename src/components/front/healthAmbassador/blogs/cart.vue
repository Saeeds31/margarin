<template>
  <router-link class="blogCart" to="/">
    <div class="innerContent width100">
      <img class="width100" :src="article.image" alt="" />
      <div class="content">
        <p class="category width80 margin-auto">{{ article.category }}</p>
        <h5>{{ ` منتشر شده در تاریخ ${article.date}` }}</h5>
        <h1 class="width80">{{ article.title }}</h1>
        <div class="breaker"></div>
        <div class="detail">
          <span> {{ article.comment }}نظر </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <image
              id="Layer_25611"
              data-name="Layer 25611"
                width="18"
            height="18"
              opacity="0.502"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAjBJREFUSEu1ls1LVUEYh70uUgQjRfODUis1woUmIgiKBIEQim0iSUVMkUQR9B8RFUQRBEFdtRAXLoxWoi20dKEiUVh+oCiU+b2p6/ODOXA83nuu3Xt84WHm3nnP+5uZM/O+x+f3+6NczMdYFjyFNPhr+Ed7BkuwBvod0HxBBOJNUAVOcJsBY4ewAF/g2OkbSEAzrYc447xvHv5OqxVFG+RXDHeN3zntKGzZRZwC9xisg1j4CjOwGWIFWYyXwSO4ImIXyMShFm7BIkyC6wuyCWtl1VDgFLEEYhjoNDOfp536j+CWjkSqoNCI9NKeWgIl/KiAb6B9DNckUgOP4QPMSkAvrQPuwAishxvdPJdB+xZ+Q68E8ui8gh0YjDC49XgrnRQYk8BrOk9gAnRx7KYTlR1CNNC2FvFMJaxKwAoyzB8bHgmkEucd/JRAA50HMATbHm2RJbAhgSaC3ocB2L0JgRaCpkM/7Hm8RZtawRuC5sJ7WPZIQDnqBaxJoJTOc5iDaY+2qI04yTBuvwdKbuMeCOjA6OAcQI8ElEGb4Rcof0RiShU69sqsH2FGArfpdMEf6I4guoK/hHxQ2u6DEwnoiOqo6pLpsoVjrum6nIjPYAU+meU9pD2CzxAq+amO6KDkmJlfqmpaQSMDcgpmKpmqEc40ond3rZLZjmOSia4Xrdr7w4iqQqnCuZnSsoq+quCp01ErUPFW7lBQOdtNtVlfFpqtvi4SQfut7bM+BpRNg5bWC2wsw1QVRAjJAAAAAElFTkSuQmCC"
            />
          </svg>

          <span> {{ article.like }}لایک </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
             width="18"
            height="18"
            viewBox="0 0 24 22"
          >
            <image
              id="Layer_25601"
              data-name="Layer 25601"
            width="18"
            height="18"
              opacity="0.502"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAABHNCSVQICAgIfAhkiAAAAl1JREFUSEulldnLT0EYx/3sa/Yl2SIl+1YuLBe4kZ1XKVshN24U+S9cuHBlT3iVC1FeFy6RXIheyh69sha9uLDl5/OpmTq/0znnNzL1aZ6ZeWa+M3PmeU6tXq93yZSR2PNhIPSGDngCr7JOGXsS9mQYC9/hE9yH19GnFgS60bEKZkOtYLG79LXBrzDWnXolzCnwdcftcEX/KLCaxjz4CTfhJXSF8bAQeoRdnQoLbgtj+t+CFxn/RcH/HvUlBaZgbA6LH6P+kNvVMNpbYRA8AHc4A77AGfiY8x9Oezf0glYFNmDMhGtwO+ccmyMwdoVJ9v2AE/C+xN/v6JW3K3AAoz8chs8lE+z2g24J4+eon1X4DmBsP3xVYB+Gxz9kR8Ukh0aH8TdN/PoyfhA6FdiJMQ7OwtMmE1OHfbqetkOBBRgrwF35kf+krlLi5+vbA6OgTQFjYC8MgTtw9T8F1jB/Lhh0R2IcGIk7wACqek3NtI2B5fAbTscripOmY2wMjfPUpoh/KVNx3hQmXKR+qB1PEBdagrEUjFDf+btEhTHhBoz463AjzssL2L8eZoGR6ke3riqDGTRy+4E563LWuUjAj74dzENv4WQ4UZGIGdcINz08B596wyssEnAhA8WJQ+ExtEJDXqftRnzrE8H8dRxMIQ2lTEAnF/fofcAc5evKlrU0TNff4Ch05he3XSXg+AQwNbtb48M4sSyGZeD/wSssTR3NBFzMn9A68G59vj2hJQhdoH5UtPPYlyKgr0/XJ+wde5rkgEwV8DfqrqeFnSWnlFQB13XX5hlP4f85KSn+BX4Us9EgP2iSAAAAAElFTkSuQmCC"
            />
          </svg>

          <span>
            زمان آموزش
            {{ article.time }}
            دقیقه
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
         width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <image
              id="Layer_25581"
              data-name="Layer 25581"
              width="18"
            height="18"
              opacity="0.502"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAdtJREFUSEu1lr0rhVEcx11vkUwYsIoJxWDyloVBZCObQcmCgT+B5VqkDDaZJDJQkrcoxcCmZBEGDJLIy70+3zqPnue59zn3uXFPfTrnPufl+zu/3zm/cyPxeDzLUoroq4QKKDe1ht/BvalvqV+D1ogECGQzoRlaIMc1+d20C1zfvmkfwCHE/ELJBMoY1Gssf6O+AFkpq5/MAiVmN9pdHRSaMWvUD24Rv0A9nd2QC1ewDi9B2zffi6l7oAq+YAPOnTluAVk+DArKFpylWNjf3ciHTojAgrMTR0A+HwJtWRYELa5gq8hdyYpE5AG5dBFijkArP9pBblmyWD5m+mYtYwbpk7t2YV8COorj8AHzYPP5lFl42iKgmIxAPkQlUE1jAE5g0zJRXWEENK4LmmBZAm00xCroSNpKWAEd3T7Yk0A/jRqYg8d/EihlnVG4lMAEjTyYAWveMC7SzY6CLmFQ0VGdhM90BRQrxewZVuAmQMEjkI6LtFMFsAGUd3bgOMnOPS5qY4AIE2TH4FoaulA6ittw5NuJJ8jpHFP3Okp4HXAK1z4BzzFN56JZ4vrblXDR1BM2VYQRSEgVmhQ22aUSCEx2mpjRdO1YltEHxxHJ6JPpiGT00XcH8s9/W34AK03JS528SzUAAAAASUVORK5CYII="
            />
          </svg>
        </div>
      </div>
      <div class="backgroundGradient"></div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    article: Object
  }
};
</script>
