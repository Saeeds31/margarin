<template>
  <main v-if="contactUsData" id="contactUsSection">
    <introduction class="width80 margin-auto" :title="
        $cookie.get('ltrTheme')
          ? 'Contact Margarin '
          : 'تماس با  مارگاریــــن'
      "
      :summary="contactUsData.contactUsIntro.title"
      :image="$root.baseImageUrl + contactUsData.contactUsIntro.image"
      :routes="routes">
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-once="true"
        class="slotElements d-flex"
      >
        <contactWay
        v-if="$root.footerData"
          :title="$cookie.get('ltrTheme')?'Fax':'ارســــال فکــــس'"
          :value="$root.footerData.fax"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 60 60"
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
            <g
              id="Group_2444"
              data-name="Group 2444"
              transform="translate(-1203 -731)"
            >
              <circle
                id="Ellipse_4_copy"
                data-name="Ellipse 4 copy"
                cx="30"
                cy="30"
                r="30"
                transform="translate(1203 731)"
                fill="url(#linear-gradient)"
              />
              <image
                id="Layer_2402"
                data-name="Layer 2402"
                width="25"
                height="26"
                transform="translate(1221 749)"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAABHNCSVQICAgIfAhkiAAAAllJREFUSEtjZCAB/P//nwmovBaI04BYCovWvYyMjC7o4owk2MEAtCQLqH4qDj1/gOLaQEtuUWrJLqABrtgs+fnz520ODg4foNw3IH6CrAbDJ0DX6gEVZALxbqCr1iErBsqdBvJNsFny7du3K9zc3EFAuYdA/AvFEqBGdqAAF1TwA5DuAuISID4NtMQMKM8HkgOyPxFhiS9QzTugcmaoed+A+n4yAgWfAwUkoIK8QLoeZMmvX78usrOz2wDl90MtMSXCEm+gmrVIvn0OtEQKZMl/mNfOnj0rYGxsXAOyBOp9mCaQT8yBSk8SCC50S0D6mFAscXR0NNy7d28MExNTMbIlwEhlA0YqKCiQXYkSNWiOgscb0BJleliiPigt8Xvx4oUWMFGwoCfjz58/v9DR0ZmDHqTA4CLOJ3///pVta2vzr62tvZWYmCgDNBCU7DGAvr4+M1DNeqCEJEySaEtwpShsFqGLkWKJ4atXr1aKioryATWBig6Gf//+LQHlUWBKjAbxgcG0GYifAfkpSJkRlISJDi6F8vLyYAcHBwUfH5+FQMP+9vX1eQMNZCwoKNgCNIh58+bNcQcPHnzY2dm5jpmZWXjoBNfbt283CAgIfAO6Ogrk6g8fPuzj5OS8ByyKEgdNcEUDwxpUdl0GFt0++IoSslMXMAL/ADNb6rlz5664urruhFqCkbrIDq7169fHmJmZ7Zg4caLQvXv3+GGZC5gZWamWuojxPqlqMPIJqQYQox5mCah1oUqMBlLVAOuhB8B6yB3WkFAj1QBS1MMsUQBqYiNFIwlqfwEAu50qApI0/EQAAAAASUVORK5CYII="
              />
            </g>
          </svg>
        </contactWay>

        <contactWay
        v-if="$root.footerData"
          :title="$cookie.get('ltrTheme')?'Mobile':'شمــــاره تــــماس'"
          :value="$root.footerData.phone"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 60 60"
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
            <g
              id="Group_1444"
              data-name="Group 1444"
              transform="translate(-1485 -731)"
            >
              <circle
                id="Ellipse_4"
                data-name="Ellipse 4"
                cx="30"
                cy="30"
                r="30"
                transform="translate(1485 731)"
                fill="url(#linear-gradient)"
              />
              <image
                id="Layer_2399"
                data-name="Layer 2399"
                width="25"
                height="26"
                transform="translate(1503 749)"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAABHNCSVQICAgIfAhkiAAAAzZJREFUSEullm1oUmEUx3dnviwjoTBfAgU3mB+s9iFj64ObCSKYg4pBLGpQGBFBUY0W+5ARRRBFYF8iimpr9KU3myFGG2uMydoHe6MXXAOD3J1sUSsRddr/udw7rqabV4WHe55zznN+nnOfe56Hqin45XI5CVTbWPUERVGpQh+hc4q/AAAX5rcxlKw+juchgJ4LDcz3pxB4BxQbEOgh5DeQtxYEnITNDNth6DsFwH7D9zrWDhFIFJM7mHgg54oFgW0NTN2wnRMAIa7fsVZHILlEInFJLpdfhkjo//3gqIftYAWQGqyVM5DZ2dl+lUp1AuJbBNrIp2QyGVosFltgOw790Wg0eiscDr8ulVFTU5NFp9O5OTsg9QwklUr9kEqlmyGegvEsPwCC3tTr9ddgC0Kvx6LGlUoG3y88SCMDIQq/329xOp1iiK/4QQYHB7tisRjtdrsDRM9C5iEmSsEQ8m9RSCAQ6HQ4HDEYh/mLfT7ffqS/gDI85UG+LpcNfwORP7WUCQnW2to6o1AoXhZCzGZzXKPRMJmQdwLowDIQB2xnimZCIPxgnFMp/UrvpSoIgdpsNie2/N5sNvuepulu7MwrtbW1m7CBHszNzfVxWXPlzStXOZkQSEtLy26lUrkrmUx+DgaDF+12e69MJjPG4/En4+Pjj9vb2/uqyqTcMlUFIZlgFzokEsk+ksnY2JjHarX2knKRTKampvqbm5sfVQ2puFxer3dnR0dHVq1Wvyj8GBsaGj4ajcZJoaXKe/FsW7GiUbrr6upO84OxbeUkdtIn0lErLhfaxoBWqz2PQMMIpOVD2AZpwPOqSCQ6UvHump6evmEwGEgT/FasJAArYTsGm9DzhOl1zKEFyDNALkCmS0DqYTsgFILsYzgm2pjjNxQKbcGOuQ+Z9Ke84xfv6QO+7j2wteHddaXT6VXlbAAA/oyOjt5zuVwh7iJhwMJfCLR9cXHxLmq/jgSCPD8yMtKLNjKEKem869lRDofzyXCQ1dCIMBZMJlO9x+NhrkQ9PT3vIpFIGmISg9wFFBhrBRCy8P2ZdyViF8vxVLNQJiGMGYylg0gAhHEtBuH0MjYYyaLoLaZc2D+XdRXxQSHXfQAAAABJRU5ErkJggg=="
              />
            </g>
          </svg>
        </contactWay>

        <contactWay
        v-if="$root.footerData"
          :title="$cookie.get('ltrTheme')?'postal Code':'کـــد پستـــی'"
          :value="$root.footerData.postal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 60 60"
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
            <g
              id="Group_44444444444"
              data-name="Group 44444444444"
              transform="translate(-1203 -821)"
            >
              <circle
                id="Ellipse_4_copy_6"
                data-name="Ellipse 4 copy 6"
                cx="30"
                cy="30"
                r="30"
                transform="translate(1203 821)"
                fill="url(#linear-gradient)"
              />
              <image
                id="Layer_2708"
                data-name="Layer 2708"
                width="25"
                height="26"
                transform="translate(1221 839)"
                xlink:href="data:image/png;base64,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"
              />
            </g>
          </svg>
        </contactWay>

        <contactWay
        v-if="$root.footerData"
          :title="$cookie.get('ltrTheme')?'E-Mail':'پـــست الکـــترونیک'"
          :value="$root.footerData.email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="60"
            height="60"
            viewBox="0 0 60 60"
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
            <g
              id="Group_344444"
              data-name="Group 344444"
              transform="translate(-1485 -821)"
            >
              <circle
                id="Ellipse_4_copy_2"
                data-name="Ellipse 4 copy 2"
                cx="30"
                cy="30"
                r="30"
                transform="translate(1485 821)"
                fill="url(#linear-gradient)"
              />
              <image
                id="Layer_2401"
                data-name="Layer 2401"
                width="25"
                height="22"
                transform="translate(1503 841)"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAYAAAA1vze2AAAABHNCSVQICAgIfAhkiAAAA0FJREFUSEtjZICC////8wGZIjA+hfQbRkbGTzAzGIGGCwI5C4DYF4gZKTQc7mYgYxMQJwAt+wCyBGRBPJUMRzdmPtCSJJAlb4EyQiDZHz9+3OTg4FAFMpnItPQf0IxbQDM0QPr//fv3gZmZWRhkyX+QwJ8/f17x8PDY7dq1y8XGxqabiYmJkxSLgAZ+P3LkSKmbm9ueL1++HGJhYRED6Qf6RBJuCUjg1atXa52cnCry8/O1EhMTZwAVShJjEdCBr5cvX55RXl5+/ezZs7WSkpKR8EhnZFRBsQQqcWTZsmUxQMXSzc3Ns7i4uLTxWQQK4sbGxozbt29/WbBgwSRgaFgiqwf6RB2bJSA1d+7duxeUnJz8f/369RMEBAScsVn06dOnw2FhYQVWVlaCFRUVM9jY2FTQ1eGzBKT23devX8NERETuXLt2rURRUTEH2YDnz58v0tXV7Zg+fbpeUFDQVFAEY3MIIUtAen79/fs3ERg3By5cuJCsp6dXBxK8dOlSk4GBwcrjx497m5ubdwANYsMVpAQtAVrw6s6dO97q6upX+fj4uFesWOEDMgzo8uPa2trsTU1N/N7e3iuBQjgTCF5Lfv369WzChAkJQNe+W7169RSgb55mZ2fnHDhwQPjQoUNt/Pz8MkAxt/3790tYW1tvBcaHPEnB9fPnz3vV1dWJ79+//z1t2rQ57OzsWlADrgPzAyMwD4EzGxBcBAadD9CHsvX19YuB6pSJinhgkryWmZmZDEyKzD09PfOBGkElAD5w/+nTpx5VVVXcwEQwH5jk9fEm4W/fvl1KSkpK0dTU5AVqms/KyipHwAKY9KO3b996xMbGMq5cuXIuLy+vBUwCJU6AkfzWwcHBOSYmRi4lJWUuMEmKEmkBTNlLoCM9fXx8vu3evfsoLEnDLAEXkMAi7O+LFy9WiIuLewPDXIBEC2DK3wPjbAVQfypQgAXo8I/AxGEGyvHzgAKJZBqKVxuoLAQ6ugpkicDHjx9XApOkC1AHuUU8umX/Pnz4sDc+Pr5q06ZN72E1oYSLi4ukra0tuF6hFBw7duz9zp07v0DN+QizBOQDCSDmodQCNP0gi16g1+kgy5ipZNFfoDn/QGYBAEw8bmdwmZOrAAAAAElFTkSuQmCC"
              />
            </g>
          </svg>
        </contactWay>
      </div>
    </introduction>
    <section v-if="contactUs" class="mainContent width80 margin-auto d-flex justify-content-between">
      <cart
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
        :data="contactUs.location"
      >
        <template v-slot:image>
          <svg
            class="headerSvg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100"
            height="100"
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
                <stop offset="0" stop-color="#b0090e" />
                <stop offset="1" stop-color="#ce4a4e" />
              </linearGradient>
            </defs>
            <g
              id="asasasasasasasasasasasasasas"
              transform="translate(-595 -1041)"
            >
              <circle
                id="Ellipse_5"
                data-name="Ellipse 5"
                cx="50"
                cy="50"
                r="50"
                transform="translate(595 1041)"
                fill="#B0090E"
              />
              <g id="Grasdasdasdasdasdoup_1" data-name="Grasdasdasdasdasdoup 1">
                <image
                  id="Layer_2509"
                  data-name="Layer 2509"
                  width="47"
                  height="53"
                  transform="translate(622 1066)"
                  xlink:href="data:image/png;base64,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"
                />
              </g>
            </g>
          </svg>
        </template>
        <template v-slot:footer>
          <p class="footerDetail blackColor06">
            {{ $cookie.get("ltrTheme")?contactUs.location.body_en:contactUs.location.body_fa }}
          </p>
        </template>
      </cart>

      <cart
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        :data="contactUs.time"
      >
        <template v-slot:image>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="headerSvg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100"
            height="100"
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
                <stop offset="0" stop-color="#b0090e" />
                <stop offset="1" stop-color="#ce4a4e" />
              </linearGradient>
            </defs>
            <g
              id="Group_1asdasdasasssssssssssas"
              data-name="Group 1asdasdasasssssssssssas"
              transform="translate(-995 -1041)"
            >
              <circle
                id="Ellipse_5"
                data-name="Ellipse 5"
                cx="50"
                cy="50"
                r="50"
                transform="translate(995 1041)"
                fill="#B0090E"
              />
              <image
                id="Layer_2508"
                data-name="Layer 2508"
                width="52"
                height="53"
                transform="translate(1020 1066)"
                xlink:href="data:image/png;base64,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"
              />
            </g>
          </svg>
        </template>
        <template v-slot:footer>
          <p class="footerDetail blackColor06">
            {{ $cookie.get("ltrTheme")?contactUs.time.body_en:contactUs.time.body_fa}}
          </p>
        </template>
      </cart>

      <cart
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="true"
        :data="contactUs.social"
      >
        <template v-slot:image>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="headerSvg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100"
            height="100"
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
                <stop offset="0" stop-color="#b0090e" />
                <stop offset="1" stop-color="#ce4a4e" />
              </linearGradient>
            </defs>
            <g
              id="asdasdas_1asdasd"
              data-name="asdasdas 1asdasd"
              transform="translate(-1395 -1041)"
            >
              <circle
                id="Ellipse_5"
                data-name="Ellipse 5"
                cx="50"
                cy="50"
                r="50"
                transform="translate(1395 1041)"
                fill="#B0090E"
              />
              <image
                id="Layer_2505"
                data-name="Layer 2505"
                width="52"
                height="53"
                transform="translate(1420 1066)"
                xlink:href="data:image/png;base64,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"
              />
            </g>
          </svg>
        </template>
        <template v-slot:footer>
          <div class="d-flex footerSvg">
            <a
              v-if="$root.footerData"
              :href="$root.footerData.facebook"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="70.32"
                height="70.32"
                viewBox="0 0 70.32 70.32"
              >
                <g id="faceBook" transform="translate(-1344.68 -1282)">
                  <g
                    id="Ellipse_4_copy_3"
                    data-name="Ellipse 4 copy 3"
                    transform="translate(1344.68 1282)"
                    fill="rgba(179,153,102,0)"
                    stroke="rgba(0,0,0,0.08)"
                    stroke-linejoin="round"
                    stroke-width="4"
                  >
                    <circle cx="35.16" cy="35.16" r="35.16" stroke="none" />
                    <circle cx="35.16" cy="35.16" r="33.16" fill="none" />
                  </g>
                  <image
                    id="Layer_2507"
                    data-name="Layer 2507"
                    width="13"
                    height="24"
                    transform="translate(1373 1306)"
                    opacity="0.302"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAYCAYAAAAh8HdUAAAABHNCSVQICAgIfAhkiAAAAMVJREFUOE9j/P//PwMuwMjIyAyU0wRiESQ1zxixaQIqlgYqmgzEHkDMiWboTAxNQA22QEWbgZgfhwtQNQE1cAMVXgJiJZxuZmDA0FQAVNyPRwNICkPTcqBgBKmaQE7TxaJpGlDsNlT8EkpAAP10AyihjqbpATCEFZHFiNF0E6hJg3JN0AjcTsDzMGlPoK07GIepJlCyN4H6dDaQlkELlCdAfipU7AwwIN7QMZ6QMyGOZESlFDG0bDIDxgcXWjx9A3rhFLIYAHFomUbx6cL0AAAAAElFTkSuQmCC"
                  />
                </g>
              </svg>
            </a>
            <a
              v-if="$root.footerData"
              :href="$root.footerData.instagrm"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="70.32"
                height="70.32"
                viewBox="0 0 70.32 70.32"
              >
                <g id="instagramm" transform="translate(-1424.68 -1282)">
                  <g
                    id="Ellipse_4"
                    data-name="Ellipse 4"
                    transform="translate(1424.68 1282)"
                    fill="rgba(179,153,102,0)"
                    stroke="rgba(0,0,0,0.08)"
                    stroke-linejoin="round"
                    stroke-width="4"
                  >
                    <circle cx="35.16" cy="35.16" r="35.16" stroke="none" />
                    <circle cx="35.16" cy="35.16" r="33.16" fill="none" />
                  </g>
                  <image
                    id="Layer_2506"
                    data-name="Layer 2506"
                    width="24"
                    height="24"
                    transform="translate(1448 1306)"
                    opacity="0.302"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAhBJREFUSEutls8vHkEcxu1BkLigEeoiLqJaUhTxq6R1EtFbe9GTNCScxP/Qa+OmlzqIuLhw0Uok1SLaRgjx40wvDVIR0jq8Ps+bWXlNdt5315rkk8nMfOd5Zr6zO7teIpHISi2e5z2gXQnZtwYyN64I2UXv5Jaeb4BwHQMfQXWc8oPJA+huScSTgRFfu8OqXQv5x0AD2tu+wa97WLlttopBi0evcv4nTk7M3DHqChgybR1ukQxa4VsGgwXGP4Pymgvl8MbM9adKuBYGU7TaZNAJSw6DQ/qHYR6q4amJ26DegXaYgoeO+V3pDCT+BEphEp5ZIuu0++EMfkJZgElag1dMOAA9AHmOFZ6bXZVQL0cxUM57YDVg5bbOd5Oqr9Rt1qBzB6MELsKmY+V2dxUdL2HcGuh0nUG3yemnkAZviVO6ZsPuoJfAIohicEr8XFiDEQKV0ygp6iP+fVgDHdxzWIHGDGnSS9oBX+BFWAPFdcFv0GOa7zD5S79eviaYDohJ+x5IvN6I6yx0paQWrVyHewG6QoqjGij+CHTnKGX6CPlvs+78fXgNHxzimp/cQZjLTqudMYb6cule0qNs59zeRKsMCuE4YHtxu3RdF/gfHF1c9mUW12CZD06Hb1CDmkxy4qqa+ZfUdRjsJQ1U+C4/ppqAZjXvaCQxndc7iSd1A35bCuh/BFF/W/4zZwc9vRs35RrVFJWVYzvZogAAAABJRU5ErkJggg=="
                  />
                </g>
              </svg>
            </a>
          </div>
        </template>
      </cart>
      
      
      <cart
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        :data="contactUs.info"
      >
        <template v-slot:image>
         <span id="infoSvg">
         <svg width="60" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path fill="white" d="M30.088 12.073c0.328-0.636 0.6-1.5 0.313-2.38-0.333-1.021-1.256-1.704-2.735-2.016l-9.407-2-9.599-5.136c-0.104-0.057-1.036-0.541-2.063-0.541-0.76 0-1.416 0.265-1.896 0.76-0.448 0.469-0.719 1.115-0.801 1.928-0.089-0.005-0.177-0.011-0.265-0.011-1.453 0-2.199 0.609-2.568 1.12-0.579 0.791-0.647 1.859-0.219 3.176l3.531 10.824 0.339 9.38c0.057 1.625 0.959 3.38 2.797 3.38 0.348 0 0.713-0.068 1.093-0.197 0.437 0.739 1.224 1.64 2.484 1.64 0.885 0 1.767-0.473 2.609-1.416l6.813-7.6 9.041-5.708c0.197-0.125 1.927-1.265 1.864-2.973-0.025-0.855-0.484-1.6-1.333-2.229zM9.86 26.885l-3.105-9.511-0.416-11.796 11.099 2.364 9.027 4.828-7.505 8.369zM27.172 10.016c0.724 0.151 0.943 0.369 0.959 0.416 0.025 0.084-0.027 0.261-0.115 0.459l-2.167-1.156zM6.599 2.391c0.36 0 0.813 0.193 0.937 0.255l2.319 1.24-3.595-0.765c0.021-0.427 0.109-0.647 0.161-0.699 0.016-0.015 0.084-0.031 0.177-0.031zM3.12 6.235c-0.26-0.797-0.125-1.032-0.12-1.037 0.027-0.031 0.219-0.129 0.636-0.129 0.109 0 0.208 0.005 0.291 0.015l0.147 4.068zM7.104 27.088l-0.036-1.061 0.681 2.099c-0.072 0.020-0.156 0.036-0.233 0.041-0.199 0-0.391-0.667-0.412-1.079zM11.921 28.984c-0.552 0.62-0.823 0.625-0.828 0.625-0.077 0-0.244-0.177-0.4-0.421l2.427-1.532zM28.287 15.255l-1.927 1.219 2.26-2.52c0.328 0.229 0.416 0.396 0.416 0.437 0.005 0.177-0.385 0.625-0.749 0.864z"/>
</svg>
</span>
        </template>
        <template v-slot:footer>
          <p class="footerDetail blackColor06">
            {{ $cookie.get("ltrTheme")?contactUs.info.body_en:contactUs.info.body_fa}}
          </p>
        </template>
      </cart>


    </section>
    <section
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
      class="contactUsTitle width80 margin-auto"
    >
      <h1 class="blackColor06">{{ $cookie.get("ltrTheme")?"Sending a message to the margarin":'ارســــال پــــیام بــــه مـــارگارین'}}</h1>
      <h3 class="blackColor04">{{ $cookie.get("ltrTheme")?"Respond in the shortest time":'پاسخگویــــی در کمتریــــن زمــــان'}}</h3>
      <double-line class="hiddenInMobile width20 margin-auto" />
    </section>
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      id="contactUsForm"
      class="width80 margin-auto"
    >
      <div id="formTop" class="width100 d-flex justify-content-between">
        <div
          class="contactUsInput d-flex justify-content-end align-items-center"
        >
          <p v-if="!writeEamil" @click="showSection('writeEamil', true)">
            <span class="blackColor06">{{$cookie.get("ltrTheme")?"E-mail":'پست الکترونیک'}}</span>
            <span class="blackColor06" v-if="email">{{ email }}</span>
          </p>
          <input
            v-else
            id="writeEamil"
            @keydown.enter.tab="showSection('bodyMessage', false)"
            @blur="writeEamil = false"
            v-model="email"
            type="text"
          />
       

<svg width="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 330.001 330.001" style="enable-background:new 0 0 330.001 330.001;" xml:space="preserve">
<g id="XMLID_348_">
	<path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
		/>
	<polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

        </div>
        <div
          class="contactUsInput d-flex justify-content-end align-items-center"
        >
          <p v-if="!writeMobile" @click="showSection('writeMobile', true)">
            <span class="blackColor06">{{$cookie.get("ltrTheme")?"Mobile number":'شماره همراه'}}</span>
            <span class="blackColor06" v-if="mobile">{{ mobile }}</span>
          </p>
          <input
            @keydown.enter.tab="showSection('writeEamil', true)"
            id="writeMobile"
            v-model="mobile"
            v-else
            @blur="writeMobile = false"
            type="number"
          />
        
<svg width="25" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 297 297" style="enable-background:new 0 0 297 297;" xml:space="preserve">
<g>
	<path d="M108.66,51.642c16.03,0,29.073,13.044,29.073,29.077c0,5.53,4.483,10.013,10.013,10.013
		c5.529,0,10.013-4.482,10.013-10.013c0-27.074-22.025-49.104-49.099-49.104c-5.529,0-10.013,4.482-10.013,10.014
		C98.648,47.157,103.13,51.642,108.66,51.642z"/>
	<path d="M108.659,20.026c33.465,0.002,60.69,27.229,60.69,60.692c0,5.53,4.483,10.013,10.013,10.013
		c5.53,0,10.014-4.482,10.014-10.013c0-44.506-36.209-80.717-80.716-80.719c-5.529,0-10.013,4.482-10.013,10.013
		C98.648,15.544,103.13,20.026,108.659,20.026z"/>
	<path d="M273.714,238.342l-68.719-68.721c-1.877-1.877-4.424-2.934-7.08-2.934c-2.656,0-5.202,1.057-7.08,2.934l-30.273,30.27
		c-7.895-5.509-15.892-12.236-23.379-19.725c-7.49-7.49-14.218-15.486-19.727-23.382l30.273-30.271c3.91-3.91,3.91-10.25,0-14.161
		L79.009,43.629c-1.878-1.877-4.424-2.932-7.08-2.932c-2.656,0-5.203,1.055-7.08,2.932l-34.36,34.363
		c-13.311,13.31-13.517,36.962-0.578,66.599c11.665,26.716,32.887,56.229,59.754,83.099c26.866,26.866,56.377,48.088,83.093,59.753
		c14.597,6.374,27.74,9.558,38.913,9.558c11.512,0,20.93-3.381,27.685-10.137l34.359-34.36
		C277.624,248.593,277.624,242.253,273.714,238.342z M71.929,64.871l54.56,54.562l-20.2,20.2l-54.56-54.562L71.929,64.871z
		 M180.771,269.089c-24.479-10.689-51.806-30.421-76.945-55.561c-25.142-25.143-44.873-52.471-55.563-76.952
		c-6.075-13.914-8.705-25.912-7.77-34.418l51.592,51.593c7.236,13.539,17.901,27.54,30.938,40.574
		c13.029,13.03,27.027,23.697,40.57,30.937l51.596,51.597C206.684,277.795,194.687,275.165,180.771,269.089z M232.275,265.623
		l-54.56-54.561l20.2-20.2l54.559,54.562L232.275,265.623z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

        </div>
        <div
          class="contactUsInput d-flex justify-content-end align-items-center"
        >
          <p v-if="!writeFullName" @click="showSection('writeFullName', true)">
            <span class="blackColor06">{{$cookie.get("ltrTheme")?"Full Name":'نام و نام خانوادگی'}}</span>
            <span class="blackColor06" v-if="fullName">{{ fullName }}</span>
          </p>
          <input
            @keydown.enter.tab="showSection('writeMobile', true)"
            id="writeFullName"
            v-else
            v-model="fullName"
            @blur="writeFullName = false"
            type="text"
          />
        
<svg width="26" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
<path d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951
	c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319
	c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056
	v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309
	c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043
	C53,47.519,51.089,44.427,48.014,42.889z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

        </div>
      </div>
      <div id="formBottom">
        <textarea
          id="bodyMessage"
          :placeholder="$cookie.get('ltrTheme')?'Write down the text of your message or comment':'متن پیام یا نظر خود را یادداشت کنید'"
          v-model="text"
          cols="30"
          rows="10"
        ></textarea>
        <rounded-button
          :class="{ disableButton: disabled }"
          @buttonClicked="sendMessage()"
          :type="'button'"
          :buttonType="'button'"
          :title="$cookie.get('ltrTheme')?'Send Your Message':'پیام را ارسال کنید'"
        />
      </div>
      <Recaptcha :showRecaptcha="showRecaptcha" @rightAnswer="rightAnswer()" @closeRecaptcha="showRecaptcha=$event" />
    </section>
  </main>
  <loader v-else />
</template>
<script>
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

import Loader from "@/components/front/shared/loader.vue";
import Recaptcha from "@/components/front/shared/recaptcha.vue";
import cart from "@/components/front/contactUs/cart.vue";
import contactWay from "@/components/front/contactUs/contactWay.vue";
import introduction from "@/components/front/shared/introduction.vue";
import DoubleLine from "@/components/front/shared/doubleLine.vue";
import RoundedButton from "@/components/front/shared/roundedButton.vue";
export default {
  components: {
    introduction,Recaptcha,
    Loader,
    contactWay,
    cart,
    DoubleLine,
    RoundedButton
  },
  data() {
    return {
      showRecaptcha:false,
      disabled: false,
      fullName: "",
      mobile: "",
      email: "",
      text: "",
      writeEamil: false,
      writeMobile: false,
      writeFullName: false,
     
      routes:[{ route: "", routeTitle_fa: "تماس با ما", routeTitle_en:"contact us"}],
    
    };
  },
  methods: {
    rightAnswer(){
const pack = {
        fullName: this.fullName,
        email: this.email,
        phone: this.mobile,
        text: this.text,
        forManager:false,
      };
      this.disabled = true;
      this.$axios
        .post("ContactUs", JSON.stringify(pack), {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json"
          }
        })
        .then(() => {
          this.$toast.success("پیام شما با موفقیت به دست ما رسید");
          this.fullName = "";
          this.text = "";
          this.disabled = false;
          this.email = "";
          this.mobile = "";
        })
        .catch((error) => {
          this.disabled = false;
          let arrayError = error.response.data.message.split("|");
          arrayError.forEach((err, index) => {
            if (index < 1) {
              this.$toast.error(err, {
                timeout: 1000 * (index + 4),
                pauseOnHover: true
              });
            }
          });
        });
    this.showRecaptcha=false;
    },
    showSection(section, flag) {
      if (flag == true) {
        this[section] = true;
      }
      setTimeout(() => {
        document.getElementById(section).focus();
      }, 500);
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
   
    
    sendMessage() {
      if (this.$v.fullName.required == false) {
        return this.$toast.error("وارد کردن نام الزامی است");
      } else if (this.$v.fullName.minLength == false) {
        return this.$toast.error("نام کامل شما باید بیش از شش حرف باشد");
      } else if (this.$v.mobile.required == false) {
        return this.$toast.error("وارد کردن شماره موبایل الزامی است");
      } else if (
        this.$v.mobile.minLength == false ||
        this.$v.mobile.minLength == false
      ) {
        return this.$toast.error("شماره موبایل شامل 11 رقم است");
      } else if (this.$v.email.required == false) {
        return this.$toast.error("وارد کردن ایمیل الزامی است");
      } else if (this.$v.email.email == false) {
        return this.$toast.error("فرمت وارد شده ایمیل نامعتبر است");
      } else if (this.$v.text.required == false) {
        return this.$toast.error("وارد کردن پیام الزامی است");
      } else if (this.$v.text.minLength == false) {
        return this.$toast.error("حداقل حروف برای یک پیام شامل 20 حرف است");
      }
      this.showRecaptcha=true;
      },
       setStyle() {
      if (window.innerWidth > 1000) {
        if (window.innerWidth > 1495) {
          this.$root.setProportionStyle(
            "margin-top",
            "%",
            "#contactUsSection #introductionSection .slotElements ",
            1920,
            37,
            1495,
            20
          );
          this.$root.unsetInlineStyle(
            "font-size",
            "#contactUsSection #introductionSection .slotElements p span:first-child"
          );
          this.$root.unsetInlineStyle(
            "font-size",
            "#contactUsSection #introductionSection .slotElements p span:last-child"
          );
        } else {
          this.$root.unsetInlineStyle(
            "margin-top",
            "#contactUsSection #introductionSection .slotElements "
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#contactUsSection #introductionSection .slotElements p span:first-child",
            1496,
            12,
            1100,
            10
          );
          this.$root.setProportionStyle(
            "font-size",
            "px",
            "#contactUsSection #introductionSection .slotElements p span:last-child",
            1496,
            20,
            1100,
            10
          );
        }
        this.$root.unsetInlineStyle(
          "width",
          "#contactUsSection .mainContent .contactCart"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#contactUsSection .contactUsTitle h1"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#contactUsSection .contactUsTitle h3"
        );
        this.$root.unsetInlineStyle(
          "top",
          "#contactUsSection #introductionSection #backgroundOrange"
        );
      } else {
        this.$root.unsetInlineStyle(
          "margin-top",
          "#contactUsSection #introductionSection .slotElements "
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#contactUsSection #introductionSection .slotElements p span:first-child"
        );
        this.$root.unsetInlineStyle(
          "font-size",
          "#contactUsSection #introductionSection .slotElements p span:last-child"
        );

        this.$root.setProportionStyle(
          "width",
          "%",
          "#contactUsSection .mainContent .contactCart",
          999,
          60,
          375,
          97
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#contactUsSection .contactUsTitle h1",
          999,
          39,
          375,
          26
        );
        this.$root.setProportionStyle(
          "font-size",
          "px",
          "#contactUsSection .contactUsTitle h3",
          999,
          24,
          375,
          20
        );
        this.$root.setProportionStyle(
          "top",
          "%",
          "#contactUsSection #introductionSection #backgroundOrange",
          999,
          3,
          375,
          9
        );
      }
    },
  },
  validations: {
    fullName: {
      required,
      minLength: minLength(5)
    },
    email: {
      required,
      email
    },
    text: {
      required,
      minLength: minLength(20)
    },
    mobile: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(5)
    }
  },
  computed: {
    contactUsData() {
      return this.$store.getters.getContactUsData;
      
    },
    contactUs(){
      return this.$store.getters.getContactUsCartsData
    }
  },
  watch: {
    contactUsData(newVal) {
      this.$store.commit("setContactUsCartsData",{
        social: {
          title1_en: "Follow us",
          title1_fa: "ما را دنبال و همراهی کنید",
          title2_en: "Social Networks",
          title2_fa: "شبکه های اجتماعی",
          instagram: newVal.contactUs.instagrm,
          faceBook:  newVal.contactUs.facebook
        },
        time: {
          title1_en: "We are by your side",
          title1_fa: "در کنار شما هستیم",
          title2_en: "Company working hours",
          title2_fa: "ساعات کاری شرکت",
          body_en: "Every Saturday to Wednesday \n 7:30 am to 16 pm",
          body_fa:"هر هفته شنبه تا چهارشنبه\n 7:30 صبح الی 16 عصر"
        },
        
       
        location: {
          title1_en: "Waiting for your presence",
          title1_fa: "منتظر حضور شما",
          body_en: newVal.contactUs.address,
          body_fa: newVal.contactUs.address,
          title2_en: "Headquarters address",
          title2_fa: "نشانی دفتر مرکزی"
        },
        
        info: {
          title1_fa: "همواره پشتیبان شما هستیم",
          title1_en: "We are always your support",
          title2_fa: 'ارتباط با مشتریان',
          title2_en: 'communication with clients',
  
          body_en: "SMS system number:1000432\nEmail:crm@mmc.ir\nAnnounced telephone numbers: 02135811 extension 1-5",
          body_fa: "شماره سامانه پیام کوتاه:10000432\nایمیل:crm@mmc.ir\nشماره تلفن های اعلام شده:02135811 داخلی 1-5"
        }
      })
      
      setTimeout(()=>{
      this.setStyle();

      } )
    }
  },
     metaInfo() {
    return {
      title:  this.$cookie.get("ltrTheme") ? "contact-us - margarin" : "مارگارین -تماس با ما",
      meta: [
        {
          name: "description",
          content: this.contactUsData ? this.contactUsData.contactUsIntro.text : false
        },
        {
          property: "og:title",
          content:  this.$cookie.get("ltrTheme") ? "contact-us - margarin" : "مارگارین -تماس با ما",
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  mounted() {
    if (this.contactUsData == null) {
      // this.$store.dispatch("getContactUsFromServer");
      this.checkRequest('getContactUsFromServer',JSON.stringify(null));

    } else {
      this.setStyle();
    }
    window.addEventListener("resize", this.setStyle);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setStyle);
  }
};
</script>
<style scoped>
.footerSvg {
  margin-top: 50px;
  column-gap: 15px;
}
</style>
<style scoped>
#writeMobile::-webkit-outer-spin-button,
#writeMobile::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */

#writeMobile[type="number"] {
  -moz-appearance: textfield;
}
</style>
<style>
#contactUsSection .slotElements{
  width: 90% !important;
}
@media (max-width: 1000px){
#contactUsSection .slotElements{
  width: 100% !important;
}
}
#contactUsSection #doubleLine div {
  height: 2px;
  background-color: #424242;
}

element.style {
}
span#infoSvg {
    width: 100px;
    height: 100px;
    box-shadow: 5px 8px 100px #b0090e7d;
    background: #b0090e;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
