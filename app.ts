declare var Vue:any;

interface Descent{
    Secondary: number;
    capacity: number;
    achievement?: number;
    step?: number;
}

interface Universities{
    logo: string;
    name: string;
    location: string;
    Descent?: Descent;
    total?: Number;
}

var universities: Universities[] = [
    {
        logo: 'data:image/png;base64,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',
        name: "أم القرى - صحي / علمي",
        Descent: {
            Secondary: 50,
            capacity: 30,
            achievement: 20
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A3%D9%85+%D8%A7%D9%84%D9%82%D8%B1%D9%89%E2%80%AD/@21.3246372,39.9409622,17z/data=!3m1!4b1!4m5!3m4!1s0x15c2087f0304a515:0xe9ef1c7e0bf9d650!8m2!3d21.3246322!4d39.9387735"
    },
    {
        logo: "https://sdl.edu.sa/training/Upload/Logo/Islamiclog.png",
        name: "الجامعة الإسلامية - علمني",
        Descent: {
            Secondary: 50,
            capacity: 30,
            achievement: 20,
        },
        location: "https://www.google.com.sa/maps/place/%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9+%D8%A8%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9%E2%80%AD/@24.4799997,39.5637561,17z/data=!3m1!4b1!4m5!3m4!1s0x15bdb8d08503af45:0x8a51a7770d40709d!8m2!3d24.4799948!4d39.5615674"
    },
    {
        logo: "https://sdl.edu.sa/training/Upload/Logo/Islamiclog.png",
        name: "الجامعة الإسلامية - إداري",
        Descent: {
            Secondary: 60,
            capacity: 40,
        },
        location: "https://www.google.com.sa/maps/place/%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9+%D8%A8%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9%E2%80%AD/@24.4799997,39.5637561,17z/data=!3m1!4b1!4m5!3m4!1s0x15bdb8d08503af45:0x8a51a7770d40709d!8m2!3d24.4799948!4d39.5615674"
    },
    {
        logo: "http://www.kau.edu.sa/App_Themes/KAU_MAIN4_AR/img/logo_kau.png",
        name: "الملك عبدالعزيز - علمي",
        Descent: {
            Secondary: 50,
            capacity: 30,
            achievement: 20,
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%AC%D8%AF%D9%87+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%B4%D8%B1%D9%81%D9%8A%D8%A9%E2%80%AD/@21.5278249,39.1880299,17z/data=!3m1!4b1!4m5!3m4!1s0x15c3cfd1dd22fe97:0x1f47cb06d6bb9abc!8m2!3d21.5278199!4d39.1858412"
    },
    {
        logo: "http://www.kau.edu.sa/App_Themes/KAU_MAIN4_AR/img/logo_kau.png",
        name: "الملك عبدالعزيز - إداري - بنين",
        Descent: {
            Secondary: 60,
            capacity: 40,
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%AC%D8%AF%D9%87+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%B4%D8%B1%D9%81%D9%8A%D8%A9%E2%80%AD/@21.5278249,39.1880299,17z/data=!3m1!4b1!4m5!3m4!1s0x15c3cfd1dd22fe97:0x1f47cb06d6bb9abc!8m2!3d21.5278199!4d39.1858412"
    },
    {
        logo: "http://www.kau.edu.sa/App_Themes/KAU_MAIN4_AR/img/logo_kau.png",
        name: "الملك عبدالعزيز - إداري - بنات",
        Descent: {
            Secondary: 50,
            capacity: 30,
            achievement: 20,
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%AC%D8%AF%D9%87+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D8%B4%D8%B1%D9%81%D9%8A%D8%A9%E2%80%AD/@21.5278249,39.1880299,17z/data=!3m1!4b1!4m5!3m4!1s0x15c3cfd1dd22fe97:0x1f47cb06d6bb9abc!8m2!3d21.5278199!4d39.1858412"
    },
    {
        logo: "https://www.taibahu.edu.sa/_layouts/15/TaibahUniversity/images/logo-taibah.png",
        name: "طيبة - عملي",
        Descent: {
            Secondary: 50,
            capacity: 30,
            achievement: 20,
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%B7%D9%8A%D8%A8%D8%A9+%D9%82%D8%B3%D9%85+%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%E2%80%AD/@24.4889863,39.552636,17z/data=!4m5!3m4!1s0x15bdb8dfa65765ed:0x754673061fb2f455!8m2!3d24.4889814!4d39.5504473"
    },
    {
        logo: "https://www.taibahu.edu.sa/_layouts/15/TaibahUniversity/images/logo-taibah.png",
        name: "طيبة - إداري - بنين",
        Descent: {
            Secondary: 60,
            capacity: 40,
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%B7%D9%8A%D8%A8%D8%A9%E2%80%AD/@24.4811824,39.5507286,17z/data=!4m12!1m6!3m5!1s0x15bdb8e549824ed7:0xee2671f0041c3214!2z2KzYp9mF2LnYqSDYt9mK2KjYqQ!8m2!3d24.4811775!4d39.5485399!3m4!1s0x15bdb8e549824ed7:0xee2671f0041c3214!8m2!3d24.4811775!4d39.5485399"
    },
    {
        logo: "https://www.taibahu.edu.sa/_layouts/15/TaibahUniversity/images/logo-taibah.png",
        name: "طيبة - إداري - بنات",
        Descent: {
            Secondary: 50,
            capacity: 30,
            achievement: 20,
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%B7%D9%8A%D8%A8%D8%A9+%D9%82%D8%B3%D9%85+%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%E2%80%AD/@24.4889863,39.552636,17z/data=!4m5!3m4!1s0x15bdb8dfa65765ed:0x754673061fb2f455!8m2!3d24.4889814!4d39.5504473"
    },
    {
        logo: 'https://sdl.edu.sa/training/Upload/Logo/%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81.jpg',
        name: "الطائف - صحي / علمي",
        Descent: {
            Secondary: 40,
            capacity: 30,
            achievement: 30
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D8%B7%D8%A7%D8%A6%D9%81%E2%80%AD/@21.4327218,40.4957611,17z/data=!3m1!4b1!4m5!3m4!1s0x15ea2f0d62621269:0x480c27c2c5a6d9bc!8m2!3d21.4327168!4d40.4935724"
    },
    {
        logo: 'http://www.ksau-hs.edu.sa/Arabic/Announcement/PublishingImages/Ramadan_2017.png',
        name: "الملك سعود بن عبدالعزيز - صحي",
        Descent: {
            Secondary: 30,
            capacity: 30,
            achievement: 40
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D9%85%D9%84%D9%83+%D8%B3%D8%B9%D9%88%D8%AF+%D8%A8%D9%86+%D8%B9%D8%A8%D8%AF+%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2+%D9%84%D9%84%D8%B9%D9%84%D9%88%D9%85+%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9%E2%80%AD/@24.7545073,46.855506,17z/data=!4m12!1m6!3m5!1s0x3e2faa48c9c5b51b:0x7e22586db64f17f7!2z2KzYp9mF2LnYqSDYp9mE2YXZhNmDINiz2LnZiNivINio2YYg2LnYqNivINin2YTYudiy2YrYsiDZhNmE2LnZhNmI2YUg2KfZhNi12K3Zitip!8m2!3d24.7545024!4d46.8533173!3m4!1s0x3e2faa48c9c5b51b:0x7e22586db64f17f7!8m2!3d24.7545024!4d46.8533173"

    },
    {
        logo: 'https://www.moe.gov.sa/ar/news/NewsImages/hail-uni.jpg',
        name: "حائل - علمي",
        Descent: {
            Secondary: 35,
            capacity: 35,
            achievement: 30
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%AD%D8%A7%D8%A6%D9%84+%D9%81%D8%B1%D8%B9+%D8%A8%D9%82%D8%B9%D8%A7%D8%A1%E2%80%AD/@27.904598,42.4074332,17z/data=!3m1!4b1!4m5!3m4!1s0x15775ca67118b6a3:0xc22a6def5a614d4a!8m2!3d27.9045933!4d42.4052445",        
    },
    {
        logo: 'https://www.moe.gov.sa/ar/news/NewsImages/hail-uni.jpg',
        name: "حائل - إداري",
        Descent: {
            Secondary: 60,
            capacity: 40,
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%AD%D8%A7%D8%A6%D9%84+%D9%81%D8%B1%D8%B9+%D8%A8%D9%82%D8%B9%D8%A7%D8%A1%E2%80%AD/@27.904598,42.4074332,17z/data=!3m1!4b1!4m5!3m4!1s0x15775ca67118b6a3:0xc22a6def5a614d4a!8m2!3d27.9045933!4d42.4052445",
    },
    {
        logo: 'https://www.ut.edu.sa/image/journal/article?img_id=1982461',
        name: "تبوك - علمي",
        Descent: {
            Secondary: 40,
            capacity: 20,
            achievement: 40
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%AA%D8%A8%D9%88%D9%83%E2%80%AD/@28.3952989,36.4782411,17z/data=!3m1!4b1!4m5!3m4!1s0x15a9af2069268d75:0x73a2580dcdbe5981!8m2!3d28.3952989!4d36.4760524"
    },
    {
        logo: 'https://www.ut.edu.sa/image/journal/article?img_id=1982461',
        name: "تبوك - إداري - بنين",
        Descent: {
            Secondary: 60,
            capacity: 40,
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%AA%D8%A8%D9%88%D9%83%E2%80%AD/@28.3952989,36.4782411,17z/data=!3m1!4b1!4m5!3m4!1s0x15a9af2069268d75:0x73a2580dcdbe5981!8m2!3d28.3952989!4d36.4760524"
    },
    {
        logo: 'https://www.ut.edu.sa/image/journal/article?img_id=1982461',
        name: "تبوك - إداري - بنات",
        Descent: {
            Secondary: 40,
            capacity: 20,
            achievement: 40
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%AA%D8%A8%D9%88%D9%83%E2%80%AD/@28.3952989,36.4782411,17z/data=!3m1!4b1!4m5!3m4!1s0x15a9af2069268d75:0x73a2580dcdbe5981!8m2!3d28.3952989!4d36.4760524"
    },
    {
        logo: 'https://upload.wikimedia.org/wikipedia/ar/1/15/Unijam.jpg',
        name: "الحدود الشمالية - علمي",
        Descent: {
            Secondary: 50,
            capacity: 25,
            achievement: 25
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D8%AD%D8%AF%D9%88%D8%AF+%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%A9%E2%80%AD/@30.8594311,41.2011767,17z/data=!3m1!4b1!4m5!3m4!1s0x156c11cb463229fd:0x8d29b9968fcead63!8m2!3d30.8594265!4d41.198988"
    },
    {
        logo: 'https://upload.wikimedia.org/wikipedia/ar/1/15/Unijam.jpg',
        name: "الحدود الشمالية - إداري - بنين",
        Descent: {
            Secondary: 60,
            capacity: 40,
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D8%AD%D8%AF%D9%88%D8%AF+%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%A9%E2%80%AD/@30.8594311,41.2011767,17z/data=!3m1!4b1!4m5!3m4!1s0x156c11cb463229fd:0x8d29b9968fcead63!8m2!3d30.8594265!4d41.198988"
    },
    {
        logo: 'https://upload.wikimedia.org/wikipedia/ar/1/15/Unijam.jpg',
        name: "الحدود الشمالية - إداري - بنات",
        Descent: {
            Secondary: 60,
            capacity: 20,
            achievement: 20
        },
        location: "https://www.google.com.sa/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D8%AD%D8%AF%D9%88%D8%AF+%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%A9%E2%80%AD/@30.8594311,41.2011767,17z/data=!3m1!4b1!4m5!3m4!1s0x156c11cb463229fd:0x8d29b9968fcead63!8m2!3d30.8594265!4d41.198988"
    },
]

function fixArray(Secondary: number, capacity: number, achievement?: number, step?: number): Universities[] {
    var Fix:Universities[] = universities.map((university,index)=>{
        var total: number = ((<number> (Secondary || 0) /100) * <number>(<Descent>university.Descent).Secondary || 0);
        total += ((<number> (capacity || 0) /100) * <number>(<Descent>university.Descent).capacity || 0);
        total += ((<number> (achievement || 0) /100) * <number>(<Descent>university.Descent).achievement || 0);
        total += ((<number> (step || 0) /100) * <number>(<Descent>university.Descent).step || 0);
        
        university.total = total;

        return university;
    });

    Fix = universities.sort((a,b) => <number>b.total - <number>a.total);

    universities = Fix;
    return Fix;
}

(<HTMLInputElement>document.getElementById("Secondary")).oninput = 
(<HTMLInputElement>document.getElementById("capacity")).oninput =
(<HTMLInputElement>document.getElementById("achievement")).oninput =
(<HTMLInputElement>document.getElementById("step")).oninput = ()=>{
    fixArray(parseFloat((<HTMLInputElement>document.getElementById("Secondary")).value),
             parseFloat((<HTMLInputElement>document.getElementById("capacity")).value),
             parseFloat((<HTMLInputElement>document.getElementById("achievement")).value),
             parseFloat((<HTMLInputElement>document.getElementById("step")).value));
}

var app4 = new Vue({
  el: '#listview',
  data: {
    universities
  }
})