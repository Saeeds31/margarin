<template>
  <main v-if="productsData" id="productsSection">
    <introduction
      class="width80 margin-auto"
      :title="
        $cookie.get('ltrTheme')
          ? 'Research And  Development '
          : 'تحقیـــق و تـــوسعـــه'
      "
      :summary="'معرفي دپارتمان تحقيق و توسعه'"
      :image="image1"
      :routes="routes"
    >
      <p
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-once="true"
        class="slotElements"
      >
        تحقيق و توسعه از اركان پيشرفت هر سازمان و به ويژه سازمان‏هاي توليدي
        مي‏باشد. شركت مارگارين به عنوان اولين توليد كننده روغن‏هاي گياهي در
        ايران به منظور همگامي با نياز مشتريان، شناخت محصولات داخلي و خارجي و
        اهميت سلامت مصرف‏كنندگان محصولات خود از سال 1398 اقدام به گسترش دپارتمان
        تحقيق و توسعه اين شركت نموده است. در حال حاضر دپارتمان تحقیق و توسعه
        شرکت مارگارين شامل بخش‏هاي دفتر، آزمايشگاه، پايلوت، كارگاه تست محصولات،
        برونسپاري محصولات و تضمين كيفيت مي‏باشد
        <br />
        <br />
        <br />
      </p>
    </introduction>
    <!-- start desc -->
    <section id="underDevelopDescription">
      <h3>دفتر تحقيق و توسعه</h3>
      <p
        id="IntroductionOfDepartment"
      >
        در بخش دفتري اين دپارتمان به سنجش مداوم بازارهاي داخلي و خارجي از ديدگاه
        محصولات جديد و نياز مشتريان، ايده‏پردازي در خصوص توليد محصولات،
        المان‏هاي مربوط به هر محصول، دريافت پيشنهادات ساير واحدها در اين خصوص،
        امكان‎سنجي توليد محصولات جديد‏، بهبود فرآيندها، ارتباط با مراكز آكادميك،
        دانش بنيان، امور مربوط به كميته تحقق و توسعه محصول و امور مشتريان،
        مديريت فرآيند تحقق محصولات جديد و... پرداخته مي‏شود.
      </p>
      <h3>آزمايشگاه تحقيق و توسعه</h3>
      <p>
        آزمايشگاه تحقيق و توسعه شركت مارگارين با همکاری و همراهی متخصصان حرفه‌ای
        به تحقیق در زمینه روغن‌ها، چربی‌ها و محصولات جانبی آن‌ها می‌پردازد.
        همچنين در این آزمایشگاه ضمن بررسی مسائل و مشکلات مربوط به محصولات
        توليدي، برای رفع و بهبود آن‌ها اقدام می‌شود. از دیگر اقدامات این
        آزمایشگاه می‌توان به بررسي فرمولاسيون محصولات موجود در بازار، ارائه
        فرمولاسیون جهت تولید محصولات جدید، بهبود فرآیند تولید و معرفی روش‌های
        جدید در این فرآیندها اشاره کرد. علاوه بر این فعالیت‌ها، بررسي
        جايگزين‏هايي مناسب مواد اولیه، مواد كمك فرآيند و... به منظور ارتقاي
        كيفيت و كارآيي محصولات از جمله وظایف آزمایشگاه تحقيق و توسعه شركت
        مارگارين هستند. همچنين اين آزمايشگاه امكان توليد روغن‏هاي دلخواه مشتري
        (Tailor-made) و همچنين قابليت شبيه سازي روغن‏هاي گران قيمت خارجي با قيمت
        ارزان‏تررا داراست. حضور فعال در کمیته‌های تخصصی مربوط به روغن‌ها و
        چربی‌ها که توسط اداره استاندارد تشکیل می‌شوند، ارائه مقالات علمی در
        مجلات معتبر دنیا و شرکت در کنگره‌های ملی و بین‌المللی از دیگر اعتبارات
        این آزمایشگاه هستند. همچنین این آزمایشگاه جهت ارتقاء سطح دانش پرسنل خود
        برنامه‌های آموزشی متنوعی برگزار می‌کند که پرسنل موظف به شرکت در آن‌ها
        هستند. از جمله امتیازهای این آزمایشگاه می‌توان به دریافت گواهی‌نامه
        تایید صلاحیت از طرف اداره کل استاندارد و تحقیقات صنعتی ایران و معرفی به
        عنوان آزمایشگاه همکار از طرف این اداره اشاره کرد. در این راستا سیستم
        مدیریت کیفیت ISO 17025 که مربوط به استانداردهای آزمایشگاه است، در این
        آزمایشگاه برقرار شده است. تمام روش‌های آزمونی که در این آزمایشگاه
        استفاده می‌شوند، به‌روز بوده و از استانداردهای معتبر دنیا مانند ISO,
        Codex, AOCS, ISIRI و… استخراج شده‌اند.
      </p>
      <h3>تضمين كيفيت</h3>
      <p>
        تضمین کیفیت (QA) راهی برای جلوگیری از خطا و اشکالات پیش آمده در هنگام
        تحویل محصولات یا ارائه ی خدمات به مشتری است و تضمین کیفیت طبق گواهی ISO
        9000 قسمتی از مدیریت کیفیت کالا در جهت ایجاد اطمینان از انجام الزامات
        کیفی است. نظام تضمین کیفیت دارای دو جنبه درونی و برون سازمانی است. • در
        درون سازمان برای مدیریت سازمان ایجاد اطمینان می نماید. • در برون سازمان
        برای مشتریان ایجاد اطمینان می نماید
      </p>
      <h3>اقدامات دپارتمان تحقيق و توسعه در حوزه تضمين كيفيت</h3>
      <p>
        • افزايش انطباق مواد اوليه و ملزومات مؤثر بر كيفيت <br />
        • افزايش سهم بازار و رقابت با رقبا با بررسي محصولات توليدي رقبا در حوزه
        صنف و صنعت و خانوار با هدف افزايش رضايت مشتريان و ذينفعان <br />
        • مكانيزه نموده سيستم هاي اجرايي <br />
        • كسب افتخارات و اخذگواهينامه ها در راستاي ارتقاء سيستمها <br />
        • افزايش شرايط بهداشتي و پياده سازي الزامات زيرساختي مشتريان <br />
        • انجام واكنش به موقع در شرايط بحراني <br />
        • کنترل فعاليتهای سيستمی و حصول اطمينان از انطباق عملکرد <br />
        فرایند ها با الزامات <br />
        • ارتقاء سطح دانش و مهارت پرسنل واحد <br />
        • افزايش انطباق كنترل فرآيندهاي كيفي <br />
        • ارتقاء كيفيت محصولات توليدي با رويكرد افزايش رضايت مشتريان
      </p>
      <h3>پايلوت</h3>
      <p>
        <br />
        شركت مارگارين مجهز به واحد پايلوت تصفيه و فراوري مربوط به انواع محصولات
        روغن، چربي، شورتنينگ و مارگارين و ساير محصولات مشتق از روغن است. <br />
        تجهيزات واحد پايلوت شامل تجهيزات هيدروژناسيون، بي رنگ سازي و
        اينتراستريفيكاسيون با ظرفيت¬هاي مختلف بوده و سيسنم هاي جديدي در حال
        اضافه شدن است. <br />
        واحدهاي پايلوت پلنت به منظور ارزيابي شرايط متفاوت و پارامترهاي فرايند و
        تست انواع مواد افزودني و كمك فرايند در مقياس كوچك بسيار مفيد بوده و منجر
        به استفاده بهينه از منابع و زمان مي شود. <br />
        يكي ديگر از استفاده¬¬هاي تجهيزات موجود در واحد پايلوت دپارتمان تحقيق و
        توسعه، تهيه نمونه¬هاي مورد نياز و درخواست شركت¬هاي توليد كننده انواع
        محصولات غذايي جهت تست پايلوت و يا توليدات آزمايشي هست.
      </p>
      <h3>كارگاه تست محصولات</h3>
      <p>
        این کارگاه براي بعضی از تست‎هاي فنی و آزمایش محصولات مورد استفاده قرار
        مي‏گردد. در اين روش با حضور یک قناد یا آشپز حرفه اي محصولات در فرآیند
        پخت مورد تست و آزمایش قرار مي‏گيرند. همچنین در مواردي این کارگاه براي
        بررسی شکایات واصله مرتبط با محصولات مورد استفاده قرار مي‏گيرد. به شکل
        کلی اين کارگاه به عنوان بخشی از فرآیند کنترل کیفیت و تحقیق و توسعه و تحت
        نظر مدیر ارشد تحقیق و توسعه شرکت مورد بهره برداري قرار مي‎گيرد. در
        فازهاي بعدي از اين كارگاه به عنوان آزمايشگاه مزه نيز استفاده تا بستری
        برای تست عملی نحوه استفاده از محصولات توسط مشتریان مختلف و گرفتن بازخورد
        از آنها باشد. همچنین طعم و عطر محصول در شیرینی جات و غذاهای مختلف تست
        گردد. خروجی این آزمایشگاه مي‏تواند زمینه ساز بهبود محصولات)ترکیب محصول،
        افزودني‏ها، طعم، بو، نا مگذاری، بسته بندی، بازاریابی(، توسعه محصولات و
        خطوط تولید جدید یا توسعه مدل کسب و کار شرکت باشد.
      </p>
      <h3>برونسپاري محصولات</h3>
      <p>
        پروسه توليد محصولات برونسپاري و اجراي مراحل برونسپاري محصولات شركت
        مارگارين براي محصولاتي انجام مي‎گردد كه بنابر مسائل فني يا صلاحديد
        مديريت محترم عامل در داخل اين مجموعه توليد نمي‏شوند. صاحب اين فرآيند
        دپارتمان تحقيق و توسعه مي‎باشد.
      </p>
    </section>
    <h3 id="newUnderProductTitle">
      محصولات جدید
         <svg
            id="articleSvg"

        version="1.1"
        width="60"
        height="80"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 595.3 841.9"
        style="enable-background: new 0 0 595.3 841.9"
        xml:space="preserve"
      >
        <path
          d="M420.1,459c0,0.1,0.1,0.2,0.3,0.4c0.1,0.1,0.1,0.1,0.1,0.1c2.2,1.5,3.9,3.6,5.7,5.5c0.5,0.6,0.8,1.4,1.2,2.2
	c1.1,2,2.1,4.1,2.8,6.4c0.2,0.8,0.4,1.6,0.7,2.4c0.9,3.7,1.1,7.5,0.8,11.4c-0.1,1.2-0.4,2.4-0.7,3.6c-0.7,3.3-1.3,6.7-1.7,10.1
	c-0.3,2.2-1.2,4.2-2.2,6.2c-0.6,1-1.2,2-1.8,3c-0.4,0.6-0.7,1.2-1,1.9c-1.2,3-1.9,6.2-2.2,9.4c-0.5,5.5-0.5,11-0.7,16.5
	c0,0.9,0,1.8,0,2.7c-0.1,1.3,0.3,2.4,1.3,3.3c1.6,1.6,2.6,3.5,3.3,5.7c0.2,0.6,0.4,1.2,0.4,1.9c0.2,2.5,0.3,5,0.4,7.6
	c0.2,3.1,0.4,6.2,0.6,9.3c0,0.5,0.1,0.9,0.1,1.4c0.3,7.4,0.7,14.9,1,22.3c0.2,3.3,0.3,6.6,0.5,9.9c0.2,3.7,0.5,7.4,0.8,11
	c0.2,2.4,0.3,4.8,0.4,7.2c0.2,4.5,0.5,8.9,0.7,13.4c0.1,2.6,0.2,5.2,0,7.8c-0.2,1.7,0.1,3.5,0.1,5.2c-0.1,4.8-0.1,9.7-0.3,14.5
	c-0.2,4.5-0.6,9-1,13.5c-0.2,3-0.5,6.1-0.9,9.1c-0.6,5.3-1.2,10.7-2,16c-0.8,5.2-1.8,10.4-3,15.6c-0.5,2.1-1,4.1-1.5,6.2
	c-0.2,0.9-0.3,1.8-0.6,2.7c-0.5,1.9-0.9,3.9-1.5,5.8c-1.3,4.4-2.7,8.8-4,13.2c-0.4,1.2-0.8,2.5-1.4,3.6c-1,2-2,4.1-3.4,5.9
	c-1.7,2.3-3.9,4.2-6.7,5.1c-1.6,0.5-3.2,1.1-4.8,1.5c-2.8,0.6-5.6,1.4-8.6,1.4c-0.8,0-1.5,0.2-2.3,0.3c-1,0.1-1.9,0.2-2.9,0.3
	c-0.2,0-0.4,0-0.6,0c-3.5,0.7-7.1,0.6-10.6,1c-3.9,0.4-7.7,0.8-11.6,1.1c-3.5,0.3-7,0.5-10.4,0.8c-2.9,0.3-5.8,0.4-8.7,0.4
	c-1.2,0-2.3,0.1-3.5,0.2c-1.2,0.1-2.3,0.2-3.5,0.3c-3.1,0.3-6.2,0.2-9.3,0.4c-9.8,0.5-19.7,0.3-29.5,0.4c-2.2,0-4.4,0.1-6.6,0.2
	c-3.8,0.1-7.5,0.1-11.2,0.3c-5.4,0.3-10.9,0.2-16.3,0.1c-1.1,0-2.2,0.1-3.3,0.2c-0.8,0-1.7,0.1-2.5,0.1c-6.8-0.1-13.6-0.1-20.4-0.2
	c-3.4-0.1-6.7-0.2-10.1-0.4c-3.9-0.2-7.7-0.4-11.6-0.8c-4.6-0.4-9.3-0.5-13.9-0.8c-1.9-0.1-3.8-0.6-5.7-0.9c-2.7-0.5-5.3-1-8-1.7
	c-1.5-0.4-3-0.8-4.4-1.4c-2.3-1-4.6-2.1-6.8-3.2c-1.5-0.7-2.9-1.4-4.3-2.3c-2.2-1.4-4.3-3.1-5.3-5.5c-1.2-2.7-2.4-5.4-2.8-8.4
	c-0.2-1.3-0.4-2.6-0.7-3.8c-0.9-4-1.3-8-2.1-12c-0.3-1.6-0.6-3.2-1-4.8c-1-4.9-1.7-9.8-2.3-14.8c-0.3-2.1-0.5-4.2-0.8-6.4
	c-0.1-0.8,0-1.7-0.1-2.5c-0.2-2.2-0.4-4.4-0.6-6.6c-0.2-2-0.3-4-0.5-6c-0.2-2.8-0.6-5.7-0.8-8.5c-0.1-1.3-0.1-2.7-0.1-4.1
	c0-1.4,0.5-2.8,1.3-4c0.7-1.1,1.2-2.4,2-3.5c0.6-0.7,0.6-1.7,0.6-2.6c0-1.4-0.1-2.8-0.2-4.3c-0.4-5.4-0.2-10.9-0.3-16.3
	c0-0.9-0.2-1.6-0.7-2.3c-0.8-1-1.5-2.1-2.2-3.2c-1-1.6-1.6-3.4-1.8-5.3c-0.3-2.7-0.1-5.3,0-7.9c0.1-1.4,0.1-2.8,0.3-4.3
	c0.4-3.8,0.7-7.6,1.3-11.4c0.5-3.2,1.9-6,4.4-8.2c0.9-0.8,1.4-1.8,1.6-3c0.4-3.1,0.8-6.3,1.3-9.4c0.5-3,1.1-6,1.6-9
	c0.3-1.7,0.4-3.5,0.5-5.2c0-0.9-0.2-1.9-0.6-2.8c-0.6-1.6-1.1-3.3-1.2-5.1c-0.1-1-0.1-2.1,0.1-3.1c0.9-4.8,1.8-9.5,2.8-14.3
	c0.6-2.8,1.4-5.5,2-8.3c0-0.2,0.1-0.4,0.2-0.6c1.3-2,2.2-4.3,4.3-5.6c0.6-0.4,1-1,1.2-1.7c0.3-1.2,0.7-2.4,1-3.6
	c0.4-1.8,0.8-3.5,1.1-5.3c0.5-3,0.9-6,1.4-9c0.2-1.5,0.5-3,0.8-4.6c0.1-0.4,0.1-0.9,0.3-1.3c0.4-1.6,0.2-3-0.7-4.5
	c-0.6-1-1-2.1-1.4-3.2c-0.5-1.3-0.9-2.7-0.8-4.2c0.1-4.3,0.2-8.5,0.2-12.8c0-3,0.5-5.9,0.3-8.9c-0.2-3,1-5.7,2.8-8.1
	c0.9-1.2,1.4-2.5,1.4-3.9c0-2.1,0-4.3-0.1-6.4c-0.3-4.9-0.6-9.8-0.9-14.7c0-0.7-0.1-1.4,0.3-2.1c0.3-0.5,0.2-1-0.2-1.4
	c-0.3-0.4-0.7-0.8-1-1.2c-2.4-2.4-4-5.2-4.4-8.7c-0.4-3.6-0.8-7.2-1.1-10.8c-0.3-2.9-0.4-5.8-0.9-8.7c-0.5-2.9-0.1-5.5,1.3-8
	c0.3-0.5,0.5-1,0.8-1.6c0.5-1.1,0.7-2.3,0.6-3.6c-0.2-1.2-0.4-3.1-1.2-6.7c-0.1-0.5-0.3-1.3-0.5-2.3c0-0.2-0.2-1-0.4-2.7
	c-0.2-1.6-0.2-1.8-0.4-2.7c-0.3-1.9-0.4-1.9-0.7-3.6c-0.5-2.8-0.7-4.3-0.8-4.7c0-0.3,0-0.9-0.3-1.6c-0.2-0.5-0.6-1-1.1-1.4
	c-1.7-1.5-3-3.2-4-5.2c-0.4-0.9-0.8-1.8-1-2.7c-0.8-3.9-1.7-7.8-2.4-11.8c-0.5-2.9-1-5.7-1.4-8.6c-0.6-4.5-1.2-9-1.8-13.5
	c-0.7-5.9-1.4-11.8-1.5-17.8c-0.1-3.3-0.3-6.6-0.3-9.9c-0.1-4.1,0.2-8.3,0.6-12.4c0.5-4.3,1.2-8.6,1.9-12.9c0.7-4.2,2-8.1,3.2-12.2
	c1.1-3.7,2.5-7.3,4-10.9c1-2.4,2.1-4.7,3.3-7c0.5-1,1-1.9,1.5-2.9c1.7-3.4,3.8-6.6,5.8-9.9c1.2-2,2.6-3.9,4-5.7
	c1-1.3,1.8-2.8,2.8-4.2c1.8-2.4,3.5-4.8,5.6-7c0.7-0.8,1.4-1.7,2.1-2.6c1.4-1.7,2.9-3.3,4.4-4.9c3.2-3.5,6.4-7.1,9.8-10.5
	c3.7-3.6,7.4-7.3,11.5-10.4c5-3.8,10-7.8,14.9-11.7c2.4-1.9,4.6-4,7-5.9c1.6-1.3,3.3-2.5,5-3.7c0.6-0.5,1.3-0.8,1.9-1.3
	c1-0.8,2-1.4,3.2-1.7c0.2-0.1,0.4-0.1,0.6-0.2c1.3-0.6,2.2-1.3,2.4-3c0.2-1.7,0.7-3.4,1-5.1c0.1-0.3,0-0.6,0-1
	c-0.5-0.1-0.9-0.2-1.3-0.2c-2,0-4-0.6-5.9-1.2c-1-0.3-1.6-1-1.6-2.1c0-0.4-0.1-0.8,0-1.2c0.1-0.3,0.2-0.6,0.4-0.8
	c0.2-0.2,0.4-0.5,1.1-0.9c1-0.5,1.9-0.6,2.6-0.6c-0.1-0.2-0.6-21-0.5-23c0-0.9,0.1-1.8,0.4-2.7c0.4-1,0.2-1.4,0.2-1.7
	c0.1-1.1,0.2-1.7,0.2-2.4c0.1-1.4,0.2-2.5,0.5-3.4c0.6-1.9,2.4-2.9,3.3-3.5c6-3.9,32.6-3.2,41.6-3.2c0,0,23.9,0,39.7,3.2
	c0.9,0.2,1.7,0.5,1.7,0.5c0.1,0.1,0.7,0.3,1.3,0.8c1.2,0.9,1.9,2.1,2.1,2.5c0.6,1.1,0.9,2.3,1,3.7c0,0.7,0,1.4,0.1,2.1
	c0,0.4-0.1,0.8,0.1,1.2c0.8,1.9,0.4,25.6,0.2,28.2c0.2,0,1.1,0.2,1.6,1c0.2,0.3,0.2,0.7,0.2,1c0,1.5-0.3,1.9-1.8,2.5
	c-0.7,0.3-1.3,0.4-2,0.5c-1.5,0.2-2.9,0.5-4.5,0.8c-0.2,2.8-0.2,5.6,1.5,8.2c1,0.2,2,0.4,3,0.7c0.3,0.1,0.6,0.2,0.9,0.4
	c1.4,0.9,2.8,1.7,4,2.7c4.4,3.5,8.7,7,13,10.5c0.9,0.8,1.8,1.7,2.7,2.5c1.2,1.1,1.9,2.4,2.4,3.9c0.7,2.3,1.3,4.6,1.6,7
	c0.1,1.1,0.5,2.1,1.5,2.8c0.5,0.4,0.8,1,1.2,1.5c0.7,0.9,1.4,1.9,2.1,2.8c2.9,3.3,5.8,6.6,8.7,9.9c1.2,1.4,2.3,2.8,3.5,4.2
	c0.7,0.8,1.5,1.4,2.3,2.1c0.7,0.6,1.4,1.4,2.3,1.7c0.8,0.3,1.8,0.1,2.7,0.2c0.9,0.1,1.8,0.4,2.6,0.7c0.2,0.1,0.4,0.2,0.5,0.3
	c0.6,0.7,1.4,1.2,2.1,1.8c0.1,0.1,0.8,0.7,1.3,1.3c3.2,3.5,5,7.9,5,7.9c0.5,1.3,1.2,3,1.6,5.4c0.2,1.4,0.8,2.8,0.9,4.2
	c0.1,0.6,0.2,1.7,0.8,2c0.2,0.1,0.6,0.2,1.2,0.3c0.6,0.1,0.7,0.1,1.2,0.1c1.4,0.1,2.5,0.7,3.3,1.8c0.7,1,1.3,2.1,1.9,3.1
	c3.3,5.8,6.3,11.9,9.2,17.9c3.4,7.3,6.3,14.9,9.1,22.4c2.1,5.6,4,11.3,5.8,17c0.7,2.3,1.3,4.7,1.9,7.1c1,3.9,2,7.9,3,11.8
	c0.6,2.6,1.3,5.1,1.8,7.7c0.5,2.5,0.9,5.1,1.4,7.6c0.3,1.7,0.7,3.4,1,5.1c0.3,2,0.5,4,0.8,5.9c0.2,1.7,0.4,3.5,0.6,5.2
	c0.2,2.1,0.4,4.1,0.7,6.2c0.5,2.9,0.6,5.9,0.8,8.9c0.3,5.1,0.8,10.2,0.8,15.3c0,6,0,12,0,18.1c0,1.8-0.2,3.6-0.3,5.4
	c0,0.3-0.1,0.6-0.1,1c0.1,4-0.6,8-0.7,12c0,1.2-0.2,2.3-0.4,3.5c0,0.2-0.1,0.4-0.1,0.6c-0.3,2.4-0.5,4.9-0.8,7.3
	c-0.2,1.8-0.7,3.7-1,5.5c-0.2,1-0.3,2-0.5,3c-0.3,1.8-0.6,3.7-0.9,5.5c-1.5,7.8-5.5,13.3-13.3,15.8c-2.2,0.7-4.5,0.5-6.7,0.5
	c-0.2,0-0.4-0.1-0.4-0.1c0,0,0,0,0,0c-0.2-0.1-0.8-0.2-0.8-0.2c-0.4-0.1-0.5-0.2-0.8-0.2C420.4,458.9,420.1,458.9,420.1,459z
	 M423.2,386.1c-0.2-5.1-0.3-10.6-0.5-16.1c0-1.2-0.2-2.4-0.3-3.7c-0.3-2.8-0.5-5.5-0.8-8.3c-0.3-2.7-0.5-5.4-0.8-8.1
	c-0.3-3-0.7-6-1.2-9c-0.2-1.8-0.5-3.6-0.8-5.4c-0.2-1.4-0.5-2.8-0.7-4.2c-0.6-3-1-6.1-1.8-9.1c-0.6-2-0.9-4.2-1.4-6.2
	c-0.6-2.3-1.1-4.6-1.8-6.9c-1.1-3.9-2.3-7.8-3.4-11.7c-1-3.5-2.3-6.8-3.6-10.2c-1-2.9-2.1-5.7-3.2-8.5c-0.6-1.5-1.3-2.8-2.5-3.9
	c-0.3-0.3-0.7-0.7-1.1-0.7c-1.4,0-2.7-0.1-4.1,0.1c-1.6,0.3-3.3,0.8-4.9,1.2c-3.5,0.9-7,1.9-10.5,2.8c-1.4,0.3-2.7,0.9-3.9,1.6
	c-3.1,1.6-5.7,3.7-8.4,5.9c-1.1,0.9-2.1,2.1-2.9,3.4c-1.6,2.6-2.5,5.5-2.5,8.7c0,0.7,0,1.4,0,2.1c-0.1,6.2-0.1,12.4-0.2,18.6
	c-0.1,9.6-0.2,19.1-0.3,28.7c0,4.1,0,8.1-0.3,12.2c-0.5,8-0.9,16-1.4,24c-0.1,1.6-0.2,3.2-0.2,4.8c-0.1,3.9-0.2,7.9-0.3,11.8
	c-0.1,4.9-0.2,9.7-0.2,14.6c0,3.3,0.9,6.5,2.4,9.5c1.5,3,3.7,5.4,6.2,7.6c1.7,1.5,3.5,2.8,5.7,3.7c5.7,2.3,11.3,4.6,17.1,6.8
	c3.3,1.2,6.6,2.2,9.9,3.3c0.4,0.1,1.6,0.5,3.2,0.7c1.5,0.2,2.7,0.1,3,0.1c1.3-0.1,2.3-0.4,2.8-0.5c0.1,0,0.6-0.2,1.1-0.4
	c0,0,2.1-0.8,3.9-2.5c2.6-2.5,3.9-5.7,4.5-9.2c0.4-2.4,0.6-4.7,1.2-7c0.1-0.2,0.1-0.5,0.1-0.8c0.3-2.2,0.6-4.3,0.9-6.5
	c0.3-2.5,0.6-5,0.8-7.5c0.2-1.7,0.2-3.5,0.4-5.2c0.1-1.3,0.3-2.6,0.3-3.9c0.1-2.5,0.1-4.9,0.2-7.4
	C423,392.5,423.1,389.5,423.2,386.1z"
        />
      </svg>
    </h3>
    <!-- end desch -->
    <filterBox
      v-if="productsData.data.productArchives.length > 0"
      :isBrandSelected="isBrandSelected"
      :categorySelected="categorySelected"
      :placeHolder="searchPlaceHolder"
      @filtered="filteredProducts"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
      class="width80 margin-auto"
    />
    <section
      id="products"
      class="d-flex justify-content-between width80 margin-auto"
    >
      <cart
        :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
        data-aos-duration="1000"
        data-aos-once="true"
        class="width30"
        v-for="(product, index) in productsData.data.productArchives"
        :product="product"
        :key="index"
      />
    </section>
    <section
      id="pagination"
      v-if="productsData.data.productArchives.length > 0"
    >
      <pagination
        v-if="productsData.pagination.TotalPages > 1"
        :totalPages="productsData.pagination.TotalPages"
        :currentPage="productsData.pagination.CurrentPage"
        @pageChanged="pageChanged"
      />
    </section>
    <section
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
      class="contactUsTitle width80 margin-auto"
    >
      <h1 class="blackColor06">
        {{
          $cookie.get("ltrTheme")
            ? "Innovative proposals and collaborative collaboration with individuals"
            : "پذیرش پیشنهادات نوآورانه و همکاری مشترک با افراد"
        }}
      </h1>

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
          <p v-if="!writeFullName" @click="showSection('writeFullName', true)">
            <span class="blackColor06">{{
              $cookie.get("ltrTheme") ? "Full Name" : "نام و نام خانوادگی"
            }}</span>
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

          <svg
            width="26"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            style="enable-background: new 0 0 60 60"
            xml:space="preserve"
          >
            <path
              d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951
	c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319
	c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056
	v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309
	c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043
	C53,47.519,51.089,44.427,48.014,42.889z"
            />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
        <div
          class="contactUsInput d-flex justify-content-end align-items-center"
        >
          <p v-if="!writeMobile" @click="showSection('writeMobile', true)">
            <span class="blackColor06">{{
              $cookie.get("ltrTheme") ? "Mobile number" : "شماره همراه"
            }}</span>
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

          <svg
            width="25"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 297 297"
            style="enable-background: new 0 0 297 297"
            xml:space="preserve"
          >
            <g>
              <path
                d="M108.66,51.642c16.03,0,29.073,13.044,29.073,29.077c0,5.53,4.483,10.013,10.013,10.013
		c5.529,0,10.013-4.482,10.013-10.013c0-27.074-22.025-49.104-49.099-49.104c-5.529,0-10.013,4.482-10.013,10.014
		C98.648,47.157,103.13,51.642,108.66,51.642z"
              />
              <path
                d="M108.659,20.026c33.465,0.002,60.69,27.229,60.69,60.692c0,5.53,4.483,10.013,10.013,10.013
		c5.53,0,10.014-4.482,10.014-10.013c0-44.506-36.209-80.717-80.716-80.719c-5.529,0-10.013,4.482-10.013,10.013
		C98.648,15.544,103.13,20.026,108.659,20.026z"
              />
              <path
                d="M273.714,238.342l-68.719-68.721c-1.877-1.877-4.424-2.934-7.08-2.934c-2.656,0-5.202,1.057-7.08,2.934l-30.273,30.27
		c-7.895-5.509-15.892-12.236-23.379-19.725c-7.49-7.49-14.218-15.486-19.727-23.382l30.273-30.271c3.91-3.91,3.91-10.25,0-14.161
		L79.009,43.629c-1.878-1.877-4.424-2.932-7.08-2.932c-2.656,0-5.203,1.055-7.08,2.932l-34.36,34.363
		c-13.311,13.31-13.517,36.962-0.578,66.599c11.665,26.716,32.887,56.229,59.754,83.099c26.866,26.866,56.377,48.088,83.093,59.753
		c14.597,6.374,27.74,9.558,38.913,9.558c11.512,0,20.93-3.381,27.685-10.137l34.359-34.36
		C277.624,248.593,277.624,242.253,273.714,238.342z M71.929,64.871l54.56,54.562l-20.2,20.2l-54.56-54.562L71.929,64.871z
		 M180.771,269.089c-24.479-10.689-51.806-30.421-76.945-55.561c-25.142-25.143-44.873-52.471-55.563-76.952
		c-6.075-13.914-8.705-25.912-7.77-34.418l51.592,51.593c7.236,13.539,17.901,27.54,30.938,40.574
		c13.029,13.03,27.027,23.697,40.57,30.937l51.596,51.597C206.684,277.795,194.687,275.165,180.771,269.089z M232.275,265.623
		l-54.56-54.561l20.2-20.2l54.559,54.562L232.275,265.623z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
        <div
          class="contactUsInput d-flex justify-content-end align-items-center"
        >
          <p v-if="!writeEamil" @click="showSection('writeEamil', true)">
            <span class="blackColor06">{{
              $cookie.get("ltrTheme") ? "E-mail" : "پست الکترونیک"
            }}</span>
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

          <svg
            width="25"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 330.001 330.001"
            style="enable-background: new 0 0 330.001 330.001"
            xml:space="preserve"
          >
            <g id="XMLID_348_">
              <path
                id="XMLID_350_"
                d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
              />
              <polygon
                id="XMLID_351_"
                points="165.001,146.4 310.087,40.001 19.911,40 	"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>

        <select v-model="type" id="selectunderType">
          <option
            :value="item.value"
            v-for="item in listType"
            :key="item.value"
          >
            {{ item.title }}
          </option>
        </select>
      </div>
      <div id="formBottom">
        <textarea
          id="bodyMessage"
          :placeholder="
            $cookie.get('ltrTheme')
              ? 'Write down the text of your message or comment'
              : 'متن پیام یا نظر خود را یادداشت کنید'
          "
          v-model="text"
          cols="30"
          rows="10"
        ></textarea>
        <rounded-button
          :class="{ disableButton: disabled }"
          @buttonClicked="sendMessage()"
          :type="'button'"
          :buttonType="'button'"
          :title="
            $cookie.get('ltrTheme') ? 'Send Your Message' : 'پیام را ارسال کنید'
          "
        />
      </div>
      <Recaptcha
        :showRecaptcha="showRecaptcha"
        @rightAnswer="rightAnswer()"
        @closeRecaptcha="showRecaptcha = $event"
      />
    </section>
  </main>
  <loader v-else />
</template>
<script>
import Recaptcha from "@/components/front/shared/recaptcha.vue";

import RoundedButton from "@/components/front/shared/roundedButton.vue";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";
import DoubleLine from "@/components/front/shared/doubleLine.vue";
import image from "@/assets/front/images/image.png";
import filterBox from "@/components/front/products/filterBox.vue";
import pagination from "@/components/front/shared/pagination.vue";
import cart from "@/components/front/products/cart.vue";
import introduction from "@/components/front/shared/introduction.vue";
import Loader from "@/components/front/shared/loader.vue";
export default {
  components: {
    introduction,
    cart,
    DoubleLine,
    pagination,
    filterBox,
    RoundedButton,
    Recaptcha,
    Loader
  },
  data() {
    return {
      type: 1,
      listType: [
        { title: "پیشنهاد نوآورانه", value: 1 },
        { title: "همکاری مشترک", value: 2 }
      ],
      image1: image,
      fullName: "",
      mobile: "",
      email: "",
      showRecaptcha: false,
      text: "",
      writeEamil: false,
      writeMobile: false,
      writeFullName: false,
      categorySelected: "",
      isBrandSelected: "",
      searchPlaceHolder: "",
      routes: [
        { route: "", routeTitle_fa: "محصولات ", routeTitle_en: "Products" }
      ]
    };
  },
  methods: {
    rightAnswer() {
      const pack = {
        fullName: this.fullName,
        email: this.email,
        phone: this.mobile,
        text: this.text,
        type: this.type
      };
      this.disabled = true;
      this.$axios
        .post("InovativeIdea", JSON.stringify(pack), {
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
      this.showRecaptcha = false;
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
      this.showRecaptcha = true;
    },
    filteredProducts(filter) {
      this.$router.replace({
        name: "products",
        query: {
          page: this.$route.query.page ? this.$route.query.page : 1,
          category: filter.category ? filter.category : "",
          search: filter.search ? filter.search : "",
          brand: filter.brand ? filter.brand : ""
        }
      });
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
    },
    pageChanged(page) {
      this.$router.replace({
        name: "products",
        query: {
          page: page,
          category: this.$route.query.category
            ? this.$route.query.category
            : "",
          search: this.$route.query.search ? this.$route.query.search : "",
          brand: this.$route.query.brand ? this.$route.query.brand : ""
        }
      });
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" });
    }
  },

  metaInfo() {
    return {
      title: this.$cookie.get("ltrTheme")
        ? "Products - Margarin"
        : "مارگارین -محصولات تحت توسعه",
      meta: [
        {
          name: "description",
          content:
            "تحقيق و توسعه از اركان پيشرفت هر سازمان و به ويژه سازمان‏هاي توليدی مي‏باشد. شركت مارگارين به عنوان اولين توليد كننده روغن‏هاي گياهي در ايران به منظور همگامي با نياز مشتريان، شناخت محصولات داخلي و خارجي واهميت سلامت مصرف‏كنندگان محصولات خود از سال 1398 اقدام به گسترش دپارتمان تحقيق و توسعه اين شركت نموده است. در حال حاضر دپارتمان تحقیق وتوسعه شرکت مارگارين شامل بخش‏هاي دفتر، آزمايشگاه، پايلوت، كارگاه تست محصولات، برونسپاري محصولات و تضمين كيفيت مي‏باشد"
        },
        {
          property: "og:title",
          content: this.$cookie.get("ltrTheme")
            ? "Products - Margarin"
            : "مارگارین -محصولات"
        },
        { name: "robots", content: "index,follow" }
      ]
    };
  },
  computed: {
    productsData() {
      return this.$store.getters.getUnderDevProducts;
    }
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
  created() {
    if (this.productsData == null) {
      let pack = {
        page: this.$route.query.page ? this.$route.query.page : 1,
        brand: this.$route.query.brand ? this.$route.query.brand : "",
        type: this.$route.query.type ? this.$route.query.type : "",
        category: this.$route.query.category ? this.$route.query.category : "",
        search: this.$route.query.search ? this.$route.query.search : ""
      };

      // this.$store.dispatch("getUnderDevProductFromServer", pack);
      this.checkRequest("getUnderDevProductFromServer", JSON.stringify(pack));
    }
  },
  watch: {
    "$route.query": {
      handler(value) {
        if (Object.keys(value).length == 0) return;
        let pack = {
          page: value.page ? value.page : 1,
          category: value.category ? value.category : "",
          brand: this.$route.query.brand ? this.$route.query.brand : "",
          type: this.$route.query.type ? this.$route.query.type : "",
          search: value.search ? value.search : ""
        };
        this.searchPlaceHolder = value.search ? value.search : "";
        (this.typeSelected = value.type ? value.type : ""),
          // this.$store.dispatch("getUnderDevProductFromServer", pack);
          this.checkRequest(
            "getUnderDevProductFromServer",
            JSON.stringify(pack)
          );
      },
      deep: true,
      immediate: true
    },
    cookingsData() {
      setTimeout(() => {
        this.setStyle();
      }, 500);
    }
  },
  mounted() {
    if (this.$route.query.developmentType) {
      if (this.$route.query.developmentType == 1) {
        this.type = 1;
      } else {
        this.type = 2;
      }
      document
        .getElementById("contactUsForm")
        .scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
<style>
section#underDevelopDescription p {
  white-space: pre-wrap;
  direction: rtl;
  text-align: justify;
}
section#underDevelopDescription h3 {
  direction: rtl;
  text-align: right;
  font-family: "yekan-bold";
  margin-bottom: 20px;
}
section#underDevelopDescription {
  width: 95%;
  margin: auto;
  padding: 20px;
}
select#selectunderType {
  width: 48%;
  border-radius: 10px;
  border: 4px solid var(--grayBackground);
  direction: rtl;
  padding: 0 30px;
  font-size: 20px;
  font-family: "yekan-bold";
  outline: none;
}
#newUnderProductTitle{
  padding-right:50px;
  text-align: right;
  font-weight: bold;
}
</style>
